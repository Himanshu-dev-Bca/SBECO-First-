import { Link } from 'react-router-dom';

/* ── Navigation Links ─────────────────────────────── */
const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

const PRODUCT_LINKS = [
  { to: '/products?category=tape-dispensers', label: 'Tapes & Dispensers' },
  { to: '/products?category=strapping-solutions', label: 'Strapping Solutions' },
  { to: '/products?category=power-tools', label: 'Power Tools' },
  { to: '/products?category=packaging-consumables', label: 'Packaging Consumables' },
  { to: '/products?category=nailing-stapling', label: 'Nailing & Stapling' },
  { to: '/products?category=facility-management', label: 'Facility Management' },
];

/* ── Social Media Icons ───────────────────────────── */
const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/superbrightlabs/',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@superbrightlabs',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Subtle top accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-80" />

      {/* ── Main Footer Grid ────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Column 1 — Brand & Tagline */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div>
              <Link to="/" className="inline-block mb-5">
                <img
                  src="/images/sbeco-logo.png"
                  alt="SBECO"
                  className="h-12 md:h-14 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <p className="text-[13px] text-gray-400 leading-[1.8] max-w-[320px] font-['Inter']">
                Your trusted partner for industrial packaging & tools since 1985. Authorized stockists for leading global brands, serving excellence across India and beyond.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 mt-1">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group flex items-center justify-center w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.08] text-gray-400 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase mb-5 flex items-center gap-3">
              Quick Links
              <span className="h-[1px] flex-1 max-w-[30px] bg-accent/30" />
            </h4>
            <nav className="flex flex-col gap-0.5">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group flex items-center gap-2 py-[7px] text-[13px] text-gray-400 no-underline hover:text-white transition-colors duration-200 font-['Inter']"
                >
                  <span className="w-0 h-[1px] bg-accent group-hover:w-3 transition-all duration-300" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 — Products */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase mb-5 flex items-center gap-3">
              Products
              <span className="h-[1px] flex-1 max-w-[30px] bg-accent/30" />
            </h4>
            <nav className="flex flex-col gap-0.5">
              {PRODUCT_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group flex items-center gap-2 py-[7px] text-[13px] text-gray-400 no-underline hover:text-white transition-colors duration-200 font-['Inter']"
                >
                  <span className="w-0 h-[1px] bg-accent group-hover:w-3 transition-all duration-300" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4 — Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase mb-5 flex items-center gap-3">
              Get In Touch
              <span className="h-[1px] flex-1 max-w-[30px] bg-accent/30" />
            </h4>

            <div className="flex flex-col gap-4">
              {/* Phone */}
              <a
                href="tel:+918884746746"
                className="group flex items-center gap-3 text-gray-400 no-underline hover:text-white transition-colors duration-200"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] group-hover:bg-accent/15 group-hover:border-accent/30 transition-all duration-300 shrink-0">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <span className="text-[13px] font-['Inter'] font-medium">+91 88847 46746</span>
              </a>

              {/* Email */}
              <a
                href="mailto:sales@sbeco.in"
                className="group flex items-center gap-3 text-gray-400 no-underline hover:text-white transition-colors duration-200"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] group-hover:bg-accent/15 group-hover:border-accent/30 transition-all duration-300 shrink-0">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="text-[13px] font-['Inter'] font-medium">sales@sbeco.in</span>
              </a>

              {/* Address */}
              <div className="group flex items-start gap-3 text-gray-400">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="text-[13px] font-['Inter'] leading-[1.8] font-medium">
                  Srinivasa Colony, <br />Bangalore – 560027, <br />Karnataka, India
                </span>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="mt-3 inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white text-[11px] font-bold tracking-[0.12em] uppercase no-underline hover:bg-accent-hover hover:-translate-y-0.5 transition-all duration-300 rounded-sm w-fit"
              >
                Request a Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ──────────────────────────────────── */}
      <div className="border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] font-['Inter'] text-gray-500 tracking-wide">
            © {new Date().getFullYear()} Super Bright Engineering Company. All Rights Reserved.
          </span>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-[11px] font-['Inter'] text-gray-500 no-underline hover:text-white transition-colors duration-200 tracking-wide"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-[11px] font-['Inter'] text-gray-500 no-underline hover:text-white transition-colors duration-200 tracking-wide"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle background texture */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-br from-transparent via-transparent to-white/[0.02] pointer-events-none z-0" />
    </footer>
  );
}
