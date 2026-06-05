import Hero from '../components/Hero';

export default function About() {
  return (
    <>
      <Hero 
        label="About · Super Bright Labs"
        title={<>Built On Trust,<br />Driven By Quality</>}
        subtitle="For over two decades, Super Bright Labs has been a trusted supplier of industrial tools, packaging solutions, and protective materials for businesses across India." 
        image="/images/about_trusted_partner.png"
      />

      {/* Who We Are & Trusted Partner */}
      <section className="px-8 md:px-12 py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="animate-fade-up z-10 relative">
              <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3 mb-6 pb-3.5 border-b-2 border-black inline-flex">
                Your Trusted Partner <span className="text-[11px] text-gray-400 font-light">01</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-[.02em] leading-tight mb-8">
                Building Trust<br />Through <span className="text-accent">Excellence</span>
              </h2>
              <div className="space-y-6 text-[14px] text-gray-600 leading-relaxed">
                <p>
                  Super Bright Engineering Company (SBECO) has been a trusted name in the industry for over 40 years, delivering reliable solutions in strapping, nailing, stapling, packaging, and furnishing. Serving a wide range of clients—from packaging firms and interior designers to factories and logistics companies—we have built a reputation as a dependable, one-stop solution provider.
                </p>
                <p>
                  From double-sided mounting tapes to Bosch Professional power tools and custom foam packaging — we provide dependable products designed for demanding environments. Our diverse portfolio ensures that customers find the right solutions for both current needs and future growth.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white shrink-0 shadow-lg">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div className="text-[11px] font-bold tracking-[.1em] uppercase text-black">
                  Certified Quality<br /><span className="text-gray-400 font-medium">100% Guaranteed</span>
                </div>
              </div>
            </div>

            {/* Image Content - Beautifully Blended */}
            <div className="relative h-[500px] lg:h-[650px] w-full group animate-fade-up" style={{ animationDelay: '.1s' }}>
              {/* Decorative background blocks */}
              <div className="absolute top-10 -right-10 w-full h-full bg-gray-50 border border-gray-100 z-0 transition-transform duration-500 group-hover:-translate-x-4 group-hover:-translate-y-4"></div>
              <div className="absolute -bottom-10 -left-10 w-2/3 h-2/3 bg-accent/5 z-0 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"></div>
              
              {/* Main Image */}
              <div className="relative z-10 w-full h-full overflow-hidden border border-gray-200 shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
                <img 
                  src="/images/about_trusted_partner.png" 
                  alt="Industrial Facility" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                {/* Gradient blend overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 border-l-4 border-accent shadow-xl">
                  <div className="text-4xl font-extrabold text-black mb-1">40+</div>
                  <div className="text-[10px] font-bold tracking-[.15em] uppercase text-gray-500">Years of<br/>Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-8 md:px-12 pb-14">
        <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3 mb-7 pb-3.5 border-b-2 border-black">
          Our Mission <span className="text-[11px] text-gray-400 font-light">02</span>
        </div>
        <div className="border-l-4 border-accent bg-white px-9 py-8">
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

      {/* Team */}
      <section className="px-8 md:px-12 py-14">
        <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3 mb-7 pb-3.5 border-b-2 border-black">
          Our Team <span className="text-[11px] text-gray-400 font-light">03</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { symbol: '◆', role: 'Leadership', name: 'Founder', desc: 'Driving product quality and customer trust through strong leadership and industry expertise.' },
            { symbol: '◈', role: 'Sales', name: 'Sales Team', desc: 'Helping clients find the right solutions for their specific operational and manufacturing needs.' },
            { symbol: '▣', role: 'Operations', name: 'Operations Team', desc: 'Managing logistics so every order arrives on time and in perfect condition, nationwide.' },
          ].map((t, i) => (
            <div key={i} className="border border-gray-200 bg-white p-8 text-center hover:border-black hover:-translate-y-0.5 transition-all animate-fade-up" style={{ animationDelay: `${i * .08}s` }}>
              <div className="text-4xl text-accent mb-4">{t.symbol}</div>
              <div className="text-[10px] text-gray-400 tracking-[.1em] uppercase mb-1">{t.role}</div>
              <div className="text-[16px] font-bold uppercase tracking-[.02em] mb-2">{t.name}</div>
              <p className="text-[12px] text-gray-600 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="px-8 md:px-12 pb-14">
        <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3 mb-7 pb-3.5 border-b-2 border-black">
          Our Journey <span className="text-[11px] text-gray-400 font-light">04</span>
        </div>
        <div className="flex flex-col gap-5">
          {[
            { year: '2001', title: 'Founded', desc: 'Super Bright Labs started as a small trading house specialising in industrial adhesive tapes.' },
            { year: '2008', title: 'Product Expansion', desc: 'Expanded into power tools and protective packaging, becoming a one-stop industrial supply partner.' },
            { year: '2015', title: 'Pan-India Reach', desc: 'Built relationships with clients across India in manufacturing, logistics, and construction sectors.' },
            { year: '2026', title: 'Digital Catalogue', desc: 'Launched our full product catalogue online — making it easier to browse, compare, and enquire about products.' },
          ].map((tl, i) => (
            <div key={i} className="flex gap-6 border border-gray-200 bg-white p-7 hover:border-black transition-colors animate-fade-up" style={{ animationDelay: `${i * .06}s` }}>
              <div className="text-[32px] font-extrabold text-accent tracking-tight min-w-[90px]">{tl.year}</div>
              <div>
                <h4 className="text-[14px] font-bold uppercase tracking-[.04em] mb-1">{tl.title}</h4>
                <p className="text-[13px] text-gray-600 leading-relaxed">{tl.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
