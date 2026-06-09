import Hero from '../components/Hero';
import Lightbox from '../components/Lightbox';

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
            <Lightbox key={i} src={img.src} alt={img.title}>
              <div className="group relative border border-gray-200 bg-white overflow-hidden animate-fade-up cursor-zoom-in hover:border-black hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,.08)] transition-all" style={{ animationDelay: `${i * .06}s` }}>
                <div className="h-[320px] bg-gray-100 overflow-hidden relative flex items-center justify-center">
                  <img src={img.src} alt={img.title} loading="lazy" className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500 ease-out" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <div className="p-5 border-t border-gray-100 flex items-center justify-between">
                  <h3 className="text-[13px] font-bold uppercase tracking-[.04em] text-black">{img.title}</h3>
                  <span className="text-[9px] bg-gray-100 text-gray-600 px-2 py-1 tracking-[.08em] uppercase font-semibold">{img.tag}</span>
                </div>
              </div>
            </Lightbox>
          ))}
        </div>
      </section>
    </>
  );
}
