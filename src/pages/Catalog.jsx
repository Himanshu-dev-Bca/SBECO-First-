import { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Hero from '../components/Hero';
import { allProducts, CATALOGUE } from '../data/products';

const SORT_OPTIONS = [
  { value: 'default', label: 'Default' },
  { value: 'best-seller', label: 'Best Seller' },
  { value: 'latest', label: 'Latest Products' },
  { value: 'name-asc', label: 'Name A–Z' },
  { value: 'name-desc', label: 'Name Z–A' },
  { value: 'brand', label: 'Brand' },
];

export default function Catalog() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [sort, setSort] = useState('default');

  useEffect(() => {
    const q = searchParams.get('search') || '';
    setSearch(q);
  }, [searchParams]);

  const results = useMemo(() => {
    if (!categoryParam) return [];
    const q = search.toLowerCase();
    const categoryName = CATALOGUE.find(c => c.id === categoryParam)?.name;

    let filtered = allProducts.filter(p => {
      const matchCat = p.cat === categoryName;
      const matchQ = !q || p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.sub.toLowerCase().includes(q);
      return matchCat && matchQ;
    });

    const sorted = [...filtered];
    switch (sort) {
      case 'best-seller': sorted.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0)); break;
      case 'latest': sorted.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)); break;
      case 'name-asc': sorted.sort((a, b) => a.name.localeCompare(b.name)); break;
      case 'name-desc': sorted.sort((a, b) => b.name.localeCompare(a.name)); break;
      case 'brand': sorted.sort((a, b) => a.brand.localeCompare(b.brand) || a.name.localeCompare(b.name)); break;
    }
    return sorted;
  }, [categoryParam, search, sort]);

  /* ─────────── CATEGORY OVERVIEW (no ?category param) ─────────── */
  if (!categoryParam) {
    return (
      <>
        <Hero label="Super Bright Labs · Product Categories"
          title={<>Browse Our<br/>Categories</>}
          subtitle="Explore our complete range of industrial packaging, tools, and facility solutions — engineered for demanding environments." />

        {/* Category Cards Grid */}
        <section className="px-8 md:px-12 py-14 bg-gray-50">
          <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3 mb-10 pb-3.5 border-b-2 border-black">
            Our Categories <span className="text-[11px] text-gray-400 font-light">{CATALOGUE.length} categories</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {CATALOGUE.map((c, i) => {
              const productCount = c.subcategories.reduce((acc, sub) => {
                let count = sub.products ? sub.products.length : 0;
                if (sub.nestedSubcategories) {
                  count += sub.nestedSubcategories.reduce((nestedAcc, nested) => nestedAcc + (nested.products ? nested.products.length : 0), 0);
                }
                return acc + count;
              }, 0);
              return (
                <Link key={c.id} to={`/products?category=${c.id}`}
                  className="group relative border border-gray-200 bg-white overflow-hidden no-underline text-black hover:border-black hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,.1)] transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${i * .08}s` }}>
                  {/* Image area */}
                  <div className="relative h-[240px] bg-gray-100 overflow-hidden border-b border-gray-200">
                    <img
                      src={c.imageUrl}
                      alt={c.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-500 ease-out"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    {/* Product count badge */}
                    <span className="absolute top-4 right-4 text-[9px] bg-accent text-white px-3 py-1.5 tracking-[.12em] uppercase font-bold">
                      {productCount > 0 ? `${productCount} Products` : 'Coming Soon'}
                    </span>
                    {/* Category name over image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h2 className="text-xl font-extrabold uppercase tracking-[.04em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,.4)] leading-tight">
                        {c.name}
                      </h2>
                    </div>
                  </div>

                  {/* Description area */}
                  <div className="p-6">
                    <p className="text-[13px] text-gray-600 leading-relaxed mb-5">
                      {c.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-[10px] tracking-[.1em] uppercase font-semibold text-gray-400">
                        {c.subcategories.length > 0 ? `${c.subcategories.length} Subcategories` : 'Products Coming Soon'}
                      </span>
                      <div className="flex items-center gap-2 text-[11px] tracking-[.08em] uppercase font-bold text-accent group-hover:gap-3 transition-all duration-300">
                        Explore
                        <div className="w-8 h-8 border border-gray-200 flex items-center justify-center text-sm text-gray-400 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300">
                          →
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </>
    );
  }

  /* ─────────── CATEGORY PRODUCT LIST ─────────── */
  const currentCategory = CATALOGUE.find(c => c.id === categoryParam);
  const currentCategoryName = currentCategory?.name || 'Products';

  return (
    <>
      <Hero label={`Super Bright Labs · ${currentCategoryName}`}
        title={<>{currentCategoryName}</>}
        subtitle={currentCategory?.description || 'Explore our products in this category.'} />

      {/* Toolbar */}
      <div className="flex items-center justify-between px-8 md:px-12 py-4 border-b border-gray-200 bg-white sticky top-20 z-40 gap-4 flex-wrap">
        <Link to="/products" className="text-[11px] tracking-[.08em] uppercase text-gray-500 hover:text-accent no-underline font-semibold mr-4 transition-colors">
          ← Back to Categories
        </Link>
        <div className="flex items-center gap-2 border border-gray-200 px-3.5 py-2 bg-white flex-1 min-w-[280px]">
          <span className="text-gray-400 text-sm">⊘</span>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search products by name, SKU, or keyword..."
            className="border-none outline-none text-[13px] bg-transparent w-full" />
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-[10px] tracking-[.1em] uppercase text-gray-400 font-semibold whitespace-nowrap">Sort by</span>
          <select value={sort} onChange={e => setSort(e.target.value)}
            className="text-[11px] tracking-[.06em] uppercase font-semibold px-3.5 py-2 pr-8 border border-gray-200 bg-white text-gray-600 cursor-pointer outline-none appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%226%22%3E%3Cpath%20d%3D%22M1%201l4%204%204-4%22%20stroke%3D%22%236b7280%22%20fill%3D%22none%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_12px_center] hover:border-black focus:border-accent transition-colors">
            {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
        <div className="text-[11px] text-gray-400 tracking-[.06em]">{results.length} products found</div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-8 md:px-12 py-10">
        {results.map((p, i) => (
          <Link key={p.id} to={`/products/${p.id}`}
            className="group border border-gray-200 bg-white overflow-hidden no-underline text-black hover:border-black hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,.08)] transition-all animate-fade-up"
            style={{ animationDelay: `${Math.min(i, 8) * .04}s` }}>
            <div className="bg-gray-100 h-[200px] flex items-center justify-center border-b border-gray-200 overflow-hidden relative">
              <span className="absolute top-3 left-3 text-[9px] text-gray-400 tracking-[.08em] uppercase border border-gray-200 px-2 py-0.5 bg-white">{p.sub}</span>
              <img src={p.img} alt={p.name} loading="lazy" className="max-w-[65%] max-h-[65%] object-contain group-hover:scale-105 transition-transform duration-300" />
              <span className="absolute top-3 right-3 text-[9px] bg-accent text-white px-2.5 py-1 tracking-[.1em] uppercase font-bold">{p.badge}</span>
            </div>
            <div className="p-5">
              <div className="text-[10px] text-gray-400 tracking-[.08em] uppercase mb-1">{p.sku}</div>
              <div className="text-[15px] font-bold uppercase tracking-[.02em] mb-1">{p.name}</div>
              <p className="text-[12px] text-gray-600 leading-snug mb-3">{p.tagline}</p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-[10px] text-gray-400 tracking-[.06em]">{p.brand}</span>
                <div className="w-7 h-7 border border-gray-200 flex items-center justify-center text-xs text-gray-400 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all">→</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {results.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <div className="text-4xl mb-4">⊘</div>
          <div className="text-[13px] tracking-[.06em] uppercase">No products found in this category</div>
        </div>
      )}
    </>
  );
}
