import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/superbrightlabs/',
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@superbrightlabs',
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: '#',
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1f2e] text-white border-t border-[#d4af37]/20">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 pt-10 pb-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-8 lg:gap-16">

          {/* Left Column — Contact Info */}
          <div className="flex flex-col gap-5 md:w-1/3 order-3 md:order-1">
            <div>
              <h4 className="text-[11px] font-semibold tracking-[0.2em] text-[#d4af37] uppercase font-['Montserrat'] mb-4 flex items-center gap-3">
                Get In Touch
                <span className="h-[1px] flex-1 max-w-[40px] bg-[#d4af37]/30" />
              </h4>

              <div className="flex flex-col gap-3">
                {/* Phone */}
                <a
                  href="tel:+918884746746"
                  className="group flex items-center gap-3.5 text-gray-300 no-underline hover:text-white transition-colors duration-200"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#d4af37]/10 group-hover:bg-[#d4af37]/20 transition-colors duration-200">
                    <svg className="w-4 h-4 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <span className="text-[13px] font-['Montserrat'] font-medium tracking-wide">+91 8884746746</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@sbeco.com"
                  className="group flex items-center gap-3.5 text-gray-300 no-underline hover:text-white transition-colors duration-200"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#d4af37]/10 group-hover:bg-[#d4af37]/20 transition-colors duration-200">
                    <svg className="w-4 h-4 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <span className="text-[13px] font-['Montserrat'] font-medium tracking-wide">[EMAIL_ADDRESS]</span>
                </a>

                {/* Address */}
                <div className="group flex items-start gap-3.5 text-gray-300">
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#d4af37]/10 shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <span className="text-[13px] font-['Montserrat'] leading-[1.7] font-medium">
                    #4/2 1st Main, <br />Srinivasa Colony, <br />Bangalore-560027
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-600/50 text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37]/50 hover:bg-[#d4af37]/10 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Middle Column — Navigation */}
          <div className="flex flex-col justify-center md:w-1/4 md:px-4 order-2 md:order-2">
            <h4 className="text-[11px] font-semibold tracking-[0.2em] text-[#d4af37] uppercase font-['Montserrat'] mb-4 flex items-center gap-3">
              Quick Links
              <span className="h-[1px] flex-1 max-w-[40px] bg-[#d4af37]/30" />
            </h4>

            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group flex items-center gap-2.5 py-2 text-gray-300 no-underline hover:text-white transition-colors duration-200 w-fit"
                >
                  <span className="w-0 h-[1px] bg-[#d4af37] group-hover:w-4 transition-all duration-300" />
                  <span className="text-[13px] font-['Montserrat'] font-medium tracking-wide">
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Column — Branding */}
          <div className="flex flex-col justify-center gap-6 md:w-5/12 md:pl-10 md:border-l border-[#d4af37]/15 order-1 md:order-3">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold font-['Playfair_Display'] italic text-white leading-[1.15] tracking-tight">
                Packaging <br />
                <span className="text-[#d4af37]">Made Easy.</span>
              </h2>

              <div className="flex items-center gap-3 mt-3">
                <span className="h-[1px] w-10 bg-[#d4af37]/60" />
                <span className="text-[10px] tracking-[0.2em] font-['Montserrat'] text-gray-400 uppercase font-medium">
                  Serving Excellence for 40+ Years
                </span>
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 mt-2 text-[11px] tracking-[0.15em] font-['Montserrat'] font-semibold uppercase text-[#d4af37] no-underline hover:text-white transition-colors duration-300 w-fit"
            >
              Get a Quote
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom bar — copyright & privacy */}
      <div className="border-t border-gray-700/40">
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] font-['Montserrat'] text-gray-500 tracking-wide">
            © 2025 SBECO. All Rights Reserved.
          </span>
          <Link
            to="/privacy"
            className="text-[11px] font-['Montserrat'] text-gray-500 no-underline hover:text-gray-300 transition-colors duration-200 tracking-wide"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
