import Hero from '../components/Hero';

const PRODUCTS_PHOTOS = [
  { src: '/images/category_power_tools.png', title: 'Professional Power Drills', category: 'Equipment' },
  { src: '/images/category_tapes.png', title: 'Premium Adhesive Tapes', category: 'Products' },
  { src: '/images/category_straps.png', title: 'Industrial Strapping Systems', category: 'Products' },
  { src: '/images/high_temp_tape.png', title: 'Advanced Heat-Resistant Solutions', category: 'Specialty' },
  { src: '/images/tape_dispensers.png', title: 'Precision Tape Dispensing Tools', category: 'Equipment' },
  { src: '/images/category_nailing.png', title: 'Heavy-Duty Fastening Systems', category: 'Tools' },
];

const CERTIFICATES = [
  { src: '/images/category_facility.png', title: 'ISO 9001:2015 Quality Certification', award: 'Quality Assurance' },
  { src: '/images/category_power_tools.png', title: 'ISO 45001 Health & Safety', award: 'Workplace Safety' },
  { src: '/images/about_trusted_partner.png', title: 'Environmental Excellence Award', award: 'Sustainability' },
  { src: '/images/category_straps.png', title: 'Industry Partnership Recognition', award: 'Partnership' },
];

const WORKSPACE = [
  { src: '/images/category_facility.png', title: 'State-of-the-Art Warehouse Facility', section: 'Storage & Logistics' },
  { src: '/images/category_power_tools.png', title: 'Advanced Testing Laboratory', section: 'Quality Control' },
  { src: '/images/about_trusted_partner.png', title: 'Modern Packaging Department', section: 'Operations' },
  { src: '/images/category_tapes.png', title: 'Organized Inventory Management', section: 'Warehouse' },
];

const TEAM_MOMENTS = [
  { src: '/images/category_nailing.png', title: 'Team Training Session 2026', moment: 'Professional Development' },
  { src: '/images/category_facility.png', title: 'Annual Team Building Event', moment: 'Team Culture' },
  { src: '/images/category_straps.png', title: 'Safety Compliance Workshop', moment: 'Training' },
  { src: '/images/category_power_tools.png', title: 'Customer Appreciation Meet', moment: 'Community' },
  { src: '/images/high_temp_tape.png', title: 'Product Innovation Showcase', moment: 'Innovation' },
  { src: '/images/about_trusted_partner.png', title: 'Environmental Cleanup Drive', moment: 'CSR Initiative' },
];

const MILESTONES = [
  { year: '2001', event: 'SBECO Founded', desc: 'Started with a mission to revolutionize industrial packaging solutions' },
  { year: '2008', event: 'ISO 9001 Certified', desc: 'Achieved international quality management certification' },
  { year: '2015', event: 'Product Range Expanded', desc: 'Introduced 200+ new products across 20+ categories' },
  { year: '2020', event: 'Digital Transformation', desc: 'Launched advanced e-commerce and inventory systems' },
  { year: '2026', event: 'Industry Leader Status', desc: 'Recognized as trusted partner by 1000+ businesses' },
];

const PhotoSection = ({ label, items, children }) => (
  <section className="px-8 md:px-12 py-14">
    <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3 mb-8 pb-3.5 border-b-2 border-black">
      {label} <span className="text-[11px] text-gray-400 font-light">{items.length} photos</span>
    </div>
    {children}
  </section>
);

export default function Photos() {
  return (
    <>
      <Hero 
        label="Photos · Super Bright Labs" 
        title={<>Our Visual<br/>Journey</>}
        subtitle="Explore our state-of-the-art facilities, certified processes, skilled team, and premium industrial products in action. A comprehensive visual story of excellence and innovation."
      />

      {/* Products Showcase */}
      <PhotoSection label="Products Showcase" items={PRODUCTS_PHOTOS}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS_PHOTOS.map((photo, i) => (
            <div key={i} className="group relative border border-gray-200 bg-white overflow-hidden cursor-pointer hover:border-black transition-all duration-300 animate-fade-up hover:shadow-[0_12px_32px_rgba(0,0,0,.08)]" style={{ animationDelay: `${i * .05}s` }}>
              <div className="h-[260px] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative p-6 flex items-center justify-center">
                <img src={photo.src} alt={photo.title} loading="lazy" className="max-w-[75%] max-h-[75%] object-contain group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300" />
              </div>
              <div className="p-5 border-t border-gray-100">
                <h3 className="text-[13px] font-bold uppercase tracking-[.04em] text-black mb-2 group-hover:text-accent transition-colors">{photo.title}</h3>
                <span className="inline-block text-[9px] bg-accent/10 text-accent px-3 py-1 tracking-[.08em] uppercase font-semibold">{photo.category}</span>
              </div>
            </div>
          ))}
        </div>
      </PhotoSection>

      {/* Certificates & Awards */}
      <PhotoSection label="Certifications & Awards" items={CERTIFICATES}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATES.map((cert, i) => (
            <div key={i} className="group border border-gray-200 bg-white overflow-hidden animate-fade-up hover:border-accent transition-all duration-300" style={{ animationDelay: `${i * .05}s` }}>
              <div className="h-[200px] bg-gray-100 overflow-hidden flex items-center justify-center relative p-4">
                <img src={cert.src} alt={cert.title} loading="lazy" className="max-w-[70%] max-h-[70%] object-contain group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-3 right-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-lg">★</div>
              </div>
              <div className="p-5 text-center border-t border-gray-100">
                <div className="text-[11px] font-bold uppercase tracking-[.08em] text-black mb-1">{cert.title}</div>
                <div className="text-[9px] text-gray-400 tracking-[.06em] uppercase">{cert.award}</div>
              </div>
            </div>
          ))}
        </div>
      </PhotoSection>

      {/* Workspace & Facilities */}
      <section className="px-8 md:px-12 py-14 bg-gradient-to-b from-white to-gray-50">
        <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3 mb-8 pb-3.5 border-b-2 border-black">
          Workspace & Facilities <span className="text-[11px] text-gray-400 font-light">{WORKSPACE.length} locations</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WORKSPACE.map((space, i) => (
            <div key={i} className="group border border-gray-200 bg-white overflow-hidden animate-fade-up hover:border-black transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,.08)]" style={{ animationDelay: `${i * .06}s` }}>
              <div className="h-[320px] bg-gray-100 overflow-hidden relative flex items-center justify-center p-6">
                <img src={space.src} alt={space.title} loading="lazy" className="max-w-[80%] max-h-[80%] object-contain group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 border-t border-gray-100">
                <h3 className="text-[14px] font-bold uppercase tracking-[.04em] text-black mb-2 group-hover:text-accent transition-colors">{space.title}</h3>
                <p className="text-[12px] text-gray-600 leading-relaxed mb-3">State-of-the-art facility ensuring optimal storage, quality control, and operational efficiency.</p>
                <span className="inline-block text-[9px] bg-gray-100 text-gray-600 px-3 py-1.5 tracking-[.08em] uppercase font-semibold group-hover:bg-accent group-hover:text-white transition-all">{space.section}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Moments */}
      <PhotoSection label="Team Moments & Culture" items={TEAM_MOMENTS}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MOMENTS.map((moment, i) => (
            <div key={i} className="group relative border border-gray-200 bg-white overflow-hidden cursor-pointer hover:border-black transition-all duration-300 animate-fade-up hover:shadow-lg" style={{ animationDelay: `${i * .04}s` }}>
              <div className="h-[240px] bg-gray-100 overflow-hidden relative p-5 flex items-center justify-center">
                <img src={moment.src} alt={moment.title} loading="lazy" className="max-w-[75%] max-h-[75%] object-contain group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1.5 text-[8px] tracking-[.1em] uppercase font-bold">Featured</div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </div>
              <div className="p-5 border-t border-gray-100">
                <h3 className="text-[12px] font-bold uppercase tracking-[.04em] text-black mb-2 leading-tight">{moment.title}</h3>
                <span className="inline-block text-[8px] bg-gray-100 text-gray-600 px-2.5 py-1 tracking-[.08em] uppercase font-semibold group-hover:bg-black group-hover:text-white transition-all">{moment.moment}</span>
              </div>
            </div>
          ))}
        </div>
      </PhotoSection>

      {/* Timeline/Milestones */}
      <section className="px-8 md:px-12 py-14">
        <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3 mb-8 pb-3.5 border-b-2 border-black">
          Our Journey <span className="text-[11px] text-gray-400 font-light">{MILESTONES.length} milestones</span>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent to-gray-200 md:translate-x-[-1px]" />

          {/* Timeline items */}
          <div className="space-y-8 md:space-y-10">
            {MILESTONES.map((m, i) => (
              <div key={i} className={`flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : ''} md:px-12`}>
                  <div className="inline-block border border-gray-200 bg-white px-6 py-5 hover:border-accent transition-colors duration-300">
                    <div className="text-[24px] font-extrabold text-accent tracking-tight">{m.year}</div>
                    <div className="text-[13px] font-bold uppercase tracking-[.06em] text-black mt-1 mb-2">{m.event}</div>
                    <div className="text-[12px] text-gray-600 leading-relaxed">{m.desc}</div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-5 h-5 bg-accent border-4 border-white rounded-full shadow-md relative z-10" />
                </div>

                <div className="flex-1 hidden md:block md:px-12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="px-8 md:px-12 py-14 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: '40+', label: 'Years of Excellence' },
            { num: '200+', label: 'Products Catalogued' },
            { num: '1000+', label: 'Satisfied Clients' },
            { num: '20+', label: 'Expert Team Members' },
          ].map((stat, i) => (
            <div key={i} className="animate-fade-up" style={{ animationDelay: `${i * .1}s` }}>
              <div className="text-[36px] md:text-[48px] font-extrabold text-accent tracking-tight">{stat.num}</div>
              <div className="text-[11px] text-gray-300 tracking-[.08em] uppercase mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
