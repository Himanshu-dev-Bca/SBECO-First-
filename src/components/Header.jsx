import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CATALOGUE } from '../data/products';

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { 
    to: '/products', 
    label: 'Products', 
    hasDropdown: true,
    items: [
      { to: '/products?category=tape-dispensers', label: 'Tapes and Tape Dispensers' },
      { to: '/products?category=strapping-solutions', label: 'Strapping Solutions' },
      { to: '/products?category=power-tools', label: 'Power Tools' },
      { to: '/products?category=packaging-consumables', label: 'Packaging Consumables' },
      { to: '/products', label: 'And Many More...' }
    ]
  },
  { to: '/gallery', label: 'Gallery' },
  { 
    label: 'More', 
    hasDropdown: true,
    items: [
      { to: '/articles', label: 'Articles' },
      { to: '/videos', label: 'Videos' },
    ]
  },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState(null); // 'Products' | 'More' | null

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setExpandedMobile(null);
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

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query.trim())}`);
      setQuery('');
      setMobileOpen(false);
    }
  };

  const toggleMobileSection = (label) => {
    setExpandedMobile(prev => prev === label ? null : label);
  };

  return (
    <>
      <header className="flex items-center justify-between px-4 md:px-8 h-16 md:h-20 bg-white border-b border-gray-200 sticky top-0 z-50">
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img src="/images/sbeco-logo.png" alt="SBECO" className="h-10 md:h-14 w-auto object-contain" />
        </Link>

        {/* ═══ Desktop Nav (unchanged) ═══ */}
        <ul className="hidden md:flex gap-10 list-none">
          {NAV.map((item) => (
            <li key={item.to || item.label} className={item.hasMega || item.hasDropdown ? 'group/mega relative' : ''}>
              {item.hasDropdown ? (
                <button
                  type="button"
                  className={`nav-link text-[11px] tracking-[.1em] uppercase font-semibold no-underline transition-all duration-200 relative pb-1 ${
                    pathname === item.to || (item.hasMega && pathname.startsWith('/products')) ? 'text-accent' : 'text-gray-600 hover:text-accent'
                  }`}
                >
                  {item.label}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 inline-block ml-1.5 -mt-px opacity-60 group-hover/mega:opacity-100 transition-opacity">
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover/mega:w-full transition-all duration-300" />
                </button>
              ) : (
                <Link
                  to={item.to}
                  className={`nav-link text-[11px] tracking-[.1em] uppercase font-semibold no-underline transition-all duration-200 relative pb-1 ${
                    pathname === item.to || (item.hasMega && pathname.startsWith('/products')) ? 'text-accent' : 'text-gray-600 hover:text-accent'
                  }`}
                >
                  {item.label}
                  {(item.hasMega || item.hasDropdown) && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 inline-block ml-1.5 -mt-px opacity-60 group-hover/mega:opacity-100 transition-opacity">
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover/mega:w-full transition-all duration-300" />
                </Link>
              )}

              {/* Mega Menu Dropdown */}
              {item.hasMega && (
                <div className="pointer-events-none invisible opacity-0 group-hover/mega:pointer-events-auto group-hover/mega:visible group-hover/mega:opacity-100 transition-all duration-300 absolute top-full left-1/2 -translate-x-1/2 pt-6 z-50">
                  <div className="bg-white border border-gray-200 shadow-[0_24px_80px_rgba(0,0,0,.12)] w-[720px] max-w-[90vw] rounded-sm">
                    {/* Header */}
                    <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100 bg-gray-50">
                      <span className="text-[10px] tracking-[.12em] uppercase font-bold text-gray-500">Our Product Range</span>
                      <Link to="/products" className="text-[10px] tracking-[.08em] uppercase font-semibold text-accent no-underline hover:opacity-70 transition-opacity">
                        View All →
                      </Link>
                    </div>

                    {/* Categories Grid */}
                    <div className="grid grid-cols-3 divide-x divide-gray-100">
                      {CATALOGUE.map(cat => (
                        <div key={cat.id} className="p-7">
                          <div className="text-[11px] font-bold tracking-[.08em] uppercase text-black mb-5 pb-3 border-b-2 border-accent">
                            {cat.name}
                          </div>
                          <div className="space-y-4">
                            {cat.subcategories.map(sub => (
                              <div key={sub.id}>
                                <div className="text-[10px] font-semibold tracking-[.06em] uppercase text-gray-500 mb-2">{sub.name}</div>
                                {sub.products ? (
                                  <ul className="space-y-1.5 list-none">
                                    {sub.products.map(p => (
                                      <li key={p.id}>
                                        <Link
                                          to={`/products/${p.id}`}
                                          className="text-[12px] text-gray-700 no-underline hover:text-accent transition-colors flex items-center gap-2 py-0.5 hover:translate-x-0.5 duration-200"
                                        >
                                          <span className="w-1 h-1 rounded-full bg-gray-300 shrink-0" />
                                          {p.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                ) : null}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Simple Dropdown */}
              {item.hasDropdown && (
                <div className="pointer-events-none invisible opacity-0 group-hover/mega:pointer-events-auto group-hover/mega:visible group-hover/mega:opacity-100 transition-all duration-300 absolute top-full left-1/2 -translate-x-1/2 pt-6 z-50">
                  <div className="bg-white border border-gray-200 shadow-[0_24px_80px_rgba(0,0,0,.12)] min-w-[220px] rounded-sm overflow-hidden">
                    <ul className="flex flex-col list-none p-0 m-0">
                      {item.items.map((subItem, idx) => (
                        <li key={subItem.to} className={`${idx !== item.items.length - 1 ? 'border-b border-gray-100' : ''}`}>
                          <Link to={subItem.to} className="block px-6 py-4 text-[11px] font-bold tracking-[.1em] uppercase text-gray-700 hover:text-accent hover:bg-gray-50 no-underline transition-all duration-200 hover:pl-7">
                            {subItem.label}
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
        <form onSubmit={handleSearch} className="hidden md:flex items-center gap-2 border border-gray-200 px-4 py-2 bg-white hover:border-gray-400 focus-within:border-accent transition-all duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-400 shrink-0">
            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
          </svg>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
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
          <span
            className={`block w-5 h-[2px] bg-black rounded-full transition-all duration-300 origin-center ${
              mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-black rounded-full transition-all duration-300 ${
              mobileOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-black rounded-full transition-all duration-300 origin-center ${
              mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </header>

      {/* ═══ Mobile Overlay ═══ */}
      <div
        className={`md:hidden fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
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
          <form onSubmit={handleSearch} className="flex items-center gap-2 border border-gray-200 px-3 py-2.5 bg-gray-50 rounded-sm focus-within:border-accent transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-400 shrink-0">
              <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
            </svg>
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search products..."
              className="border-none outline-none text-[13px] bg-transparent w-full placeholder:text-gray-400"
            />
          </form>
        </div>

        {/* Mobile Nav Links */}
        <ul className="list-none p-0 m-0">
          {NAV.map((item, i) => {
            const isActive = item.to
              ? pathname === item.to || (item.hasMega && pathname.startsWith('/products'))
              : false;
            const isExpanded = expandedMobile === item.label;

            // Items with sub-menus (Products or More)
            if (item.hasMega || item.hasDropdown) {
              return (
                <li key={item.label} className="border-b border-gray-100">
                  {/* Parent button */}
                  <button
                    type="button"
                    onClick={() => toggleMobileSection(item.label)}
                    className={`flex items-center justify-between w-full px-6 py-4 text-left bg-transparent border-none cursor-pointer transition-colors ${
                      isActive || isExpanded ? 'text-accent' : 'text-gray-700 hover:text-accent'
                    }`}
                  >
                    <span className="text-[12px] font-bold tracking-[.1em] uppercase">{item.label}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                      className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    >
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>

                  {/* Collapsible sub-items */}
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: isExpanded ? '600px' : '0px',
                      opacity: isExpanded ? 1 : 0,
                    }}
                  >
                    {/* Products mega-menu content */}
                    {item.hasMega && (
                      <div className="bg-gray-50 px-6 py-4 space-y-5">
                        <Link
                          to="/products"
                          className="block text-[10px] font-bold tracking-[.1em] uppercase text-accent no-underline mb-3"
                        >
                          View All Products →
                        </Link>
                        {CATALOGUE.map(cat => (
                          <div key={cat.id}>
                            <div className="text-[10px] font-bold tracking-[.08em] uppercase text-gray-500 mb-2 pb-1.5 border-b border-gray-200">
                              {cat.name}
                            </div>
                            {cat.subcategories.map(sub => (
                              <div key={sub.id} className="mb-2">
                                <div className="text-[10px] font-semibold tracking-[.04em] uppercase text-gray-400 mb-1">{sub.name}</div>
                                {sub.products && (
                                  <ul className="list-none space-y-1 pl-2">
                                    {sub.products.map(p => (
                                      <li key={p.id}>
                                        <Link
                                          to={`/products/${p.id}`}
                                          className="text-[12px] text-gray-700 no-underline hover:text-accent transition-colors flex items-center gap-2 py-0.5"
                                        >
                                          <span className="w-1 h-1 rounded-full bg-gray-300 shrink-0" />
                                          {p.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Simple dropdown content (More) */}
                    {item.hasDropdown && (
                      <div className="bg-gray-50">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.to}
                            to={subItem.to}
                            className={`block px-8 py-3.5 text-[12px] font-semibold tracking-[.06em] uppercase no-underline border-t border-gray-100 transition-colors ${
                              pathname === subItem.to ? 'text-accent bg-white' : 'text-gray-600 hover:text-accent hover:bg-white'
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
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
            className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-accent text-white text-[11px] font-bold tracking-[.1em] uppercase no-underline rounded-sm hover:bg-accent-hover transition-colors"
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
