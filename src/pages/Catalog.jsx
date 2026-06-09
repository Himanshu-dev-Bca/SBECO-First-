import { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import CategorySidebar from '../components/CategorySidebar';
import { CATALOGUE } from '../data/products';

const SORT_OPTIONS = [
  { value: 'default', label: 'Default' },
  { value: 'best-seller', label: 'Best Seller' },
  { value: 'latest', label: 'Latest Products' },
  { value: 'name-asc', label: 'Name A–Z' },
  { value: 'name-desc', label: 'Name Z–A' },
  { value: 'brand', label: 'Brand' },
];

/* ─────────── helper – flatten a category tree to a list of products ─────────── */
function flattenCategory(cat) {
  const items = [];
  cat.subcategories.forEach((sub) => {
    if (sub.products) sub.products.forEach((p) => items.push({ ...p, subName: sub.name }));
    if (sub.nestedSubcategories) {
      sub.nestedSubcategories.forEach((nested) => {
        if (nested.products)
          nested.products.forEach((p) => items.push({ ...p, subName: sub.name, nestedSubName: nested.name }));
      });
    }
  });
  return items;
}

export default function Catalog() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const subParam = searchParams.get('sub');
  const nestedParam = searchParams.get('nested');
  const search = searchParams.get('search') || '';
  const [sort, setSort] = useState('default');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const currentCategory = CATALOGUE.find((c) => c.id === categoryParam) || null;
  const currentSub = currentCategory?.subcategories.find((s) => s.id === subParam) || null;
  const currentNested = currentSub?.nestedSubcategories?.find((n) => n.id === nestedParam) || null;

  /* If no category is selected, auto-pick the first one to avoid an empty view */
  useEffect(() => {
    if (!categoryParam && CATALOGUE.length > 0) {
      // Don't auto-redirect — show a welcome state in the main area
    }
  }, [categoryParam]);

  /* ─────────── filter + sort products for the current view ─────────── */
  const results = useMemo(() => {
    if (!currentCategory) return [];
    const q = search.toLowerCase().trim();

    const items = flattenCategory(currentCategory);

    let filtered = items.filter((p) => {
      const matchSub = !subParam || p.subName === currentSub?.name;
      const matchNested = !nestedParam || p.nestedSubName === currentNested?.name;
      const matchQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        (p.tagline || '').toLowerCase().includes(q) ||
        (p.brand || '').toLowerCase().includes(q) ||
        (p.subName || '').toLowerCase().includes(q);
      return matchSub && matchNested && matchQ;
    });

    const sorted = [...filtered];
    switch (sort) {
      case 'best-seller':
        sorted.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
        break;
      case 'latest':
        sorted.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
      case 'name-asc':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'brand':
        sorted.sort((a, b) => (a.brand || '').localeCompare(b.brand || '') || a.name.localeCompare(b.name));
        break;
    }
    return sorted;
  }, [currentCategory, currentSub, currentNested, subParam, nestedParam, search, sort]);

  /* ─────────── title / breadcrumb text ─────────── */
  const headingTitle = currentCategory ? currentCategory.name : 'Products';
  const headingSubtitle = currentCategory
    ? currentCategory.description
    : 'Use the panel on the left to browse our product categories. Click any product to view full details.';
  const breadcrumb = [currentCategory?.name, currentSub?.name, currentNested?.name].filter(Boolean);

  return (
    <div className="catalog-layout flex min-h-[calc(100vh-80px)] bg-white">
      {/* ─── Sidebar (desktop + mobile) ─── */}
      <div
        className={`fixed inset-0 z-40 lg:static lg:z-auto lg:inset-auto lg:translate-x-0 transition-transform duration-300 ${
          mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
        style={{ width: '280px' }}
      >
        {/* overlay for mobile */}
        <div
          className={`absolute inset-0 bg-black/40 lg:hidden ${mobileSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}
          onClick={() => setMobileSidebarOpen(false)}
          aria-hidden="true"
        />
        <div className="relative h-full w-[280px] shrink-0">
          <CategorySidebar
            categories={CATALOGUE}
            mode="catalog"
            onMobileClose={() => setMobileSidebarOpen(false)}
          />
        </div>
      </div>

      {/* ─── Main content ─── */}
      <main className="flex-1 min-w-0 flex flex-col">
        {/* Top toolbar */}
        <div className="sticky top-20 z-30 bg-white border-b border-gray-200 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-3 px-4 md:px-8 py-3 flex-wrap">
            {/* Mobile sidebar trigger */}
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="lg:hidden flex items-center gap-2 px-3 py-2 border border-gray-200 text-[11px] font-bold tracking-[.08em] uppercase text-gray-700 hover:border-accent hover:text-accent transition-colors"
              aria-label="Open sidebar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
              Categories
            </button>

            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-[10px] tracking-[.08em] uppercase text-gray-500 min-w-0 flex-1 overflow-x-auto">
              <Link to="/products" className="hover:text-accent no-underline shrink-0 font-semibold">
                All Products
              </Link>
              {breadcrumb.map((b, i) => (
                <span key={i} className="flex items-center gap-1.5 shrink-0">
                  <span className="text-gray-300">›</span>
                  <span className={i === breadcrumb.length - 1 ? 'text-black font-bold' : 'text-gray-500'}>{b}</span>
                </span>
              ))}
            </nav>

            {/* Sort */}
            <div className="flex items-center gap-2 ml-auto">
              <span className="hidden md:inline text-[10px] tracking-[.1em] uppercase text-gray-400 font-semibold whitespace-nowrap">
                Sort by
              </span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="text-[10px] tracking-[.06em] uppercase font-semibold px-3 py-2 pr-8 border border-gray-200 bg-white text-gray-700 cursor-pointer outline-none appearance-none hover:border-black focus:border-accent transition-colors bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%226%22%3E%3Cpath%20d%3D%22M1%201l4%204%204-4%22%20stroke%3D%22%236b7280%22%20fill%3D%22none%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_10px_center]"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Heading area */}
        <div className="px-4 md:px-8 pt-8 pb-6 border-b border-gray-100 bg-gradient-to-b from-gray-50/60 to-white">
          <div className="text-[10px] tracking-[.2em] uppercase text-accent font-semibold mb-2">Super Bright Labs</div>
          <h1 className="text-[26px] md:text-[34px] font-extrabold uppercase tracking-[.02em] leading-tight text-black mb-2">
            {headingTitle}
          </h1>
          <p className="text-[13px] text-gray-500 max-w-[680px] leading-relaxed">{headingSubtitle}</p>
          {currentCategory && (
            <div className="mt-3 text-[10px] tracking-[.12em] uppercase text-gray-400 font-semibold">
              {results.length} {results.length === 1 ? 'Product' : 'Products'} found
              {search && <span className="ml-1">for &ldquo;{search}&rdquo;</span>}
            </div>
          )}
        </div>

        {/* Product display area */}
        <div className="flex-1 px-4 md:px-8 py-8">
          {!currentCategory ? (
            <WelcomeState />
          ) : results.length === 0 ? (
            <EmptyState onClearSearch={search ? () => navigate('/products?category=' + categoryParam) : null} />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {results.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

/* ─────────── Welcome state when no category is selected ─────────── */
function WelcomeState() {
  return (
    <div className="max-w-3xl mx-auto py-12 text-center">
      <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-accent/10 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-accent">
          <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
        </svg>
      </div>
      <h2 className="text-[18px] font-bold uppercase tracking-[.04em] text-black mb-2">Welcome to Our Catalog</h2>
      <p className="text-[13px] text-gray-500 leading-relaxed max-w-xl mx-auto">
        Select a category from the navigation panel on the left to begin exploring our products. Each category contains
        curated subcategories with full product details, specifications, and related items.
      </p>
    </div>
  );
}

/* ─────────── Empty state when no results match ─────────── */
function EmptyState({ onClearSearch }) {
  return (
    <div className="text-center py-16 text-gray-400">
      <div className="text-5xl mb-3 opacity-40">⊘</div>
      <div className="text-[13px] tracking-[.08em] uppercase font-semibold mb-2">No products found</div>
      <p className="text-[12px] text-gray-400 mb-4">
        Try selecting a different category or subcategory from the sidebar.
      </p>
      {onClearSearch && (
        <button
          onClick={onClearSearch}
          className="text-[11px] tracking-[.08em] uppercase font-bold text-accent hover:underline"
        >
          Clear search
        </button>
      )}
    </div>
  );
}

/* ─────────── Modern product card with smooth transitions ─────────── */
function ProductCard({ product, index }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group relative border border-gray-200 bg-white overflow-hidden no-underline text-black hover:border-black hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,.08)] transition-all duration-300 animate-fade-up"
      style={{ animationDelay: `${Math.min(index, 8) * 0.04}s` }}
    >
      <div className="bg-gray-50 h-[220px] flex items-center justify-center overflow-hidden relative">
        <span className="absolute top-2.5 left-2.5 text-[8px] text-gray-400 tracking-[.08em] uppercase border border-gray-200 px-1.5 py-0.5 bg-white/90 backdrop-blur-sm z-10">
          {product.subName}
        </span>
        {product.badge && (
          <span className="absolute top-2.5 right-2.5 text-[8px] bg-accent text-white px-2 py-0.5 tracking-[.1em] uppercase font-bold z-10">
            {product.badge}
          </span>
        )}
        <img
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain p-3 group-hover:scale-[1.06] transition-transform duration-500 ease-out"
        />
      </div>
      <div className="p-4">
        <div className="text-[9px] text-gray-400 tracking-[.08em] uppercase mb-1">{product.sku}</div>
        <h3 className="text-[13px] font-bold uppercase tracking-[.02em] mb-1.5 leading-snug line-clamp-2 min-h-[2.4em]">
          {product.name}
        </h3>
        <p className="text-[11px] text-gray-500 leading-snug mb-3 line-clamp-2 min-h-[2.4em]">{product.tagline}</p>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-[9px] text-gray-400 tracking-[.06em] uppercase">{product.brand}</span>
          <div className="w-7 h-7 border border-gray-200 flex items-center justify-center text-xs text-gray-400 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
