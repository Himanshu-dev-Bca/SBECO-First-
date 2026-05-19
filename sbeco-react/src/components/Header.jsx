import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CATALOGUE } from '../data/products';

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/updates', label: 'Updates' },
  { to: '/products', label: 'Products', hasMega: true },
  { to: '/photos', label: 'Photos' },
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

      <ul className="hidden md:flex gap-8 list-none">
        {NAV.map(({ to, label, hasMega }) => (
          <li key={to} className={hasMega ? 'group/mega relative' : ''}>
            <Link
              to={to}
              className={`nav-link text-[11px] tracking-[.1em] uppercase font-semibold no-underline transition-colors duration-200 ${
                pathname === to || (hasMega && pathname.startsWith('/products')) ? 'text-accent active' : 'text-gray-600 hover:text-accent'
              }`}
            >
              {label}
              {hasMega && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 inline-block ml-1 -mt-px opacity-50">
                  <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              )}
            </Link>

            {/* Mega Menu Dropdown */}
            {hasMega && (
              <div className="invisible opacity-0 group-hover/mega:visible group-hover/mega:opacity-100 transition-all duration-200 absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50">
                <div className="bg-white border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,.1)] w-[720px] max-w-[90vw]">
                  {/* Header */}
                  <div className="flex items-center justify-between px-7 py-4 border-b border-gray-100 bg-gray-50/50">
                    <span className="text-[10px] tracking-[.12em] uppercase font-bold text-gray-400">Our Product Range</span>
                    <Link to="/products" className="text-[10px] tracking-[.08em] uppercase font-semibold text-accent no-underline hover:underline">
                      View All →
                    </Link>
                  </div>

                  {/* Categories Grid */}
                  <div className="grid grid-cols-3 divide-x divide-gray-100">
                    {CATALOGUE.map(cat => (
                      <div key={cat.id} className="p-6">
                        <div className="text-[11px] font-bold tracking-[.08em] uppercase text-black mb-4 pb-2 border-b-2 border-accent">
                          {cat.name}
                        </div>
                        <div className="space-y-3">
                          {cat.subcategories.map(sub => (
                            <div key={sub.id}>
                              <div className="text-[10px] font-semibold tracking-[.06em] uppercase text-gray-400 mb-1.5">{sub.name}</div>
                              <ul className="space-y-1 list-none">
                                {sub.products.map(p => (
                                  <li key={p.id}>
                                    <Link
                                      to={`/products/${p.id}`}
                                      className="text-[12px] text-gray-600 no-underline hover:text-accent transition-colors flex items-center gap-1.5 py-0.5"
                                    >
                                      <span className="w-1 h-1 rounded-full bg-gray-300 shrink-0" />
                                      {p.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSearch} className="hidden md:flex items-center gap-1.5 border border-gray-200 px-3 py-1.5 bg-white hover:border-gray-400 focus-within:border-accent transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-gray-400 shrink-0">
          <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
        </svg>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search products..."
          className="border-none outline-none text-[11px] tracking-[.04em] bg-transparent w-[140px] placeholder:text-gray-400"
        />
      </form>

      <div className="hidden md:block text-[10px] text-gray-400 tracking-[.08em]">
        EST. 2001 · INDUSTRIAL GRADE
      </div>
    </header>
  );
}
