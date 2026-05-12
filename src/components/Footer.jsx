import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-muted flex flex-col md:flex-row justify-between items-center px-8 md:px-12 py-10 text-[10px] tracking-[.08em] gap-4 text-center md:text-left">
      <div>© 2026 Super Bright Labs. All rights reserved.</div>
      <div className="flex gap-6">
        <Link to="/about" className="text-muted no-underline hover:text-white transition-colors">ABOUT</Link>
        <Link to="/products" className="text-muted no-underline hover:text-white transition-colors">PRODUCTS</Link>
        <Link to="/updates" className="text-muted no-underline hover:text-white transition-colors">UPDATES</Link>
        <Link to="/contact" className="text-muted no-underline hover:text-white transition-colors">CONTACT</Link>
      </div>
      <div>Industrial Grade Products Since 2001</div>
    </footer>
  );
}
