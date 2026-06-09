import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * Enhanced CategorySidebar
 * --------------------------------------------------------------
 * A polished, sidebar-driven navigation panel that displays
 * categories -> subcategories -> nested subcategories -> products
 * with smooth scrolling, multi-level dropdowns, and active-state
 * highlighting.
 *
 * Props:
 *   categories     – full catalogue (from data/products.js)
 *   mode           – 'catalog' | 'detail' (controls expand behavior)
 *   activeId       – currently selected product/article id (detail)
 *   onMobileClose  – optional callback to close mobile drawer
 */
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

  /* ─────────────── derive current selection from URL ─────────────── */
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get('category');
  const subParam = searchParams.get('sub');
  const nestedParam = searchParams.get('nested');

  const currentCategory = categories.find(c => c.id === categoryParam) || null;
  const currentSub = currentCategory?.subcategories.find(s => s.id === subParam) || null;
  const currentNested = currentSub?.nestedSubcategories?.find(n => n.id === nestedParam) || null;

  /* ─────────────── auto-expand matching branches ─────────────── */
  useEffect(() => {
    if (mode === 'detail' && activeId) {
      const newCat = new Set();
      const newSub = new Set();
      const newNested = new Set();
      categories.forEach(cat => {
        cat.subcategories.forEach(sub => {
          const directHit = sub.products?.some(p => p.id === activeId);
          if (directHit) {
            newCat.add(cat.id);
            newSub.add(sub.id);
          }
          if (sub.nestedSubcategories) {
            sub.nestedSubcategories.forEach(nested => {
              const nestedHit = nested.products?.some(p => p.id === activeId);
              if (nestedHit) {
                newCat.add(cat.id);
                newSub.add(sub.id);
                newNested.add(nested.id);
              }
            });
          }
        });
      });
      setExpandedCategories(newCat);
      setExpandedSubcategories(newSub);
      setExpandedNested(newNested);
    } else if (mode === 'catalog') {
      setExpandedCategories(prev => {
        const next = new Set(prev);
        if (categoryParam) next.add(categoryParam);
        return next;
      });
      setExpandedSubcategories(prev => {
        const next = new Set(prev);
        if (subParam) next.add(subParam);
        return next;
      });
      setExpandedNested(prev => {
        const next = new Set(prev);
        if (nestedParam) next.add(nestedParam);
        return next;
      });
    }
  }, [categoryParam, subParam, nestedParam, mode, activeId, categories]);

  /* ─────────────── scroll active item into view ─────────────── */
  useEffect(() => {
    if (!scrollRef.current) return;
    const active = scrollRef.current.querySelector('[data-active="true"]');
    if (active) {
      const top = active.offsetTop - 80;
      scrollRef.current.scrollTo({ top, behavior: 'smooth' });
    }
  }, [activeId, categoryParam, subParam, nestedParam, expandedCategories, expandedSubcategories, expandedNested]);

  /* ─────────────── helpers ─────────────── */
  const makeToggle = (setter, set) => (id) => {
    const next = new Set(set);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setter(next);
  };
  const toggleCategory = makeToggle(setExpandedCategories, expandedCategories);
  const toggleSubcategory = makeToggle(setExpandedSubcategories, expandedSubcategories);
  const toggleNested = makeToggle(setExpandedNested, expandedNested);

  /* ─────────────── navigation handlers ─────────────── */
  const goToCategory = (catId) => {
    navigate(`/products?category=${catId}`);
    if (onMobileClose) onMobileClose();
  };
  const goToSubcategory = (catId, subId) => {
    navigate(`/products?category=${catId}&sub=${subId}`);
    if (onMobileClose) onMobileClose();
  };
  const goToNested = (catId, subId, nestedId) => {
    navigate(`/products?category=${catId}&sub=${subId}&nested=${nestedId}`);
    if (onMobileClose) onMobileClose();
  };
  const goToProduct = (id) => {
    navigate(`/products/${id}`);
    if (onMobileClose) onMobileClose();
  };

  /* ─────────────── counts for badges ─────────────── */
  const getProductCount = (cat) => {
    let count = 0;
    cat.subcategories.forEach(sub => {
      if (sub.products) count += sub.products.length;
      if (sub.nestedSubcategories) {
        sub.nestedSubcategories.forEach(n => {
          if (n.products) count += n.products.length;
        });
      }
    });
    return count;
  };
  const getSubCount = (sub) => {
    let count = sub.products?.length || 0;
    if (sub.nestedSubcategories) {
      sub.nestedSubcategories.forEach(n => {
        if (n.products) count += n.products.length;
      });
    }
    return count;
  };

  /* ─────────────── small icons (chevron) ─────────────── */
  const Chevron = ({ rotated = false, size = 'w-3 h-3' }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`${size} transition-transform duration-300 ${rotated ? 'rotate-90' : ''}`}
    >
      <path
        fillRule="evenodd"
        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
        clipRule="evenodd"
      />
    </svg>
  );
  const ChevronDown = ({ rotated = false, size = 'w-3 h-3' }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`${size} transition-transform duration-300 ${rotated ? 'rotate-180' : ''}`}
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );

  /* ─────────────── render ─────────────── */
  return (
    <aside className="sidebar-nav h-full flex flex-col bg-white border-r border-gray-200">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white shrink-0">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-[11px] font-extrabold tracking-[.14em] uppercase text-black flex items-center gap-2">
            <span className="w-1.5 h-4 bg-accent inline-block" />
            Product Catalog
          </h2>
          {onMobileClose && (
            <button
              onClick={onMobileClose}
              className="lg:hidden text-gray-400 hover:text-black p-1 transition-colors"
              title="Close sidebar"
              aria-label="Close sidebar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
        <p className="text-[10px] text-gray-500 tracking-wide pl-3.5 leading-relaxed">
          Browse by category, then expand to view products.
        </p>
      </div>

      {/* Scrollable tree */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto sidebar-scroll">
        <nav className="py-2">
          {categories.map((cat) => {
            const isCatExpanded = expandedCategories.has(cat.id);
            const isCatActive = currentCategory?.id === cat.id;
            const productCount = getProductCount(cat);

            return (
              <div key={cat.id} className="select-none">
                {/* Category row */}
                <button
                  type="button"
                  onClick={() => toggleCategory(cat.id)}
                  data-active={isCatActive}
                  className={`w-full flex items-center gap-2.5 pl-4 pr-3 py-3 text-left transition-all duration-200 border-l-[3px] ${
                    isCatActive
                      ? 'bg-accent/[0.06] border-accent text-black'
                      : 'border-transparent text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  <span className="w-4 h-4 inline-flex items-center justify-center text-gray-400">
                    <Chevron rotated={isCatExpanded} />
                  </span>
                  <span
                    className={`flex-1 text-[11px] font-bold tracking-[.06em] uppercase ${
                      isCatActive ? 'text-accent' : ''
                    }`}
                  >
                    {cat.name}
                  </span>
                  <span
                    className={`text-[9px] font-semibold tracking-wide px-1.5 py-0.5 rounded-sm ${
                      isCatActive ? 'bg-accent text-white' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {productCount}
                  </span>
                </button>

                {/* Subcategories container */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    isCatExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="bg-gray-50/60 border-l-[3px] border-gray-200 ml-4 my-0.5">
                    {cat.subcategories.map((sub) => {
                      const isSubExpanded = expandedSubcategories.has(sub.id);
                      const isSubActive = currentSub?.id === sub.id;
                      const hasNested = sub.nestedSubcategories && sub.nestedSubcategories.length > 0;
                      const subCount = getSubCount(sub);

                      return (
                        <div key={sub.id}>
                          {/* Subcategory row */}
                          <div className="flex items-stretch group/sub">
                            <button
                              type="button"
                              onClick={() => goToSubcategory(cat.id, sub.id)}
                              data-active={isSubActive}
                              className={`flex-1 flex items-center gap-2 pl-4 pr-2 py-2.5 text-left text-[10px] font-semibold tracking-[.06em] uppercase transition-all duration-200 ${
                                isSubActive
                                  ? 'bg-accent text-white'
                                  : 'text-gray-600 hover:bg-white hover:text-accent'
                              }`}
                            >
                              <span className="w-1 h-1 rounded-full bg-current opacity-50" />
                              <span className="flex-1 truncate">{sub.name}</span>
                              <span
                                className={`text-[9px] font-semibold tracking-wide px-1.5 py-0.5 rounded-sm shrink-0 ${
                                  isSubActive ? 'bg-white/20 text-white' : 'bg-white text-gray-500'
                                }`}
                              >
                                {subCount}
                              </span>
                            </button>
                            {hasNested && (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleSubcategory(sub.id);
                                }}
                                className={`px-2.5 border-l border-white/40 ${
                                  isSubActive ? 'text-white' : 'text-gray-500 hover:text-black'
                                }`}
                                title="Toggle nested subcategories"
                                aria-label="Toggle nested subcategories"
                              >
                                <ChevronDown rotated={isSubExpanded} size="w-3 h-3" />
                              </button>
                            )}
                          </div>

                          {/* Nested subcategories */}
                          {hasNested && (
                            <div
                              className={`overflow-hidden transition-all duration-300 ease-out ${
                                isSubExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                              }`}
                            >
                              <div className="bg-white ml-3 border-l border-gray-200">
                                {sub.nestedSubcategories.map((nested) => {
                                  const isNestedExpanded = expandedNested.has(nested.id);
                                  const isNestedActive = currentNested?.id === nested.id;
                                  const hasProducts = nested.products && nested.products.length > 0;

                                  return (
                                    <div key={nested.id}>
                                      <div className="flex items-stretch">
                                        <button
                                          type="button"
                                          onClick={() => goToNested(cat.id, sub.id, nested.id)}
                                          data-active={isNestedActive}
                                          className={`flex-1 flex items-center gap-2 pl-4 pr-2 py-2 text-left text-[9px] font-semibold tracking-[.08em] uppercase transition-all duration-200 border-l-[2px] ${
                                            isNestedActive
                                              ? 'bg-gray-100 border-accent text-accent'
                                              : 'border-transparent text-gray-500 hover:bg-gray-50 hover:text-accent hover:border-gray-300'
                                          }`}
                                        >
                                          <span className="opacity-50">›</span>
                                          <span className="flex-1 truncate">{nested.name}</span>
                                          <span className="text-[9px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-sm shrink-0">
                                            {nested.products?.length || 0}
                                          </span>
                                        </button>
                                        {hasProducts && (
                                          <button
                                            type="button"
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              toggleNested(nested.id);
                                            }}
                                            className="px-2 text-gray-400 hover:text-black"
                                            title="Toggle products"
                                            aria-label="Toggle products"
                                          >
                                            <ChevronDown rotated={isNestedExpanded} size="w-2.5 h-2.5" />
                                          </button>
                                        )}
                                      </div>

                                      {/* Nested product list */}
                                      {hasProducts && (
                                        <div
                                          className={`overflow-hidden transition-all duration-300 ease-out ${
                                            isNestedExpanded ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'
                                          }`}
                                        >
                                          <div className="bg-gray-50/50 ml-4 border-l border-gray-200 max-h-64 overflow-y-auto nested-scroll">
                                            {nested.products.map((p) => {
                                              const isProductActive = mode === 'detail' && activeId === p.id;
                                              return (
                                                <button
                                                  type="button"
                                                  key={p.id}
                                                  onClick={() => goToProduct(p.id)}
                                                  data-active={isProductActive}
                                                  className={`w-full text-left pl-5 pr-3 py-2 text-[10px] font-medium tracking-wide transition-all duration-200 border-l-[2px] flex items-center gap-2 ${
                                                    isProductActive
                                                      ? 'bg-accent text-white border-accent font-bold'
                                                      : 'border-transparent text-gray-600 hover:bg-white hover:text-accent hover:border-gray-300'
                                                  }`}
                                                >
                                                  <span
                                                    className={`w-1 h-1 rounded-full shrink-0 ${
                                                      isProductActive ? 'bg-white' : 'bg-gray-300'
                                                    }`}
                                                  />
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
                          )}

                          {/* Direct products (no nested) */}
                          {!hasNested && sub.products && sub.products.length > 0 && (
                            <div
                              className={`overflow-hidden transition-all duration-300 ease-out ${
                                isSubExpanded ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'
                              }`}
                            >
                              <div className="bg-white ml-3 border-l border-gray-200 max-h-64 overflow-y-auto nested-scroll">
                                {sub.products.map((p) => {
                                  const isProductActive = mode === 'detail' && activeId === p.id;
                                  return (
                                    <button
                                      type="button"
                                      key={p.id}
                                      onClick={() => goToProduct(p.id)}
                                      data-active={isProductActive}
                                      className={`w-full text-left pl-5 pr-3 py-2 text-[10px] font-medium tracking-wide transition-all duration-200 border-l-[2px] flex items-center gap-2 ${
                                        isProductActive
                                          ? 'bg-accent text-white border-accent font-bold'
                                          : 'border-transparent text-gray-600 hover:bg-white hover:text-accent hover:border-gray-300'
                                      }`}
                                    >
                                      <span
                                        className={`w-1 h-1 rounded-full shrink-0 ${
                                          isProductActive ? 'bg-white' : 'bg-gray-300'
                                        }`}
                                      />
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
              </div>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-gray-200 bg-gray-50 shrink-0">
        <div className="text-[10px] text-gray-400 tracking-[.08em] uppercase text-center">
          {categories.length} Categories ·{' '}
          {categories.reduce(
            (acc, c) =>
              acc +
              c.subcategories.reduce(
                (a, s) =>
                  a +
                  (s.products?.length || 0) +
                  (s.nestedSubcategories?.reduce((x, n) => x + (n.products?.length || 0), 0) || 0),
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
