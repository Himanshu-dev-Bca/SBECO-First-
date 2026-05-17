import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/updates', label: 'Updates' },
  { to: '/products', label: 'Products' },
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
    <header className="flex items-center justify-between px-8 h-16 bg-white border-b border-gray-200 sticky top-0 z-50">
      <Link to="/" className="text-[22px] font-extrabold tracking-tight no-underline text-black">
        Super <span className="text-accent">Bright</span> Labs
      </Link>

      <ul className="hidden md:flex gap-8 list-none">
        {NAV.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              className={`text-[11px] tracking-[.1em] uppercase font-semibold no-underline transition-colors duration-200 ${
                pathname === to ? 'text-accent' : 'text-gray-600 hover:text-accent'
              }`}
            >
              {label}
            </Link>
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
