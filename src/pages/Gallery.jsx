import Hero from '../components/Hero';

const GALLERY_IMAGES = [
  { src: '/images/category_power_tools.png', title: 'Power Tools Collection', tag: 'Products' },
  { src: '/images/category_tapes.png', title: 'Industrial Adhesive Solutions', tag: 'Products' },
  { src: '/images/category_straps.png', title: 'Packaging & Strapping', tag: 'Warehouse' },
  { src: '/images/category_nailing.png', title: 'Heavy Duty Fastening', tag: 'Construction' },
  { src: '/images/category_facility.png', title: 'Facility Management Gear', tag: 'Safety' },
  { src: '/images/high_temp_tape.png', title: 'ThermoMask HT-260', tag: 'Specialty' },
];

export default function Gallery() {
  return (
    <>
      <Hero label="Gallery · Super Bright Labs" title={<>Visual<br/>Showcase</>}
        subtitle="A visual showcase of our premium products, facilities, and real-world industrial applications." />

      <section className="px-8 md:px-12 py-14">
        <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3 mb-7 pb-3.5 border-b-2 border-black">
          Image Gallery <span className="text-[11px] text-gray-400 font-light">{GALLERY_IMAGES.length} items</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, i) => (
            <div key={i} className="group relative border border-gray-200 bg-white overflow-hidden animate-fade-up cursor-pointer hover:border-black transition-colors" style={{ animationDelay: `${i * .06}s` }}>
              <div className="h-[280px] bg-gray-100 overflow-hidden relative p-4 flex items-center justify-center">
                <img src={img.src} alt={img.title} loading="lazy" className="max-w-[80%] max-h-[80%] object-contain group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div className="p-5 border-t border-gray-100 flex items-center justify-between">
                <h3 className="text-[13px] font-bold uppercase tracking-[.04em] text-black">{img.title}</h3>
                <span className="text-[9px] bg-gray-100 text-gray-600 px-2 py-1 tracking-[.08em] uppercase font-semibold">{img.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
