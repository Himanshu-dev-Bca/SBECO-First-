import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Chevron = ({ open }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
  >
    <path d="M6.22 4.22a.75.75 0 011.06 0l3.25 3.25a.75.75 0 010 1.06l-3.25 3.25a.75.75 0 01-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 010-1.06z" />
  </svg>
);

export default function FilterPanel({
  categories,
  selectedCategory,
  selectedSubcategory,
  selectedNested,
  selectedBrands,
  onCategorySelect,
  onSubcategorySelect,
  onNestedSelect,
  onBrandToggle,
  onClearFilters,
  onMobileClose,
  allBrands,
}) {
  const [expandedCategories, setExpandedCategories] = useState(new Set());
  const [expandedSubcategories, setExpandedSubcategories] = useState(new Set());
  const [brandSectionOpen, setBrandSectionOpen] = useState(true);

  // Auto-expand selected category/subcategory branches
  useEffect(() => {
    if (selectedCategory) {
      setExpandedCategories((prev) => {
        const next = new Set(prev);
        next.add(selectedCategory);
        return next;
      });
    }
    if (selectedSubcategory) {
      setExpandedSubcategories((prev) => {
        const next = new Set(prev);
        next.add(selectedSubcategory);
        return next;
      });
    }
  }, [selectedCategory, selectedSubcategory]);

  const toggleCategory = (id) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const expandCategory = (id) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  const toggleSubcategory = (id) => {
    setExpandedSubcategories((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const expandSubcategory = (id) => {
    setExpandedSubcategories((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  const getProductCount = (cat) => {
    let count = 0;
    cat.subcategories.forEach((sub) => {
      if (sub.products) count += sub.products.length;
      if (sub.nestedSubcategories)
        sub.nestedSubcategories.forEach((n) => {
          if (n.products) count += n.products.length;
        });
    });
    return count;
  };

  const getSubCount = (sub) => {
    let count = sub.products?.length || 0;
    if (sub.nestedSubcategories)
      sub.nestedSubcategories.forEach((n) => {
        if (n.products) count += n.products.length;
      });
    return count;
  };

  const hasActiveFilters =
    selectedCategory || selectedSubcategory || selectedNested || selectedBrands.length > 0;

  return (
    <aside className="filter-panel h-full flex flex-col bg-white border-r border-gray-200 select-none" id="filter-panel">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-100 shrink-0">
        <div className="flex items-center justify-between">
          <h2 className="text-[12px] font-bold tracking-[.08em] uppercase text-gray-800 flex items-center gap-2.5 m-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-accent">
              <path fillRule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clipRule="evenodd" />
            </svg>
            Categories & Products
          </h2>
          <div className="flex items-center gap-2">
            {hasActiveFilters && (
              <button
                onClick={onClearFilters}
                className="text-[9px] tracking-[.06em] uppercase font-semibold text-accent hover:text-accent-hover transition-colors bg-transparent border-none cursor-pointer px-2 py-1 rounded hover:bg-accent/5"
              >
                Clear All
              </button>
            )}
            {onMobileClose && (
              <button
                onClick={onMobileClose}
                className="lg:hidden w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors bg-transparent border-none cursor-pointer"
                aria-label="Close filters"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Scrollable filter content */}
      <div className="flex-1 overflow-y-auto filter-scroll py-1">
        {/* ── Category Section ── */}
        <div className="px-4 py-3">
          <div className="text-[9px] font-bold tracking-[.12em] uppercase text-gray-400 mb-3">
            Browse Categories
          </div>

          {/* All Products option */}
          <button
            type="button"
            onClick={() => onCategorySelect(null)}
            className={`w-full flex items-center gap-2.5 px-3 py-2.5 mb-1 rounded-lg text-left transition-all duration-200 border-none cursor-pointer ${
              !selectedCategory
                ? 'bg-accent/8 text-accent font-bold'
                : 'bg-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                !selectedCategory ? 'bg-accent' : 'bg-gray-300'
              }`}
            />
            <span className="flex-1 text-[11px] tracking-[.04em] uppercase font-semibold">
              All Products
            </span>
          </button>

          {/* Category list */}
          <nav>
            {categories.map((cat) => {
              const isCatExpanded = expandedCategories.has(cat.id);
              const isCatActive = selectedCategory === cat.id;
              const count = getProductCount(cat);

              return (
                <div
                  key={cat.id}
                  className="mb-0.5 group/cat"
                  onMouseEnter={() => expandCategory(cat.id)}
                >
                  {/* Category row */}
                  <button
                    type="button"
                    onClick={() => {
                      onCategorySelect(cat.id);
                      toggleCategory(cat.id);
                    }}
                    className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-left transition-all duration-200 border-none cursor-pointer ${
                      isCatActive
                        ? 'bg-accent/10 text-accent font-bold shadow-sm'
                        : 'bg-transparent text-gray-700 hover:bg-accent/5 hover:text-accent'
                    }`}
                  >
                    <Chevron open={isCatExpanded} />
                    <span
                      className={`flex-1 text-[11px] tracking-[.04em] uppercase font-semibold transition-colors ${
                        isCatActive ? 'text-accent font-bold' : ''
                      }`}
                    >
                      {cat.name}
                    </span>
                    <span
                      className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full transition-colors ${
                        isCatActive ? 'bg-accent text-white' : 'bg-gray-100 text-gray-400 group-hover/cat:bg-accent/10 group-hover/cat:text-accent'
                      }`}
                    >
                      {count}
                    </span>
                  </button>

                  {/* Subcategories */}
                  <div
                    className="overflow-hidden transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)]"
                    style={{
                      maxHeight: isCatExpanded ? '3000px' : '0px',
                      opacity: isCatExpanded ? 1 : 0,
                    }}
                  >
                    {cat.subcategories.map((sub) => {
                      const isSubActive = selectedSubcategory === sub.id;
                      const hasNested =
                        sub.nestedSubcategories && sub.nestedSubcategories.length > 0;
                      const hasDirectProducts = sub.products && sub.products.length > 0;
                      const isSubExpanded = expandedSubcategories.has(sub.id);
                      const subCount = getSubCount(sub);

                      return (
                        <div
                          key={sub.id}
                          className="group/sub"
                          onMouseEnter={() => expandSubcategory(sub.id)}
                        >
                          <div className="flex items-center">
                            <button
                              type="button"
                              onClick={() => {
                                onSubcategorySelect(cat.id, sub.id);
                                toggleSubcategory(sub.id);
                              }}
                              className={`flex-1 flex items-center gap-2 pl-8 pr-3 py-2 rounded-md text-left border-none cursor-pointer bg-transparent transition-all duration-150 ${
                                isSubActive
                                  ? 'text-accent font-bold bg-accent/5'
                                  : 'text-gray-600 hover:text-accent hover:bg-gray-50'
                              }`}
                            >
                              <span
                                className={`w-1 h-1 rounded-full shrink-0 transition-all ${
                                  isSubActive ? 'bg-accent scale-125' : 'bg-gray-300 group-hover/sub:bg-accent'
                                }`}
                              />
                              <span className="flex-1 text-[10.5px] tracking-[.03em] uppercase font-medium truncate">
                                {sub.name}
                              </span>
                              <span className="text-[9px] text-gray-400 font-normal">
                                {subCount}
                              </span>
                            </button>
                            {(hasNested || hasDirectProducts) && (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleSubcategory(sub.id);
                                }}
                                className="px-2 py-1.5 text-gray-400 hover:text-accent border-none bg-transparent cursor-pointer transition-colors rounded"
                                aria-label="Toggle products"
                              >
                                <Chevron open={isSubExpanded} />
                              </button>
                            )}
                          </div>

                          {/* Product names under direct subcategory */}
                          {hasDirectProducts && (
                            <div
                              className="overflow-hidden transition-all duration-300 ease-in-out"
                              style={{
                                maxHeight: isSubExpanded ? '2000px' : '0px',
                                opacity: isSubExpanded ? 1 : 0,
                              }}
                            >
                              <div className="ml-10 my-1 pl-2 border-l border-gray-200 space-y-0.5">
                                {sub.products.map((p) => (
                                  <Link
                                    key={p.id}
                                    to={`/products/${p.id}`}
                                    className="group/prod flex items-center gap-1.5 py-1 px-2 text-[10.5px] text-gray-600 hover:text-accent hover:bg-accent/8 rounded-md transition-all no-underline font-normal truncate"
                                    title={p.name}
                                  >
                                    <span className="w-1 h-1 rounded-full bg-gray-300 group-hover/prod:bg-accent group-hover/prod:scale-125 transition-all shrink-0" />
                                    <span className="truncate group-hover/prod:translate-x-0.5 transition-transform">{p.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Nested subcategories */}
                          {hasNested && (
                            <div
                              className="overflow-hidden transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)]"
                              style={{
                                maxHeight: isSubExpanded ? '2000px' : '0px',
                                opacity: isSubExpanded ? 1 : 0,
                              }}
                            >
                              {sub.nestedSubcategories.map((nested) => {
                                const isNestedActive = selectedNested === nested.id;
                                const hasNestedProducts = nested.products && nested.products.length > 0;

                                return (
                                  <div key={nested.id}>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        onNestedSelect(cat.id, sub.id, nested.id)
                                      }
                                      className={`w-full flex items-center gap-2 pl-12 pr-3 py-1.5 rounded text-left border-none cursor-pointer bg-transparent transition-all duration-150 ${
                                        isNestedActive
                                          ? 'text-accent font-semibold bg-accent/5'
                                          : 'text-gray-500 hover:text-accent hover:bg-gray-50'
                                      }`}
                                    >
                                      <span className="text-[9px] opacity-50">—</span>
                                      <span className="flex-1 text-[9.5px] tracking-[.03em] uppercase font-medium truncate">
                                        {nested.name}
                                      </span>
                                      <span className="text-[9px] text-gray-400">
                                        {nested.products?.length || 0}
                                      </span>
                                    </button>

                                    {/* Products under nested subcategory */}
                                    {hasNestedProducts && (
                                      <div className="ml-14 my-0.5 pl-2 border-l border-gray-200 space-y-0.5">
                                        {nested.products.map((p) => (
                                          <Link
                                            key={p.id}
                                            to={`/products/${p.id}`}
                                            className="group/prod flex items-center gap-1.5 py-1 px-2 text-[10px] text-gray-500 hover:text-accent hover:bg-accent/8 rounded-md transition-all no-underline font-normal truncate"
                                            title={p.name}
                                          >
                                            <span className="w-1 h-1 rounded-full bg-gray-300 group-hover/prod:bg-accent transition-all shrink-0" />
                                            <span className="truncate group-hover/prod:translate-x-0.5 transition-transform">{p.name}</span>
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </nav>
        </div>

        {/* ── Divider ── */}
        <div className="mx-4 border-t border-gray-100" />

        {/* ── Brand Filter Section ── */}
        <div className="px-4 py-3">
          <button
            type="button"
            onClick={() => setBrandSectionOpen(!brandSectionOpen)}
            className="w-full flex items-center justify-between mb-3 bg-transparent border-none cursor-pointer px-0 py-0"
          >
            <span className="text-[9px] font-bold tracking-[.12em] uppercase text-gray-400">
              Filter by Brand
            </span>
            <Chevron open={brandSectionOpen} />
          </button>

          <div
            className="overflow-hidden transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)]"
            style={{
              maxHeight: brandSectionOpen ? '500px' : '0px',
              opacity: brandSectionOpen ? 1 : 0,
            }}
          >
            <div className="space-y-1">
              {allBrands.map((brand) => {
                const isChecked = selectedBrands.includes(brand);
                return (
                  <label
                    key={brand}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg cursor-pointer transition-all duration-150 ${
                      isChecked
                        ? 'bg-accent/8 text-accent'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => onBrandToggle(brand)}
                      className="sr-only"
                    />
                    <span
                      className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${
                        isChecked
                          ? 'bg-accent border-accent'
                          : 'bg-white border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {isChecked && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="white"
                          className="w-3 h-3"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </span>
                    <span className="text-[11px] tracking-[.04em] uppercase font-medium">
                      {brand}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-gray-100 shrink-0">
        <div className="text-[9px] text-gray-400 tracking-[.06em] uppercase text-center">
          {categories.length} Categories ·{' '}
          {categories.reduce(
            (acc, c) =>
              acc +
              c.subcategories.reduce(
                (a, s) =>
                  a +
                  (s.products?.length || 0) +
                  (s.nestedSubcategories?.reduce(
                    (x, n) => x + (n.products?.length || 0),
                    0
                  ) || 0),
                0
              ),
            0
          )}{' '}
          Products
        </div>
      </div>
    </aside>
  );
}

