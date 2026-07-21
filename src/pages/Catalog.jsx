import { useMemo, useState, useEffect, useCallback } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { allProducts, CATALOGUE } from '../data/products';
import FilterPanel from '../components/FilterPanel';
import ProductCard from '../components/ProductCard';
import SortDropdown from '../components/SortDropdown';
import CategoryTabs from '../components/CategoryTabs';
import { SkeletonGrid } from '../components/SkeletonCard';

// Extract unique brands from all products
const ALL_BRANDS = [...new Set(allProducts.map((p) => p.brand).filter(Boolean))].sort();

// Featured / best-seller products
const FEATURED = allProducts.filter((p) => p.isBestSeller);

// Helper: count products in a category
function getProductCount(cat) {
  let count = 0;
  cat.subcategories.forEach((sub) => {
    if (sub.products) count += sub.products.length;
    if (sub.nestedSubcategories)
      sub.nestedSubcategories.forEach((n) => {
        if (n.products) count += n.products.length;
      });
  });
  return count;
}

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Filter state
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || null
  );
  const [selectedSubcategory, setSelectedSubcategory] = useState(
    searchParams.get('sub') || null
  );
  const [selectedNested, setSelectedNested] = useState(
    searchParams.get('nested') || null
  );
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sort, setSort] = useState('default');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [isLoading, setIsLoading] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Sync URL params → state on mount and URL change
  useEffect(() => {
    const cat = searchParams.get('category');
    const sub = searchParams.get('sub');
    const nested = searchParams.get('nested');
    const search = searchParams.get('search');

    if (cat) setSelectedCategory(cat);
    if (sub) setSelectedSubcategory(sub);
    if (nested) setSelectedNested(nested);
    if (search) setSearchQuery(search);
  }, [searchParams]);

  // Lock body scroll when mobile sidebar is open
  useEffect(() => {
    if (mobileSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileSidebarOpen]);

  // Simulate brief loading state on filter changes
  const triggerLoading = useCallback(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  // Update URL when filters change
  const updateURL = useCallback(
    (cat, sub, nested, search) => {
      const params = {};
      if (cat) params.category = cat;
      if (sub) params.sub = sub;
      if (nested) params.nested = nested;
      if (search) params.search = search;
      setSearchParams(params, { replace: true });
    },
    [setSearchParams]
  );

  // Filter handlers
  const handleCategorySelect = (catId) => {
    triggerLoading();
    setSelectedCategory(catId);
    setSelectedSubcategory(null);
    setSelectedNested(null);
    updateURL(catId, null, null, searchQuery);
    setMobileSidebarOpen(false);
  };

  const handleSubcategorySelect = (catId, subId) => {
    triggerLoading();
    setSelectedCategory(catId);
    setSelectedSubcategory(subId);
    setSelectedNested(null);
    updateURL(catId, subId, null, searchQuery);
    setMobileSidebarOpen(false);
  };

  const handleNestedSelect = (catId, subId, nestedId) => {
    triggerLoading();
    setSelectedCategory(catId);
    setSelectedSubcategory(subId);
    setSelectedNested(nestedId);
    updateURL(catId, subId, nestedId, searchQuery);
    setMobileSidebarOpen(false);
  };

  const handleBrandToggle = (brand) => {
    triggerLoading();
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleClearFilters = () => {
    triggerLoading();
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setSelectedNested(null);
    setSelectedBrands([]);
    setSearchQuery('');
    setSearchParams({}, { replace: true });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    triggerLoading();
    updateURL(selectedCategory, selectedSubcategory, selectedNested, searchQuery);
  };

  // ─── Filter + Sort + Search Logic ───
  const products = useMemo(() => {
    let filtered = [...allProducts];

    // Category filter
    if (selectedCategory) {
      const cat = CATALOGUE.find((c) => c.id === selectedCategory);
      if (cat) {
        const catProductIds = new Set();

        if (selectedSubcategory) {
          const sub = cat.subcategories.find((s) => s.id === selectedSubcategory);
          if (sub) {
            if (selectedNested && sub.nestedSubcategories) {
              const nested = sub.nestedSubcategories.find(
                (n) => n.id === selectedNested
              );
              if (nested?.products) {
                nested.products.forEach((p) => catProductIds.add(p.id));
              }
            } else {
              if (sub.products) sub.products.forEach((p) => catProductIds.add(p.id));
              if (sub.nestedSubcategories) {
                sub.nestedSubcategories.forEach((nested) => {
                  if (nested.products)
                    nested.products.forEach((p) => catProductIds.add(p.id));
                });
              }
            }
          }
        } else {
          cat.subcategories.forEach((sub) => {
            if (sub.products) sub.products.forEach((p) => catProductIds.add(p.id));
            if (sub.nestedSubcategories) {
              sub.nestedSubcategories.forEach((nested) => {
                if (nested.products)
                  nested.products.forEach((p) => catProductIds.add(p.id));
              });
            }
          });
        }

        filtered = filtered.filter((p) => catProductIds.has(p.id));
      }
    }

    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((p) =>
        selectedBrands.some(
          (b) => b.toLowerCase() === (p.brand || '').toLowerCase()
        )
      );
    }

    // Search filter
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.tagline || '').toLowerCase().includes(q) ||
          (p.brand || '').toLowerCase().includes(q) ||
          (p.cat || '').toLowerCase().includes(q)
      );
    }

    // Sorting
    const sorted = [...filtered];
    switch (sort) {
      case 'name-asc':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'brand':
        sorted.sort(
          (a, b) =>
            (a.brand || '').localeCompare(b.brand || '') ||
            a.name.localeCompare(b.name)
        );
        break;
      case 'newest':
        sorted.sort(
          (a, b) =>
            new Date(b.dateAdded || 0) - new Date(a.dateAdded || 0) ||
            a.name.localeCompare(b.name)
        );
        break;
    }

    return sorted;
  }, [selectedCategory, selectedSubcategory, selectedNested, selectedBrands, searchQuery, sort]);

  // Active filter summary for breadcrumbs
  const filterSummary = useMemo(() => {
    const parts = [];
    if (selectedCategory) {
      const cat = CATALOGUE.find((c) => c.id === selectedCategory);
      if (cat) parts.push(cat.name);
    }
    if (selectedSubcategory && selectedCategory) {
      const cat = CATALOGUE.find((c) => c.id === selectedCategory);
      const sub = cat?.subcategories.find((s) => s.id === selectedSubcategory);
      if (sub) parts.push(sub.name);
    }
    if (selectedNested && selectedSubcategory && selectedCategory) {
      const cat = CATALOGUE.find((c) => c.id === selectedCategory);
      const sub = cat?.subcategories.find((s) => s.id === selectedSubcategory);
      const nested = sub?.nestedSubcategories?.find(
        (n) => n.id === selectedNested
      );
      if (nested) parts.push(nested.name);
    }
    return parts;
  }, [selectedCategory, selectedSubcategory, selectedNested]);

  // Should we show the featured products section?
  const showFeatured = !selectedCategory && !searchQuery && FEATURED.length > 0 && selectedBrands.length === 0;

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 catalog-layout" id="products-page">
      {/* ═══ Page Header ═══ */}
      <div className="px-6 md:px-12 pt-8 pb-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-[10px] tracking-[.06em] uppercase text-gray-400 mb-3">
            <Link to="/" className="hover:text-accent no-underline font-medium">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <Link to="/products" className="hover:text-accent no-underline font-medium" onClick={(e) => { e.preventDefault(); handleClearFilters(); }}>Products</Link>
            {filterSummary.map((label, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span className="breadcrumb-sep">›</span>
                <span className="text-gray-600 font-semibold">{label}</span>
              </span>
            ))}
          </nav>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <h1 className="text-[26px] md:text-[32px] font-extrabold tracking-tight text-slate-900 mb-1">
                {filterSummary.length > 0 ? filterSummary[filterSummary.length - 1] : 'Products'}
              </h1>
              <p className="text-[13px] text-gray-500 max-w-[540px] leading-relaxed">
                Browse our complete range of industrial packaging tools and supplies.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-[10px] font-bold tracking-[.1em] uppercase no-underline hover:bg-accent-hover hover:-translate-y-0.5 transition-all rounded-md shrink-0 self-start md:self-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
              </svg>
              Request a Quotation
            </Link>
          </div>
        </div>
      </div>

      {/* ═══ Category Tabs Strip ═══ */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-4">
          <CategoryTabs
            categories={CATALOGUE}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
            getProductCount={getProductCount}
          />
        </div>
      </div>

      {/* ═══ Toolbar ═══ */}
      <div className="sticky top-16 md:top-20 z-20 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex flex-wrap items-center gap-3">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="lg:hidden flex items-center gap-2 px-3.5 py-2.5 border border-gray-200 text-[10px] font-bold tracking-[.08em] uppercase text-gray-700 hover:border-accent hover:text-accent transition-colors rounded-lg bg-white cursor-pointer"
            id="mobile-filter-toggle"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clipRule="evenodd" />
            </svg>
            Filters
            {(selectedCategory || selectedBrands.length > 0) && (
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            )}
          </button>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="flex-1 min-w-[200px] max-w-[400px]">
            <div className="flex items-center gap-2 border border-gray-200 px-3.5 py-2 bg-white rounded-lg hover:border-gray-400 focus-within:border-accent transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-400 shrink-0">
                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
              </svg>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="border-none outline-none text-[12px] tracking-[.02em] bg-transparent w-full placeholder:text-gray-400"
                id="product-search"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    triggerLoading();
                    updateURL(selectedCategory, selectedSubcategory, selectedNested, '');
                  }}
                  className="text-gray-400 hover:text-gray-600 bg-transparent border-none cursor-pointer p-0.5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M5.28 4.22a.75.75 0 00-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 101.06 1.06L8 9.06l2.72 2.72a.75.75 0 101.06-1.06L9.06 8l2.72-2.72a.75.75 0 00-1.06-1.06L8 6.94 5.28 4.22z" />
                  </svg>
                </button>
              )}
            </div>
          </form>

          {/* Sort + results count */}
          <div className="flex items-center gap-4 ml-auto">
            <div className="text-[10px] tracking-[.08em] uppercase text-gray-400 font-medium hidden sm:block whitespace-nowrap">
              {products.length} {products.length === 1 ? 'product' : 'products'}
            </div>
            <SortDropdown value={sort} onChange={(v) => { setSort(v); triggerLoading(); }} />
          </div>
        </div>

        {/* Active filter breadcrumbs */}
        {(filterSummary.length > 0 || selectedBrands.length > 0 || searchQuery) && (
          <div className="max-w-7xl mx-auto px-6 md:px-12 pb-3 flex flex-wrap items-center gap-2">
            {filterSummary.map((label, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 text-[9px] tracking-[.06em] uppercase font-semibold bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
              >
                {label}
              </span>
            ))}
            {selectedBrands.map((brand) => (
              <span
                key={brand}
                className="inline-flex items-center gap-1.5 text-[9px] tracking-[.06em] uppercase font-semibold bg-accent/10 text-accent px-2.5 py-1 rounded-full"
              >
                {brand}
                <button
                  onClick={() => handleBrandToggle(brand)}
                  className="hover:text-accent-hover bg-transparent border-none cursor-pointer p-0 text-accent leading-none"
                >
                  ×
                </button>
              </span>
            ))}
            {searchQuery && (
              <span className="inline-flex items-center gap-1.5 text-[9px] tracking-[.06em] uppercase font-semibold bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full">
                "{searchQuery}"
                <button
                  onClick={() => {
                    setSearchQuery('');
                    triggerLoading();
                    updateURL(selectedCategory, selectedSubcategory, selectedNested, '');
                  }}
                  className="hover:text-blue-800 bg-transparent border-none cursor-pointer p-0 text-blue-600 leading-none"
                >
                  ×
                </button>
              </span>
            )}
            <button
              onClick={handleClearFilters}
              className="text-[9px] tracking-[.06em] uppercase font-semibold text-gray-400 hover:text-accent transition-colors bg-transparent border-none cursor-pointer"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* ═══ Main Content Area ═══ */}
      <div className="max-w-7xl mx-auto flex min-h-screen items-start">
        {/* ── Desktop Sidebar ── */}
        <div className="hidden lg:block w-[280px] shrink-0 sticky top-[80px] self-start h-[calc(100vh-80px)] border-r border-gray-200 bg-white z-20">
          <FilterPanel
            categories={CATALOGUE}
            selectedCategory={selectedCategory}
            selectedSubcategory={selectedSubcategory}
            selectedNested={selectedNested}
            selectedBrands={selectedBrands}
            onCategorySelect={handleCategorySelect}
            onSubcategorySelect={handleSubcategorySelect}
            onNestedSelect={handleNestedSelect}
            onBrandToggle={handleBrandToggle}
            onClearFilters={handleClearFilters}
            allBrands={ALL_BRANDS}
          />
        </div>

        {/* ── Mobile Sidebar Overlay ── */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
            mobileSidebarOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMobileSidebarOpen(false)}
        />
        <div
          className={`lg:hidden fixed inset-y-0 left-0 z-50 w-[300px] max-w-[85vw] transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] ${
            mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <FilterPanel
            categories={CATALOGUE}
            selectedCategory={selectedCategory}
            selectedSubcategory={selectedSubcategory}
            selectedNested={selectedNested}
            selectedBrands={selectedBrands}
            onCategorySelect={handleCategorySelect}
            onSubcategorySelect={handleSubcategorySelect}
            onNestedSelect={handleNestedSelect}
            onBrandToggle={handleBrandToggle}
            onClearFilters={handleClearFilters}
            onMobileClose={() => setMobileSidebarOpen(false)}
            allBrands={ALL_BRANDS}
          />
        </div>

        {/* ── Product Grid ── */}
        <div className="flex-1 min-w-0 px-5 md:px-8 py-6">
          {/* Results count (mobile) */}
          <div className="sm:hidden text-[10px] tracking-[.08em] uppercase text-gray-400 font-medium mb-4">
            {products.length} {products.length === 1 ? 'product' : 'products'}
          </div>

          {/* ── Featured / Best-Sellers (when no filter active) ── */}
          {showFeatured && (
            <div className="mb-8 animate-fade-up">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <h2 className="text-[13px] font-bold tracking-[.1em] uppercase text-slate-900 m-0">
                    Featured Products
                  </h2>
                </div>
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-[9px] tracking-[.06em] uppercase text-gray-400 font-medium">
                  {FEATURED.length} items
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {FEATURED.slice(0, 4).map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            </div>
          )}

          {/* ── All Products Grid ── */}
          {isLoading ? (
            <SkeletonGrid count={8} />
          ) : products.length === 0 ? (
            <div className="text-center py-20 text-gray-400 animate-fade-up">
              <div className="text-5xl mb-4 opacity-30">⊘</div>
              <div className="text-[13px] tracking-[.06em] uppercase font-semibold mb-2">
                No products found
              </div>
              <p className="text-[12px] text-gray-500 mb-6 max-w-md mx-auto">
                Try adjusting your filters, search query, or browse a different category.
              </p>
              {/* Suggest categories */}
              <div className="flex flex-wrap justify-center gap-2 mb-5">
                {CATALOGUE.slice(0, 4).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className="text-[10px] tracking-[.06em] uppercase font-semibold text-gray-600 bg-gray-100 px-4 py-2 rounded-lg hover:bg-accent/10 hover:text-accent transition-colors cursor-pointer border-none"
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
              <button
                onClick={handleClearFilters}
                className="text-[11px] tracking-[.06em] uppercase font-bold text-accent hover:text-accent-hover transition-colors bg-transparent border border-accent/20 hover:border-accent px-5 py-2.5 rounded-lg cursor-pointer"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <>
              {/* Section header when category is selected */}
              {selectedCategory && !showFeatured && (
                <div className="flex items-center gap-3 mb-5 animate-fade-up">
                  <h2 className="text-[13px] font-bold tracking-[.1em] uppercase text-slate-900 m-0">
                    {filterSummary[filterSummary.length - 1] || 'All Products'}
                  </h2>
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-[9px] tracking-[.06em] uppercase text-gray-400 font-medium">
                    {products.length} items
                  </span>
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {products.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
