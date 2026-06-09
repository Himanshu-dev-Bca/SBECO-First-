import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

export default function About() {
  return (
    <>
      <Hero label="About · Super Bright Labs"
        title={<>Built On Trust,<br />Driven By Quality</>}
        subtitle="For over two decades, Super Bright Labs has been a trusted supplier of industrial tools, packaging solutions, and protective materials for businesses across India."
        image="/images/about_trusted_partner.png"
      />

      {/* Who We Are */}
      <section className="px-8 md:px-12 py-16">
        <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3 mb-10 pb-3.5 border-b-2 border-black">
          Who We Are <span className="text-[11px] text-gray-400 font-light">01</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Our Story Card */}
          <div className="border border-gray-200 bg-white overflow-hidden hover:border-black hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,.06)] transition-all animate-fade-up">
            <div className="bg-gradient-to-r from-accent/5 to-transparent px-9 py-5 border-b border-gray-100 flex items-center gap-4">
              <div className="w-10 h-10 bg-accent rounded-[10px] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none stroke-2">
                  <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
                </svg>
              </div>
              <div>
                <div className="text-[13px] font-bold tracking-[.06em] uppercase">Our Story</div>
                <div className="text-[10px] text-gray-400 tracking-[.08em] uppercase">Since 2001</div>
              </div>
            </div>
            <div className="p-9">
              <p className="text-[13px] text-gray-600 leading-[1.8] mb-4">
                Super Bright Engineering Company (SBECO) has been a trusted name in the industry for over 40 years, delivering reliable solutions in strapping, nailing, stapling, packaging, and furnishing. Serving a wide range of clients—from packaging firms and interior designers to factories and logistics companies—we have built a reputation as a dependable, one-stop solution provider.
              </p>
              <p className="text-[13px] text-gray-600 leading-[1.8] mb-4">
                With decades of expertise, we offer an extensive range of products including tapes, straps, seals, tools, foam rolls, wraps, dispensers, PVC curtains, films, and power tools. Our diverse portfolio ensures that customers find the right solutions for both current needs and future growth.
              </p>
              <div className="mt-6 pt-5 border-t border-gray-100">
                <p className="text-[14px] font-semibold text-black italic leading-relaxed">
                  "At SBECO, our focus is simple: quality, variety, and service that gives our customers a real competitive edge."
                </p>
              </div>
            </div>
          </div>

          {/* What We Do Card + Stats */}
          <div className="flex flex-col gap-8">
            <div className="border border-gray-200 bg-white overflow-hidden hover:border-black hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,.06)] transition-all animate-fade-up" style={{ animationDelay: '.08s' }}>
              <div className="bg-gradient-to-r from-accent/5 to-transparent px-9 py-5 border-b border-gray-100 flex items-center gap-4">
                <div className="w-10 h-10 bg-black rounded-[10px] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none stroke-2">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] font-bold tracking-[.06em] uppercase">What We Do</div>
                  <div className="text-[10px] text-gray-400 tracking-[.08em] uppercase">Our Expertise</div>
                </div>
              </div>
              <div className="p-9">
                <p className="text-[13px] text-gray-600 leading-[1.8]">
                  From double-sided mounting tapes to Bosch Professional power tools and custom foam packaging — we provide dependable products designed for demanding environments. Our catalogue spans 20+ products across 3 major categories, serving industries from electronics to heavy manufacturing.
                </p>
              </div>
            </div>

            {/* Mini Stats */}
            <div className="grid grid-cols-2 gap-4 animate-fade-up" style={{ animationDelay: '.16s' }}>
              {[
                { num: '40+', label: 'Years in Business', icon: '◆' },
                { num: '500+', label: 'Products Available', icon: '◈' },
                { num: '1000+', label: 'Clients Served', icon: '▣' },
                { num: '20+', label: 'Product Categories', icon: '◇' },
              ].map((s, i) => (
                <div key={i} className="border border-gray-200 bg-white p-6 text-center hover:border-accent hover:-translate-y-0.5 transition-all">
                  <div className="text-accent text-lg mb-2">{s.icon}</div>
                  <div className="text-[26px] font-extrabold tracking-tight">{s.num}</div>
                  <div className="text-[10px] text-gray-400 tracking-[.1em] uppercase mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-8 md:px-12 pb-14">
        <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3 mb-7 pb-3.5 border-b-2 border-black">
          Our Mission <span className="text-[11px] text-gray-400 font-light">02</span>
        </div>
        <div className="border-l-4 border-accent bg-white px-9 py-8 shadow-[0_4px_20px_rgba(0,0,0,.04)]">
          <p className="text-[14px] text-gray-600 leading-relaxed">
            We help industries work smarter and safer by showcasing quality products, practical solutions, and responsive support every day. Our commitment is simple — provide the best industrial-grade products with exceptional customer service, expert guidance, and competitive pricing.
          </p>
        </div>
      </section>

      {/* Values */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-gray-200 bg-white">
        {[
          { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />, title: 'Quality First', desc: 'Every product is tested and certified for industrial-grade performance.' },
          { icon: <><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>, title: 'Reliability', desc: 'Consistent product range, transparent business practices, and dependable support.' },
          { icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /></>, title: 'Partnership', desc: 'We work alongside clients as a long-term solutions partner, not just a supplier.' },
          { icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>, title: 'Experience', desc: 'Over 20 years of deep expertise in industrial packaging and tools.' },
        ].map((v, i) => (
          <div key={i} className="p-9 border-r border-gray-200 last:border-r-0 hover:bg-gray-100 transition-colors">
            <div className="w-10 h-10 bg-accent rounded-[10px] flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none stroke-2">{v.icon}</svg>
            </div>
            <div className="text-[13px] font-semibold uppercase tracking-[.06em] mb-1.5">{v.title}</div>
            <div className="text-[12px] text-gray-600 leading-relaxed">{v.desc}</div>
          </div>
        ))}
      </div>

      {/* Journey */}
      <section className="px-8 md:px-12 py-14">
        <Link to="/about/journey" className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3 mb-7 pb-3.5 border-b-2 border-black no-underline text-black hover:text-accent transition-colors group">
          Our Journey <span className="text-[11px] text-gray-400 font-light">03</span>
          <span className="ml-auto text-[12px] text-gray-400 group-hover:text-accent group-hover:translate-x-1 transition-all">View All -&gt;</span>
        </Link>
        <div className="relative overflow-hidden border border-gray-200 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr]">
            <div className="bg-black text-white p-9 md:p-12 flex flex-col justify-between gap-10">
              <div>
                <div className="text-[10px] tracking-[.16em] uppercase text-accent font-bold mb-4">Built over decades</div>
                <h3 className="text-[30px] md:text-[42px] font-extrabold uppercase leading-[1.05] tracking-[.02em]">From specialist supplier to industrial partner.</h3>
              </div>
              <p className="text-[13px] text-gray-300 leading-[1.8] max-w-[420px]">
                Our growth has followed one clear thread: dependable products, practical guidance, and stronger support for every customer operation we serve.
              </p>
            </div>
            <div className="relative p-8 md:p-10">
              <div className="absolute left-[43px] md:left-[51px] top-10 bottom-10 w-px bg-gray-200" />
              {[
                { year: '2001', title: 'Founded', desc: 'Started as a focused industrial supply house specialising in adhesive tapes and packaging essentials.' },
                { year: '2008', title: 'Expanded Range', desc: 'Added strapping systems, power tools, and protective packaging for broader factory and logistics needs.' },
                { year: '2015', title: 'Wider Reach', desc: 'Built long-term relationships with clients across manufacturing, interiors, construction, and distribution.' },
                { year: '2026', title: 'Digital Catalogue', desc: 'Brought the product range online so teams can browse, compare, and enquire with less friction.' },
              ].map((tl, i) => (
                <Link key={i} to="/about/journey"
                  className="group relative grid grid-cols-[56px_1fr] gap-5 pb-7 last:pb-0 animate-fade-up no-underline text-black"
                  style={{ animationDelay: `${i * .08}s` }}>
                  <div className="relative z-10 w-7 h-7 mt-1 rounded-full bg-white border-2 border-accent group-hover:bg-accent transition-colors duration-300" />
                  <div className="border border-gray-200 bg-gray-50 p-6 group-hover:bg-white group-hover:border-black group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_32px_rgba(0,0,0,.06)] transition-all duration-300">
                    <div className="text-[28px] font-extrabold text-accent tracking-tight mb-1">{tl.year}</div>
                    <h4 className="text-[14px] font-bold uppercase tracking-[.04em] mb-2">{tl.title}</h4>
                    <p className="text-[13px] text-gray-600 leading-relaxed">{tl.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
