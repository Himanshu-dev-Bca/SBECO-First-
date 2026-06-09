import Hero from '../components/Hero';

const PRODUCTS_PHOTOS = [
  { src: '/images/category_power_tools.png', title: 'Professional Power Drills', category: 'Equipment' },
  { src: '/images/category_tapes.png', title: 'Premium Adhesive Tapes', category: 'Products' },
  { src: '/images/category_straps.png', title: 'Industrial Strapping Systems', category: 'Products' },
  { src: '/images/high_temp_tape.png', title: 'Advanced Heat-Resistant Solutions', category: 'Specialty' },
  { src: '/images/double_sided_tape.png', title: 'Precision Tape Dispensing Tools', category: 'Equipment' },
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
        label="Gallery · Super Bright Labs" 
        title={<>Visual<br/>Showcase</>}
        subtitle="Explore our facilities, certified processes, and premium industrial products in a focused, image-first gallery."
      />

      {/* Products Showcase */}
      <PhotoSection label="Products Showcase" items={PRODUCTS_PHOTOS}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS_PHOTOS.map((photo, i) => (
            <div key={i} className="group relative border border-gray-200 bg-white overflow-hidden cursor-pointer hover:border-black transition-all duration-300 animate-fade-up hover:shadow-[0_12px_32px_rgba(0,0,0,.08)]" style={{ animationDelay: `${i * .05}s` }}>
              <div className="h-[320px] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative flex items-center justify-center">
                <img src={photo.src} alt={photo.title} loading="lazy" className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500 ease-out" />
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
              <div className="h-[240px] bg-gray-100 overflow-hidden flex items-center justify-center relative">
                <img src={cert.src} alt={cert.title} loading="lazy" className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500 ease-out" />
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
              <div className="h-[380px] bg-gray-100 overflow-hidden relative flex items-center justify-center">
                <img src={space.src} alt={space.title} loading="lazy" className="w-full h-full object-contain p-2 group-hover:scale-[1.08] transition-transform duration-500 ease-out" />
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
    </>
  );
}
