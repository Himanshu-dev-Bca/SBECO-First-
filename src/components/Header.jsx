import { Link, useLocation } from 'react-router-dom';

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

      <div className="hidden md:block text-[10px] text-gray-400 tracking-[.08em]">
        EST. 2001 · INDUSTRIAL GRADE
      </div>
    </header>
  );
}
