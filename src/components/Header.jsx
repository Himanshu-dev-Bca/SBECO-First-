import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CATALOGUE } from '../data/products';

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products', hasMega: true },
  { to: '/photos', label: 'Photos' },
  { 
    label: 'More', 
    hasDropdown: true,
    items: [
      { to: '/articles', label: 'Articles' },
      { to: '/gallery', label: 'Gallery' },
      { to: '/videos', label: 'Videos' },
    ]
  },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query.trim())}`);
      setQuery('');
    }
  };

  return (
    <header className="flex items-center justify-between px-8 h-20 bg-white border-b border-gray-200 sticky top-0 z-50">
      <Link to="/" className="shrink-0">
        <img src="/images/sbeco-logo.png" alt="SBECO" className="h-14 w-auto object-contain" />
      </Link>

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
    </header>
  );
}
