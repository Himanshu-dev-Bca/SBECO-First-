import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CATALOGUE } from '../data/products';

/* ──────────────────────────────────────────────────────
   Category icons (inline SVGs for zero-dependency use)
   ────────────────────────────────────────────────────── */
const CATEGORY_ICONS = {
  'tape-dispensers': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 8v-5" />
    </svg>
  ),
  'strapping-solutions': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 12h18" />
      <path d="M9 6v12M15 6v12" />
    </svg>
  ),
  'power-tools': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  'nailing-stapling': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M4 20h16M4 20V10l4-4h8l4 4v10" />
      <path d="M9 20v-6h6v6" />
    </svg>
  ),
  'packaging-consumables': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
    </svg>
  ),
  'facility-management': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  ),
};

/* Category accent color scheme */
const CATEGORY_COLORS = {
  'tape-dispensers': { bg: 'rgba(239, 68, 68, 0.08)', border: '#ef4444', text: '#dc2626' },
  'strapping-solutions': { bg: 'rgba(59, 130, 246, 0.08)', border: '#3b82f6', text: '#2563eb' },
  'power-tools': { bg: 'rgba(245, 158, 11, 0.08)', border: '#f59e0b', text: '#d97706' },
  'nailing-stapling': { bg: 'rgba(139, 92, 246, 0.08)', border: '#8b5cf6', text: '#7c3aed' },
  'packaging-consumables': { bg: 'rgba(16, 185, 129, 0.08)', border: '#10b981', text: '#059669' },
  'facility-management': { bg: 'rgba(236, 72, 153, 0.08)', border: '#ec4899', text: '#db2777' },
};

/* ──────────────────────────────────────────────────────
   Navigation items
   ────────────────────────────────────────────────────── */
const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products', hasMega: true },
  { to: '/gallery', label: 'Gallery' },
  {
    label: 'More',
    hasDropdown: true,
    items: [
      { to: '/articles', label: 'Articles', icon: '📰' },
      { to: '/videos', label: 'Videos', icon: '🎬' },
    ],
  },
  { to: '/contact', label: 'Contact' },
];

/* ──────────────────────────────────────────────────────
   Helper: flatten products from subcategory (handles nested)
   ────────────────────────────────────────────────────── */
function getSubProducts(sub) {
  const products = [];
  if (sub.products) products.push(...sub.products);
  if (sub.nestedSubcategories) {
    sub.nestedSubcategories.forEach((nested) => {
      if (nested.products) products.push(...nested.products);
    });
  }
  return products;
}

/* ──────────────────────────────────────────────────────
   Helper: count total products per category
   ────────────────────────────────────────────────────── */
function getCategoryProductCount(cat) {
  let count = 0;
  cat.subcategories.forEach((sub) => {
    count += getSubProducts(sub).length;
  });
  return count;
}

/* ══════════════════════════════════════════════════════
   HEADER COMPONENT
   ══════════════════════════════════════════════════════ */
export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState(null);
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeCat, setActiveCat] = useState(0);
  const megaRef = useRef(null);
  const megaTriggerRef = useRef(null);
  const megaTimeoutRef = useRef(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setExpandedMobile(null);
    setMegaOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close mega menu on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setMegaOpen(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query.trim())}`);
      setQuery('');
      setMobileOpen(false);
    }
  };

  const toggleMobileSection = (label) => {
    setExpandedMobile((prev) => (prev === label ? null : label));
  };

  /* Mega menu hover handlers with delay */
  const openMega = useCallback(() => {
    clearTimeout(megaTimeoutRef.current);
    setMegaOpen(true);
  }, []);

  const closeMega = useCallback(() => {
    megaTimeoutRef.current = setTimeout(() => {
      setMegaOpen(false);
    }, 150);
  }, []);

  /* Cleanup timeout on unmount */
  useEffect(() => {
    return () => clearTimeout(megaTimeoutRef.current);
  }, []);

  return (
    <>
      <header className="flex items-center justify-between px-4 md:px-8 h-16 md:h-20 bg-white border-b border-gray-200 sticky top-0 z-50">
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img src="/images/sbeco-logo.png" alt="SBECO" className="h-10 md:h-14 w-auto object-contain" />
        </Link>

        {/* ═══ Desktop Nav ═══ */}
        <ul className="hidden md:flex gap-10 list-none">
          {NAV.map((item) => (
            <li
              key={item.to || item.label}
              className={item.hasMega || item.hasDropdown ? 'group/mega relative' : ''}
              onMouseEnter={item.hasMega ? openMega : undefined}
              onMouseLeave={item.hasMega ? closeMega : undefined}
            >
              {/* Mega menu trigger (Products) */}
              {item.hasMega ? (
                <button
                  ref={megaTriggerRef}
                  type="button"
                  onClick={() => navigate('/products')}
                  className={`nav-link text-[11px] tracking-[.1em] uppercase font-semibold no-underline transition-all duration-200 relative pb-1 cursor-pointer bg-transparent border-none ${
                    pathname.startsWith('/products') ? 'text-accent' : 'text-gray-600 hover:text-accent'
                  }`}
                >
                  {item.label}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    className={`w-3 h-3 inline-block ml-1.5 -mt-px transition-all duration-300 ${megaOpen ? 'rotate-180 opacity-100' : 'opacity-60'}`}>
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${megaOpen || pathname.startsWith('/products') ? 'w-full' : 'w-0'}`} />
                </button>
              ) : item.hasDropdown ? (
                /* Simple dropdown trigger (More) */
                <button
                  type="button"
                  className="nav-link text-[11px] tracking-[.1em] uppercase font-semibold no-underline transition-all duration-200 relative pb-1 cursor-pointer bg-transparent border-none text-gray-600 hover:text-accent"
                >
                  {item.label}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 inline-block ml-1.5 -mt-px opacity-60 group-hover/mega:opacity-100 transition-opacity">
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover/mega:w-full transition-all duration-300" />
                </button>
              ) : (
                /* Normal nav link */
                <Link
                  to={item.to}
                  className={`nav-link text-[11px] tracking-[.1em] uppercase font-semibold no-underline transition-all duration-200 relative pb-1 ${
                    pathname === item.to ? 'text-accent' : 'text-gray-600 hover:text-accent'
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover/mega:w-full transition-all duration-300" />
                </Link>
              )}

              {/* ────────────────────────────────────────
                  SIMPLE PRODUCTS HOVER MENU (Categories & Product Names)
                 ──────────────────────────────────────── */}
              {item.hasMega && (
                <div
                  ref={megaRef}
                  onMouseEnter={openMega}
                  onMouseLeave={closeMega}
                  className={`mega-menu-container fixed left-0 right-0 top-[64px] md:top-[80px] z-50 transition-all duration-200 ease-out ${
                    megaOpen
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                  }`}
                >
                  {/* Backdrop */}
                  <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] -z-10" onClick={() => setMegaOpen(false)} />

                  <div className="max-w-6xl mx-auto px-4">
                    <div className="bg-white border border-gray-200/90 shadow-[0_20px_60px_rgba(0,0,0,0.12)] rounded-2xl overflow-hidden flex min-h-[360px] max-h-[480px]">
                      
                      {/* Left Column: Categories */}
                      <div className="w-[280px] bg-gray-50/80 border-r border-gray-200/80 py-3 shrink-0 overflow-y-auto">
                        <div className="px-5 py-2 text-[9px] font-extrabold tracking-[.12em] uppercase text-gray-400">
                          Categories
                        </div>
                        {CATALOGUE.map((cat, idx) => {
                          const isActive = activeCat === idx;
                          const count = getCategoryProductCount(cat);
                          return (
                            <button
                              key={cat.id}
                              type="button"
                              onMouseEnter={() => setActiveCat(idx)}
                              onClick={() => {
                                navigate(`/products?category=${cat.id}`);
                                setMegaOpen(false);
                              }}
                              className={`w-full flex items-center justify-between px-5 py-3 text-left border-none cursor-pointer transition-all duration-150 ${
                                isActive
                                  ? 'bg-white text-accent font-bold border-l-4 border-accent shadow-sm'
                                  : 'bg-transparent text-gray-700 hover:bg-white/60 hover:text-accent border-l-4 border-transparent'
                              }`}
                            >
                              <span className="text-[12px] uppercase font-semibold tracking-wide truncate">
                                {cat.name}
                              </span>
                              <span className="text-[10px] text-gray-400 font-normal ml-2">
                                ({count})
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Right Column: Product Names for Active Category */}
                      <div className="flex-1 p-6 overflow-y-auto bg-white flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
                            <h3 className="text-[14px] font-extrabold uppercase tracking-wide text-slate-900 m-0">
                              {CATALOGUE[activeCat]?.name}
                            </h3>
                            <Link
                              to={`/products?category=${CATALOGUE[activeCat]?.id}`}
                              onClick={() => setMegaOpen(false)}
                              className="text-[11px] font-bold text-accent hover:underline uppercase tracking-wider no-underline"
                            >
                              Browse Category →
                            </Link>
                          </div>

                          {/* List of Product Names */}
                          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                            {(() => {
                              const cat = CATALOGUE[activeCat];
                              if (!cat) return null;
                              const allProds = [];
                              cat.subcategories.forEach((sub) => {
                                if (sub.products) allProds.push(...sub.products);
                                if (sub.nestedSubcategories) {
                                  sub.nestedSubcategories.forEach((n) => {
                                    if (n.products) allProds.push(...n.products);
                                  });
                                }
                              });

                              return allProds.map((p) => (
                                <Link
                                  key={p.id}
                                  to={`/products/${p.id}`}
                                  onClick={() => setMegaOpen(false)}
                                  className="group/pitem flex items-center gap-2 text-[11px] text-gray-600 hover:text-accent no-underline py-1 transition-colors truncate"
                                  title={p.name}
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/pitem:bg-accent transition-colors shrink-0" />
                                  <span className="truncate group-hover/pitem:translate-x-0.5 transition-transform font-medium">
                                    {p.name}
                                  </span>
                                </Link>
                              ));
                            })()}
                          </div>
                        </div>

                        <div className="pt-3 mt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 shrink-0">
                          <span>Hover over a category to view its products</span>
                          <Link
                            to="/products"
                            onClick={() => setMegaOpen(false)}
                            className="font-bold text-accent no-underline hover:underline uppercase tracking-wider text-[10px]"
                          >
                            View All Products →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ── Simple Dropdown (More) ── */}
              {item.hasDropdown && (
                <div className="pointer-events-none invisible opacity-0 group-hover/mega:pointer-events-auto group-hover/mega:visible group-hover/mega:opacity-100 transition-all duration-300 absolute top-full left-1/2 -translate-x-1/2 pt-5 z-50">
                  <div className="bg-white border border-gray-200/80 shadow-[0_24px_80px_rgba(0,0,0,.12)] min-w-[220px] rounded-xl overflow-hidden">
                    <ul className="flex flex-col list-none p-0 m-0">
                      {item.items.map((subItem, idx) => (
                        <li key={subItem.to} className={`${idx !== item.items.length - 1 ? 'border-b border-gray-100' : ''}`}>
                          <Link
                            to={subItem.to}
                            className="group/dd flex items-center gap-3 px-5 py-4 text-[11px] font-bold tracking-[.08em] uppercase text-gray-700 hover:text-accent hover:bg-gray-50/80 no-underline transition-all duration-200"
                          >
                            <span className="text-base">{subItem.icon}</span>
                            <span className="transition-transform duration-200 group-hover/dd:translate-x-0.5">{subItem.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Search */}
        <form onSubmit={handleSearch} className="hidden md:flex items-center gap-2 border border-gray-200 px-4 py-2 bg-white hover:border-gray-400 focus-within:border-accent transition-all duration-200 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-400 shrink-0">
            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
          </svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="border-none outline-none text-[11px] tracking-[.04em] bg-transparent w-[150px] placeholder:text-gray-400"
          />
        </form>

        {/* ═══ Mobile Hamburger Button ═══ */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-[5px] bg-transparent border-none cursor-pointer p-0 z-[60]"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`block w-5 h-[2px] bg-black rounded-full transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-[2px] bg-black rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-black rounded-full transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </header>

      {/* ═══ Mobile Overlay ═══ */}
      <div
        className={`md:hidden fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40 transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ═══ Mobile Slide-in Drawer ═══ */}
      <nav
        className={`md:hidden fixed top-0 right-0 h-full w-[85vw] max-w-[360px] bg-white z-50 shadow-[-8px_0_30px_rgba(0,0,0,.1)] transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] overflow-y-auto ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100">
          <span className="text-[10px] font-bold tracking-[.15em] uppercase text-gray-400">Menu</span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors bg-transparent border-none cursor-pointer"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-600">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>

        {/* Mobile Search */}
        <div className="px-6 py-4 border-b border-gray-100">
          <form onSubmit={handleSearch} className="flex items-center gap-2 border border-gray-200 px-3 py-2.5 bg-gray-50 rounded-lg focus-within:border-accent transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-400 shrink-0">
              <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="border-none outline-none text-[13px] bg-transparent w-full placeholder:text-gray-400"
            />
          </form>
        </div>

        {/* Mobile Nav Links */}
        <ul className="list-none p-0 m-0">
          {NAV.map((item) => {
            const isActive = item.to
              ? pathname === item.to || (item.hasMega && pathname.startsWith('/products'))
              : false;
            const isExpanded = expandedMobile === item.label;

            // Items with sub-menus (Products mega menu)
            if (item.hasMega) {
              return (
                <li key={item.label} className="border-b border-gray-100">
                  <button
                    type="button"
                    onClick={() => toggleMobileSection(item.label)}
                    className={`flex items-center justify-between w-full px-6 py-4 text-left bg-transparent border-none cursor-pointer transition-colors ${
                      isActive || isExpanded ? 'text-accent' : 'text-gray-700 hover:text-accent'
                    }`}
                  >
                    <span className="text-[12px] font-bold tracking-[.1em] uppercase">{item.label}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                      className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>

                  {/* Expandable products section */}
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: isExpanded ? '2000px' : '0px',
                      opacity: isExpanded ? 1 : 0,
                    }}
                  >
                    <div className="bg-gray-50 px-6 py-4 space-y-5">
                      <Link
                        to="/products"
                        className="block text-[10px] font-bold tracking-[.1em] uppercase text-accent no-underline mb-3"
                      >
                        View All Products →
                      </Link>
                      {CATALOGUE.map((cat) => {
                        const colors = CATEGORY_COLORS[cat.id] || CATEGORY_COLORS['tape-dispensers'];
                        return (
                          <div key={cat.id}>
                            <Link
                              to={`/products?category=${cat.id}`}
                              className="flex items-center gap-2 text-[10px] font-bold tracking-[.08em] uppercase no-underline mb-2 pb-1.5 border-b-2 transition-colors"
                              style={{ color: colors.text, borderBottomColor: colors.border }}
                            >
                              <span className="flex items-center justify-center w-5 h-5" style={{ color: colors.text }}>
                                {CATEGORY_ICONS[cat.id]}
                              </span>
                              {cat.name}
                            </Link>
                            {cat.subcategories.map((sub) => {
                              const products = getSubProducts(sub);
                              return (
                                <div key={sub.id} className="mb-2">
                                  <div className="text-[10px] font-semibold tracking-[.04em] uppercase text-gray-400 mb-1">{sub.name}</div>
                                  <ul className="list-none space-y-1 pl-2">
                                    {products.slice(0, 3).map((p) => (
                                      <li key={p.id}>
                                        <Link
                                          to={`/products/${p.id}`}
                                          className="text-[12px] text-gray-700 no-underline hover:text-accent transition-colors flex items-center gap-2 py-0.5"
                                        >
                                          <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: colors.border, opacity: 0.4 }} />
                                          {p.name}
                                        </Link>
                                      </li>
                                    ))}
                                    {products.length > 3 && (
                                      <li>
                                        <Link
                                          to={`/products?category=${cat.id}&sub=${sub.id}`}
                                          className="text-[10px] text-accent no-underline hover:underline font-medium pl-3"
                                        >
                                          +{products.length - 3} more
                                        </Link>
                                      </li>
                                    )}
                                  </ul>
                                </div>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </li>
              );
            }

            // Items with simple dropdown (More)
            if (item.hasDropdown) {
              return (
                <li key={item.label} className="border-b border-gray-100">
                  <button
                    type="button"
                    onClick={() => toggleMobileSection(item.label)}
                    className={`flex items-center justify-between w-full px-6 py-4 text-left bg-transparent border-none cursor-pointer transition-colors ${
                      isExpanded ? 'text-accent' : 'text-gray-700 hover:text-accent'
                    }`}
                  >
                    <span className="text-[12px] font-bold tracking-[.1em] uppercase">{item.label}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                      className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: isExpanded ? '400px' : '0px',
                      opacity: isExpanded ? 1 : 0,
                    }}
                  >
                    <div className="bg-gray-50">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.to}
                          to={subItem.to}
                          className={`flex items-center gap-3 px-8 py-3.5 text-[12px] font-semibold tracking-[.06em] uppercase no-underline border-t border-gray-100 transition-colors ${
                            pathname === subItem.to ? 'text-accent bg-white' : 'text-gray-600 hover:text-accent hover:bg-white'
                          }`}
                        >
                          <span className="text-base">{subItem.icon}</span>
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              );
            }

            // Simple nav links
            return (
              <li key={item.to} className="border-b border-gray-100">
                <Link
                  to={item.to}
                  className={`block px-6 py-4 text-[12px] font-bold tracking-[.1em] uppercase no-underline transition-colors ${
                    isActive ? 'text-accent bg-red-50/50' : 'text-gray-700 hover:text-accent hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Footer — Contact CTA */}
        <div className="px-6 py-6 mt-4">
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-accent text-white text-[11px] font-bold tracking-[.1em] uppercase no-underline rounded-lg hover:bg-accent-hover transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
              <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
            </svg>
            Get In Touch
          </Link>
          <div className="mt-4 text-center text-[10px] text-gray-400 tracking-[.06em]">
            +91 88847 46746 · Mon–Sat
          </div>
        </div>
      </nav>
    </>
  );
}
