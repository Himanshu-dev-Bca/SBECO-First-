import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function CategorySidebar({
  categories,
  mode = 'catalog',
  activeId = null,
  onMobileClose = null,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollRef = useRef(null);

  const [expandedCategories, setExpandedCategories] = useState(new Set());
  const [expandedSubcategories, setExpandedSubcategories] = useState(new Set());
  const [expandedNested, setExpandedNested] = useState(new Set());

  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get('category');
  const subParam = searchParams.get('sub');
  const nestedParam = searchParams.get('nested');

  const currentCategory = categories.find(c => c.id === categoryParam) || null;
  const currentSub = currentCategory?.subcategories.find(s => s.id === subParam) || null;
  const currentNested = currentSub?.nestedSubcategories?.find(n => n.id === nestedParam) || null;

  /* auto-expand matching branches */
  useEffect(() => {
    if (mode === 'detail' && activeId) {
      const newCat = new Set();
      const newSub = new Set();
      const newNested = new Set();
      categories.forEach(cat => {
        cat.subcategories.forEach(sub => {
          const directHit = sub.products?.some(p => p.id === activeId);
          if (directHit) { newCat.add(cat.id); newSub.add(sub.id); }
          if (sub.nestedSubcategories) {
            sub.nestedSubcategories.forEach(nested => {
              const nestedHit = nested.products?.some(p => p.id === activeId);
              if (nestedHit) { newCat.add(cat.id); newSub.add(sub.id); newNested.add(nested.id); }
            });
          }
        });
      });
      setExpandedCategories(newCat);
      setExpandedSubcategories(newSub);
      setExpandedNested(newNested);
    } else if (mode === 'catalog') {
      setExpandedCategories(prev => { const next = new Set(prev); if (categoryParam) next.add(categoryParam); return next; });
      setExpandedSubcategories(prev => { const next = new Set(prev); if (subParam) next.add(subParam); return next; });
      setExpandedNested(prev => { const next = new Set(prev); if (nestedParam) next.add(nestedParam); return next; });
    }
  }, [categoryParam, subParam, nestedParam, mode, activeId, categories]);

  /* scroll active item into view */
  useEffect(() => {
    if (!scrollRef.current) return;
    const active = scrollRef.current.querySelector('[data-active="true"]');
    if (active) {
      const top = active.offsetTop - 80;
      scrollRef.current.scrollTo({ top, behavior: 'smooth' });
    }
  }, [activeId, categoryParam, subParam, nestedParam, expandedCategories, expandedSubcategories, expandedNested]);

  /* helpers */
  const makeToggle = (setter, set) => (id) => {
    const next = new Set(set);
    if (next.has(id)) next.delete(id); else next.add(id);
    setter(next);
  };
  const toggleCategory = makeToggle(setExpandedCategories, expandedCategories);
  const toggleSubcategory = makeToggle(setExpandedSubcategories, expandedSubcategories);
  const toggleNested = makeToggle(setExpandedNested, expandedNested);

  const goToCategory = (catId) => { navigate(`/products?category=${catId}`); onMobileClose?.(); };
  const goToSubcategory = (catId, subId) => { navigate(`/products?category=${catId}&sub=${subId}`); onMobileClose?.(); };
  const goToNested = (catId, subId, nestedId) => { navigate(`/products?category=${catId}&sub=${subId}&nested=${nestedId}`); onMobileClose?.(); };
  const goToProduct = (id) => { navigate(`/products/${id}`); onMobileClose?.(); };

  const getProductCount = (cat) => {
    let count = 0;
    cat.subcategories.forEach(sub => {
      if (sub.products) count += sub.products.length;
      if (sub.nestedSubcategories) sub.nestedSubcategories.forEach(n => { if (n.products) count += n.products.length; });
    });
    return count;
  };
  const getSubCount = (sub) => {
    let count = sub.products?.length || 0;
    if (sub.nestedSubcategories) sub.nestedSubcategories.forEach(n => { if (n.products) count += n.products.length; });
    return count;
  };

  const Chevron = ({ open }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
      className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${open ? 'rotate-90' : ''}`}>
      <path d="M6.22 4.22a.75.75 0 011.06 0l3.25 3.25a.75.75 0 010 1.06l-3.25 3.25a.75.75 0 01-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 010-1.06z" />
    </svg>
  );

  return (
    <aside className="sidebar-nav h-full flex flex-col bg-white border-r border-gray-200">
      {/* Header */}
      <div className="px-5 py-5 border-b border-gray-100 shrink-0">
        <div className="flex items-center justify-between">
          <h2 className="text-[12px] font-bold tracking-[.08em] uppercase text-gray-800 flex items-center gap-2.5">
            <span className="w-1.5 h-4 bg-accent rounded-full" />
            Categories
          </h2>
          {onMobileClose && (
            <button
              onClick={onMobileClose}
              className="lg:hidden w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors bg-transparent border-none cursor-pointer"
              aria-label="Close sidebar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Scrollable list */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto sidebar-scroll py-1">
        <nav>
          {categories.map((cat) => {
            const isCatExpanded = expandedCategories.has(cat.id);
            const isCatActive = currentCategory?.id === cat.id;
            const count = getProductCount(cat);

            return (
              <div key={cat.id}>
                {/* Category row */}
                <button
                  type="button"
                  onClick={() => { toggleCategory(cat.id); goToCategory(cat.id); }}
                  data-active={isCatActive}
                  className={`w-full flex items-center gap-2 px-5 py-3 text-left transition-colors duration-150 border-none cursor-pointer bg-transparent ${
                    isCatActive
                      ? 'bg-gray-50 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Chevron open={isCatExpanded} />
                  <span className={`flex-1 text-[11px] tracking-[.04em] uppercase font-semibold ${isCatActive ? 'text-accent' : ''}`}>
                    {cat.name}
                  </span>
                  <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded ${
                    isCatActive ? 'bg-accent/10 text-accent' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {count}
                  </span>
                </button>

                {/* Subcategories */}
                <div className={`overflow-hidden transition-all duration-300 ${isCatExpanded ? 'max-h-[3000px]' : 'max-h-0'}`}>
                  {cat.subcategories.map((sub) => {
                    const isSubExpanded = expandedSubcategories.has(sub.id);
                    const isSubActive = currentSub?.id === sub.id;
                    const hasNested = sub.nestedSubcategories && sub.nestedSubcategories.length > 0;
                    const subCount = getSubCount(sub);

                    return (
                      <div key={sub.id}>
                        <div className="flex items-center">
                          <button
                            type="button"
                            onClick={() => { if (hasNested) toggleSubcategory(sub.id); goToSubcategory(cat.id, sub.id); }}
                            data-active={isSubActive}
                            className={`flex-1 flex items-center gap-2 pl-10 pr-4 py-2.5 text-left border-none cursor-pointer bg-transparent transition-colors duration-150 ${
                              isSubActive
                                ? 'text-accent font-bold'
                                : 'text-gray-500 hover:text-gray-800'
                            }`}
                          >
                            <span className={`w-1 h-1 rounded-full shrink-0 ${isSubActive ? 'bg-accent' : 'bg-gray-300'}`} />
                            <span className="flex-1 text-[10px] tracking-[.04em] uppercase font-medium truncate">
                              {sub.name}
                            </span>
                            <span className="text-[9px] text-gray-400 font-normal">{subCount}</span>
                          </button>
                          {hasNested && (
                            <button
                              type="button"
                              onClick={(e) => { e.stopPropagation(); toggleSubcategory(sub.id); }}
                              className="px-3 py-2 text-gray-400 hover:text-gray-700 border-none bg-transparent cursor-pointer transition-colors"
                              aria-label="Toggle nested"
                            >
                              <Chevron open={isSubExpanded} />
                            </button>
                          )}
                        </div>

                        {/* Nested subcategories */}
                        {hasNested && (
                          <div className={`overflow-hidden transition-all duration-300 ${isSubExpanded ? 'max-h-[2000px]' : 'max-h-0'}`}>
                            {sub.nestedSubcategories.map((nested) => {
                              const isNestedExpanded = expandedNested.has(nested.id);
                              const isNestedActive = currentNested?.id === nested.id;
                              const hasProducts = nested.products && nested.products.length > 0;

                              return (
                                <div key={nested.id}>
                                  <div className="flex items-center">
                                    <button
                                      type="button"
                                      onClick={() => goToNested(cat.id, sub.id, nested.id)}
                                      data-active={isNestedActive}
                                      className={`flex-1 flex items-center gap-2 pl-14 pr-3 py-2 text-left border-none cursor-pointer bg-transparent transition-colors duration-150 ${
                                        isNestedActive
                                          ? 'text-accent font-semibold'
                                          : 'text-gray-400 hover:text-gray-700'
                                      }`}
                                    >
                                      <span className="text-[9px] opacity-60">—</span>
                                      <span className="flex-1 text-[9px] tracking-[.04em] uppercase font-medium truncate">
                                        {nested.name}
                                      </span>
                                      <span className="text-[9px] text-gray-400">{nested.products?.length || 0}</span>
                                    </button>
                                    {hasProducts && (
                                      <button
                                        type="button"
                                        onClick={(e) => { e.stopPropagation(); toggleNested(nested.id); }}
                                        className="px-3 py-1.5 text-gray-400 hover:text-gray-700 border-none bg-transparent cursor-pointer transition-colors"
                                        aria-label="Toggle products"
                                      >
                                        <Chevron open={isNestedExpanded} />
                                      </button>
                                    )}
                                  </div>

                                  {/* Nested product list */}
                                  {hasProducts && (
                                    <div className={`overflow-hidden transition-all duration-300 ${isNestedExpanded ? 'max-h-[1500px]' : 'max-h-0'}`}>
                                      <div className="ml-14 mr-3 mb-1 border-l border-gray-200 max-h-48 overflow-y-auto nested-scroll">
                                        {nested.products.map((p) => {
                                          const isProductActive = mode === 'detail' && activeId === p.id;
                                          return (
                                            <button
                                              type="button"
                                              key={p.id}
                                              onClick={() => goToProduct(p.id)}
                                              data-active={isProductActive}
                                              className={`w-full text-left pl-3 pr-2 py-1.5 text-[10px] font-normal tracking-wide transition-colors duration-150 flex items-center gap-1.5 border-none cursor-pointer bg-transparent ${
                                                isProductActive
                                                  ? 'text-accent font-semibold'
                                                  : 'text-gray-500 hover:text-gray-800'
                                              }`}
                                            >
                                              <span className={`w-0.5 h-0.5 rounded-full shrink-0 ${isProductActive ? 'bg-accent' : 'bg-gray-300'}`} />
                                              <span className="flex-1 truncate">{p.name}</span>
                                            </button>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* Direct products (no nested) */}
                        {!hasNested && sub.products && sub.products.length > 0 && (
                          <div className={`overflow-hidden transition-all duration-300 ${isSubExpanded ? 'max-h-[1500px]' : 'max-h-0'}`}>
                            <div className="ml-10 mr-3 mb-1 border-l border-gray-200 max-h-48 overflow-y-auto nested-scroll">
                              {sub.products.map((p) => {
                                const isProductActive = mode === 'detail' && activeId === p.id;
                                return (
                                  <button
                                    type="button"
                                    key={p.id}
                                    onClick={() => goToProduct(p.id)}
                                    data-active={isProductActive}
                                    className={`w-full text-left pl-3 pr-2 py-1.5 text-[10px] font-normal tracking-wide transition-colors duration-150 flex items-center gap-1.5 border-none cursor-pointer bg-transparent ${
                                      isProductActive
                                        ? 'text-accent font-semibold'
                                        : 'text-gray-500 hover:text-gray-800'
                                    }`}
                                  >
                                    <span className={`w-0.5 h-0.5 rounded-full shrink-0 ${isProductActive ? 'bg-accent' : 'bg-gray-300'}`} />
                                    <span className="flex-1 truncate">{p.name}</span>
                                  </button>
                                );
                              })}
                            </div>
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

      {/* Footer */}
      <div className="px-5 py-3 border-t border-gray-100 shrink-0">
        <div className="text-[9px] text-gray-400 tracking-[.06em] uppercase text-center">
          {categories.length} Categories · {categories.reduce((acc, c) => acc + c.subcategories.reduce((a, s) => a + (s.products?.length || 0) + (s.nestedSubcategories?.reduce((x, n) => x + (n.products?.length || 0), 0) || 0), 0), 0)} Products
        </div>
      </div>
    </aside>
  );
}
