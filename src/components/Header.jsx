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
                  MEGA MENU DROPDOWN (Products)
                 ──────────────────────────────────────── */}
              {item.hasMega && (
                <div
                  ref={megaRef}
                  onMouseEnter={openMega}
                  onMouseLeave={closeMega}
                  className={`mega-menu-container fixed left-0 right-0 top-[80px] z-50 transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)] ${
                    megaOpen
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                  }`}
                >
                  {/* Backdrop blur overlay */}
                  <div className="absolute inset-0 bg-black/5 backdrop-blur-[2px] -z-10" onClick={() => setMegaOpen(false)} />

                  <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="mega-menu bg-white border border-gray-200/80 shadow-[0_24px_80px_rgba(0,0,0,.12),0_8px_24px_rgba(0,0,0,.06)] rounded-xl overflow-hidden">

                      {/* ── Mega Menu Header ── */}
                      <div className="flex items-center justify-between px-8 py-4 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                        <div className="flex items-center gap-3">
                          <div className="w-1 h-5 bg-accent rounded-full" />
                          <span className="text-[11px] tracking-[.12em] uppercase font-bold text-gray-500">
                            Our Product Range
                          </span>
                          <span className="text-[10px] px-2 py-0.5 bg-accent/10 text-accent rounded-full font-semibold">
                            {CATALOGUE.reduce((acc, cat) => acc + getCategoryProductCount(cat), 0)}+ Products
                          </span>
                        </div>
                        <Link
                          to="/products"
                          onClick={() => setMegaOpen(false)}
                          className="group/viewall flex items-center gap-1.5 text-[10px] tracking-[.08em] uppercase font-semibold text-accent no-underline hover:opacity-80 transition-opacity"
                        >
                          View All Products
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                            className="w-3.5 h-3.5 transition-transform group-hover/viewall:translate-x-0.5">
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638l-3.22-3.22a.75.75 0 111.06-1.06l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l3.22-3.22H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </div>

                      {/* ── Mega Menu Body — Sidebar + Content ── */}
                      <div className="flex min-h-[420px] max-h-[calc(100vh-200px)]">

                        {/* ── Left: Category Sidebar ── */}
                        <div className="w-[260px] bg-gray-50/60 border-r border-gray-100 py-3 shrink-0">
                          {CATALOGUE.map((cat, idx) => {
                            const colors = CATEGORY_COLORS[cat.id] || CATEGORY_COLORS['tape-dispensers'];
                            const isActive = activeCat === idx;
                            return (
                              <button
                                key={cat.id}
                                type="button"
                                onMouseEnter={() => setActiveCat(idx)}
                                onClick={() => {
                                  navigate(`/products?category=${cat.id}`);
                                  setMegaOpen(false);
                                }}
                                className={`mega-cat-btn w-full flex items-center gap-3 px-6 py-3.5 text-left border-none cursor-pointer transition-all duration-200 relative ${
                                  isActive
                                    ? 'bg-white shadow-[0_2px_8px_rgba(0,0,0,.04)]'
                                    : 'bg-transparent hover:bg-white/60'
                                }`}
                                style={isActive ? { borderLeft: `3px solid ${colors.border}` } : { borderLeft: '3px solid transparent' }}
                              >
                                <span
                                  className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200"
                                  style={{
                                    backgroundColor: isActive ? colors.bg : 'rgba(0,0,0,0.03)',
                                    color: isActive ? colors.text : '#9ca3af',
                                  }}
                                >
                                  {CATEGORY_ICONS[cat.id] || CATEGORY_ICONS['tape-dispensers']}
                                </span>
                                <div className="flex-1 min-w-0">
                                  <div className={`text-[11px] font-bold tracking-[.04em] uppercase truncate transition-colors duration-200 ${
                                    isActive ? 'text-gray-900' : 'text-gray-600'
                                  }`}>
                                    {cat.name}
                                  </div>
                                  <div className="text-[9px] text-gray-400 mt-0.5">
                                    {getCategoryProductCount(cat)} products
                                  </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                  className={`w-3.5 h-3.5 shrink-0 transition-all duration-200 ${isActive ? 'text-gray-400 translate-x-0 opacity-100' : 'text-gray-300 -translate-x-1 opacity-0'}`}>
                                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                </svg>
                              </button>
                            );
                          })}
                        </div>

                        {/* ── Right: Subcategories & Products ── */}
                        <div className="flex-1 overflow-y-auto mega-scroll py-5 px-8">
                          {CATALOGUE.map((cat, catIdx) => {
                            if (catIdx !== activeCat) return null;
                            const colors = CATEGORY_COLORS[cat.id] || CATEGORY_COLORS['tape-dispensers'];

                            return (
                              <div key={cat.id} className="animate-mega-fade">
                                {/* Category description */}
                                <div className="mb-6">
                                  <h3 className="text-[13px] font-bold text-gray-900 mb-1.5">{cat.name}</h3>
                                  <p className="text-[11px] text-gray-500 leading-relaxed max-w-lg">{cat.description}</p>
                                </div>

                                {/* Subcategories grid */}
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                                  {cat.subcategories.map((sub) => {
                                    const products = getSubProducts(sub);
                                    const displayProducts = products.slice(0, 5);
                                    const remaining = products.length - displayProducts.length;

                                    return (
                                      <div key={sub.id} className="mega-subcategory group/sub">
                                        {/* Subcategory header */}
                                        <Link
                                          to={`/products?category=${cat.id}&sub=${sub.id}`}
                                          onClick={() => setMegaOpen(false)}
                                          className="flex items-center gap-2 mb-3 pb-2 border-b-2 no-underline transition-colors"
                                          style={{ borderBottomColor: colors.border }}
                                        >
                                          <span className="text-[10px] font-bold tracking-[.08em] uppercase" style={{ color: colors.text }}>
                                            {sub.name}
                                          </span>
                                          <span className="text-[9px] text-gray-400 font-medium">
                                            ({products.length})
                                          </span>
                                        </Link>

                                        {/* Nested subcategories */}
                                        {sub.nestedSubcategories && sub.nestedSubcategories.length > 0 && (
                                          <div className="space-y-3 mb-2">
                                            {sub.nestedSubcategories.slice(0, 3).map((nested) => (
                                              <div key={nested.id}>
                                                <div className="text-[9px] font-semibold tracking-[.06em] uppercase text-gray-400 mb-1.5">
                                                  {nested.name}
                                                </div>
                                                <ul className="space-y-1 list-none">
                                                  {nested.products && nested.products.slice(0, 3).map((p) => (
                                                    <li key={p.id}>
                                                      <Link
                                                        to={`/products/${p.id}`}
                                                        onClick={() => setMegaOpen(false)}
                                                        className="mega-product-link text-[11px] text-gray-600 no-underline hover:text-accent transition-all duration-200 flex items-center gap-2 py-0.5"
                                                      >
                                                        <span className="w-1 h-1 rounded-full shrink-0 transition-colors duration-200" style={{ backgroundColor: colors.border, opacity: 0.4 }} />
                                                        <span className="truncate">{p.name}</span>
                                                      </Link>
                                                    </li>
                                                  ))}
                                                  {nested.products && nested.products.length > 3 && (
                                                    <li>
                                                      <Link
                                                        to={`/products?category=${cat.id}&sub=${sub.id}`}
                                                        onClick={() => setMegaOpen(false)}
                                                        className="text-[10px] text-accent no-underline hover:underline font-medium pl-3"
                                                      >
                                                        +{nested.products.length - 3} more
                                                      </Link>
                                                    </li>
                                                  )}
                                                </ul>
                                              </div>
                                            ))}
                                            {sub.nestedSubcategories.length > 3 && (
                                              <Link
                                                to={`/products?category=${cat.id}&sub=${sub.id}`}
                                                onClick={() => setMegaOpen(false)}
                                                className="text-[10px] text-accent no-underline hover:underline font-medium"
                                              >
                                                View all {sub.name} →
                                              </Link>
                                            )}
                                          </div>
                                        )}

                                        {/* Direct products */}
                                        {sub.products && sub.products.length > 0 && (
                                          <ul className="space-y-1 list-none">
                                            {displayProducts.map((p) => (
                                              <li key={p.id}>
                                                <Link
                                                  to={`/products/${p.id}`}
                                                  onClick={() => setMegaOpen(false)}
                                                  className="mega-product-link text-[11px] text-gray-600 no-underline hover:text-accent transition-all duration-200 flex items-center gap-2 py-0.5"
                                                >
                                                  <span className="w-1 h-1 rounded-full shrink-0 transition-colors duration-200" style={{ backgroundColor: colors.border, opacity: 0.4 }} />
                                                  <span className="truncate">{p.name}</span>
                                                  {p.isBestSeller && (
                                                    <span className="text-[8px] px-1.5 py-0.5 bg-amber-50 text-amber-700 rounded-full font-semibold uppercase tracking-wide shrink-0">
                                                      Best Seller
                                                    </span>
                                                  )}
                                                </Link>
                                              </li>
                                            ))}
                                            {remaining > 0 && (
                                              <li>
                                                <Link
                                                  to={`/products?category=${cat.id}&sub=${sub.id}`}
                                                  onClick={() => setMegaOpen(false)}
                                                  className="text-[10px] text-accent no-underline hover:underline font-medium pl-3"
                                                >
                                                  +{remaining} more products
                                                </Link>
                                              </li>
                                            )}
                                          </ul>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>

                                {/* Category CTA footer */}
                                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                                  <p className="text-[10px] text-gray-400">
                                    Explore all {getCategoryProductCount(cat)} products in {cat.name}
                                  </p>
                                  <Link
                                    to={`/products?category=${cat.id}`}
                                    onClick={() => setMegaOpen(false)}
                                    className="group/catcta inline-flex items-center gap-1.5 px-4 py-2 text-[10px] font-bold tracking-[.06em] uppercase no-underline rounded-lg transition-all duration-200"
                                    style={{
                                      backgroundColor: colors.bg,
                                      color: colors.text,
                                    }}
                                  >
                                    Browse {cat.name}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                      className="w-3 h-3 transition-transform group-hover/catcta:translate-x-0.5">
                                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638l-3.22-3.22a.75.75 0 111.06-1.06l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l3.22-3.22H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                    </svg>
                                  </Link>
                                </div>
                              </div>
                            );
                          })}
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
