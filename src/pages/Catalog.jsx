import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { allProducts, CATALOGUE } from '../data/products';

const SORT_OPTIONS = [

  { value: 'default', label: 'Default' },
  { value: 'name-asc', label: 'Name A–Z' },
  { value: 'name-desc', label: 'Name Z–A' },
  { value: 'brand', label: 'Brand' },
];

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category') || 'all';
  const [sort, setSort] = useState('default');

  /* Build unique category list from CATALOGUE */

  const categories = useMemo(() => {
    return [
      { id: 'all', name: 'All Products' },
      ...CATALOGUE.map((c) => ({ id: c.id, name: c.name })),
    ];
  }, []);

  /* Filter and sort products — show up to 20 */
  const products = useMemo(() => {
    let filtered = [...allProducts];

    if (categoryFilter !== 'all') {
      const cat = CATALOGUE.find((c) => c.id === categoryFilter);
      if (cat) {
        const catProductIds = new Set();
        cat.subcategories.forEach((sub) => {
          if (sub.products) sub.products.forEach((p) => catProductIds.add(p.id));
          if (sub.nestedSubcategories) {
            sub.nestedSubcategories.forEach((nested) => {
              if (nested.products) nested.products.forEach((p) => catProductIds.add(p.id));
            });
          }
        });
        filtered = filtered.filter((p) => catProductIds.has(p.id));
      }
    }

    const sorted = [...filtered];
    switch (sort) {
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

    return sorted.slice(0, 20);
  }, [categoryFilter, sort]);

  const handleCategoryChange = (catId) => {
    if (catId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: catId });
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50">
      {/* Page Header */}
      <div className="px-6 md:px-12 pt-10 pb-8 bg-white border-b border-gray-200">
        <div className="text-[10px] tracking-[.15em] uppercase text-accent font-semibold mb-2">
          Super Bright Labs
        </div>
        <h1 className="text-[28px] md:text-[36px] font-extrabold tracking-tight text-slate-900 mb-3">
          Our Products
        </h1>
        <p className="text-[14px] text-gray-500 max-w-[600px] leading-relaxed">
          Browse our complete range of industrial packaging tools and supplies. Click any product to view full details, specifications, and similar items.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-16 md:top-20 z-20 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="px-6 md:px-12 py-3 flex flex-wrap items-center gap-3">
          {/* Category pills */}
          <div className="flex flex-wrap items-center gap-2 flex-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 text-[10px] tracking-[.06em] uppercase font-semibold rounded-full border cursor-pointer transition-all duration-200 ${
                  categoryFilter === cat.id
                    ? 'bg-accent text-white border-accent'
                    : 'bg-transparent text-gray-500 border-gray-200 hover:border-gray-400 hover:text-slate-900'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="hidden md:inline text-[10px] tracking-[.1em] uppercase text-gray-400 font-semibold whitespace-nowrap">
              Sort by
            </span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-[10px] tracking-[.06em] uppercase font-semibold px-3 py-2 pr-8 border border-gray-200 bg-white text-gray-700 cursor-pointer outline-none appearance-none hover:border-black focus:border-accent transition-colors rounded-lg bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%226%22%3E%3Cpath%20d%3D%22M1%201l4%204%204-4%22%20stroke%3D%22%236b7280%22%20fill%3D%22none%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_10px_center]"
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

      {/* Results count */}
      <div className="px-6 md:px-12 pt-6 pb-2">
        <div className="text-[11px] tracking-[.1em] uppercase text-gray-400 font-medium">
          {products.length} {products.length === 1 ? 'Product' : 'Products'} shown
        </div>
      </div>

      {/* Product Grid */}
      <div className="px-6 md:px-12 pb-16">
        {products.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <div className="text-5xl mb-4 opacity-30">⊘</div>
            <div className="text-[13px] tracking-[.06em] uppercase font-semibold mb-2">
              No products found
            </div>
            <p className="text-[12px] text-gray-500">
              Try selecting a different category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {products.map((product, i) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group block rounded-2xl overflow-hidden border border-gray-200 bg-white no-underline transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 animate-fade-up"
                style={{ animationDelay: `${Math.min(i, 12) * 0.04}s` }}
              >
                {/* Image area */}
                <div className="relative aspect-square flex items-center justify-center overflow-hidden bg-slate-50 p-4">
                  <img
                    src={product.img}
                    alt={product.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  {product.badge && (
                    <span className="absolute top-3 right-3 text-[8px] bg-accent/90 text-white px-2.5 py-1 tracking-[.08em] uppercase font-bold rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Name area */}
                <div className="px-4 py-4 border-t border-gray-100">
                  <h3 className="text-[13px] font-semibold text-slate-900 leading-snug line-clamp-2 mb-1 group-hover:text-accent transition-colors duration-200">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[9px] text-gray-400 tracking-[.06em] uppercase">
                      {product.brand}
                    </span>
                    <span className="text-[10px] text-gray-400 group-hover:text-accent transition-colors">
                      View →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
