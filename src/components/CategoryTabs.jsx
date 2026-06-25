import { useRef, useEffect } from 'react';

/* ── SVG icon paths keyed by category id ── */
const CATEGORY_ICONS = {
  'tape-dispensers': (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" strokeWidth="1.5" stroke="currentColor" fill="none" />
      <path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="1.5" fill="none" opacity=".3" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </>
  ),
  'strapping-solutions': (
    <>
      <path d="M6 4v16M18 4v16" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M6 8h12M6 12h12M6 16h12" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M2 8l4-4 4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'power-tools': (
    <>
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'nailing-stapling': (
    <>
      <path d="M4 20h16M4 20V10l4-4h8l4 4v10" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" y1="10" x2="12" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="13" x2="8" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="13" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  'packaging-consumables': (
    <>
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'facility-management': (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

/* fallback icon */
const FallbackIcon = (
  <>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </>
);

export default function CategoryTabs({
  categories,
  selectedCategory,
  onCategorySelect,
  getProductCount,
}) {
  const scrollRef = useRef(null);

  /* auto-scroll active tab into view */
  useEffect(() => {
    if (!scrollRef.current || !selectedCategory) return;
    const active = scrollRef.current.querySelector('[data-active="true"]');
    if (active) {
      active.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [selectedCategory]);

  return (
    <div className="category-tabs-wrapper relative">
      {/* gradient fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 hidden md:block" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 hidden md:block" />

      <div
        ref={scrollRef}
        className="category-tabs-scroll flex gap-3 overflow-x-auto px-2 py-1 scroll-smooth"
      >
        {/* All Products tab */}
        <button
          type="button"
          data-active={!selectedCategory}
          onClick={() => onCategorySelect(null)}
          className={`category-tab group shrink-0 flex flex-col items-center gap-2 px-5 py-4 rounded-xl border-2 transition-all duration-300 cursor-pointer bg-white min-w-[120px] ${
            !selectedCategory
              ? 'border-accent shadow-[0_4px_20px_rgba(230,0,35,0.12)] scale-[1.02]'
              : 'border-gray-200 hover:border-gray-300 hover:shadow-sm hover:-translate-y-0.5'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
              !selectedCategory
                ? 'bg-accent text-white'
                : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200 group-hover:text-gray-700'
            }`}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5">
              <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          <span
            className={`text-[10px] tracking-[.06em] uppercase font-bold whitespace-nowrap transition-colors ${
              !selectedCategory ? 'text-accent' : 'text-gray-600 group-hover:text-gray-900'
            }`}
          >
            All Products
          </span>
          {!selectedCategory && (
            <span className="w-6 h-0.5 rounded-full bg-accent" />
          )}
        </button>

        {/* Category tabs */}
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          const count = getProductCount(cat);
          const icon = CATEGORY_ICONS[cat.id] || FallbackIcon;

          return (
            <button
              key={cat.id}
              type="button"
              data-active={isActive}
              onClick={() => onCategorySelect(cat.id)}
              className={`category-tab group shrink-0 flex flex-col items-center gap-2 px-5 py-4 rounded-xl border-2 transition-all duration-300 cursor-pointer bg-white min-w-[120px] ${
                isActive
                  ? 'border-accent shadow-[0_4px_20px_rgba(230,0,35,0.12)] scale-[1.02]'
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-sm hover:-translate-y-0.5'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200 group-hover:text-gray-700'
                }`}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  {icon}
                </svg>
              </div>
              <span
                className={`text-[10px] tracking-[.06em] uppercase font-bold whitespace-nowrap transition-colors ${
                  isActive ? 'text-accent' : 'text-gray-600 group-hover:text-gray-900'
                }`}
              >
                {cat.name}
              </span>
              <span
                className={`text-[8px] font-semibold px-2 py-0.5 rounded-full transition-colors ${
                  isActive ? 'bg-accent/10 text-accent' : 'bg-gray-100 text-gray-400'
                }`}
              >
                {count}
              </span>
              {isActive && (
                <span className="w-6 h-0.5 rounded-full bg-accent" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
