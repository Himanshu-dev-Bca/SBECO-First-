import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const UPDATES = [
  { date: 'May 2026', badge: 'New', title: 'Digital Product Catalogue Launch', desc: 'Our complete product range is now available online with detailed specifications, product images, and consumables information. Browse and find the right products faster than ever.', tags: ['Website', 'Products'] },
  { date: 'April 2026', badge: 'Enquiry', title: 'New Enquiry System Launched', desc: "We've streamlined our product enquiry process. Browse our catalogue, find the products you need, and submit your requirements directly through our contact form for a quick response.", tags: ['Enquiry', 'Service'] },
  { date: 'March 2026', badge: 'Products', title: 'Bosch Professional Range Added', desc: 'We are now authorised stockists for Bosch Professional power tools including the GSB 18V-85 C, GWS 18V-10 SC, and GST 18V-Li B with full warranty support.', tags: ['Power Tools', 'Bosch'] },
  { date: 'January 2026', badge: 'Company', title: 'Protective Packaging Expansion', desc: 'New additions to our protective packaging line including PalletPro stretch film, CubeForm custom foam inserts, and CornerShield edge protectors for comprehensive transit protection.', tags: ['Packaging', 'New Range'] },
];

export default function Updates() {
  return (
    <>
      <Hero label="Updates · Super Bright Labs" title={<>Latest News<br/>&amp; Updates</>}
        subtitle="Stay informed about new product launches, catalogue additions, and company announcements from Super Bright Labs." />

      <section className="px-8 md:px-12 py-14">
        {/* Featured */}
        <div className="border border-gray-200 bg-white grid grid-cols-1 md:grid-cols-2 overflow-hidden mb-8 hover:border-black transition-colors animate-fade-up">
          <div className="bg-gray-100 flex items-center justify-center min-h-[280px] border-b md:border-b-0 md:border-r border-gray-200 relative overflow-hidden">
            <img src="/images/high_temp_tape.png" alt="ThermoMask HT-260" className="max-w-[70%] max-h-[70%] object-contain" />
            <span className="absolute top-4 left-4 text-[9px] bg-accent text-white px-3 py-1.5 tracking-[.1em] uppercase font-bold">Featured</span>
          </div>
          <div className="p-10">
            <span className="block text-[10px] font-bold tracking-[.1em] uppercase text-gray-400 mb-3">May 2026</span>
            <h2 className="text-2xl font-extrabold uppercase tracking-[.02em] leading-tight mb-3.5">New Product Launch:<br/>Industrial Adhesive Range</h2>
            <p className="text-[14px] text-gray-600 leading-relaxed mb-5">
              We've expanded our adhesive tape lineup with industrial-grade options featuring stronger grip, enhanced durability, and temperature resistance up to 260°C. Including the new ThermoMask HT-260 and AlumiFoil AF-200.
            </p>
            <Link to="/products" className="text-[11px] tracking-[.08em] uppercase text-accent no-underline font-bold">View Products →</Link>
          </div>
        </div>

        {/* Grid */}
        <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3 mb-7 pb-3.5 border-b-2 border-black">
          All Updates <span className="text-[11px] text-gray-400 font-light">4 updates</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {UPDATES.map((u, i) => (
            <div key={i} className="border border-gray-200 bg-white overflow-hidden hover:border-black hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,.06)] transition-all animate-fade-up" style={{ animationDelay: `${i * .06}s` }}>
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-gray-100">
                <span className="text-[10px] font-bold tracking-[.1em] uppercase text-gray-400">{u.date}</span>
                <span className="text-[9px] bg-accent text-white px-2.5 py-0.5 tracking-[.1em] uppercase font-bold">{u.badge}</span>
              </div>
              <div className="p-6">
                <h3 className="text-[16px] font-bold uppercase tracking-[.04em] mb-2.5 leading-snug">{u.title}</h3>
                <p className="text-[13px] text-gray-600 leading-relaxed">{u.desc}</p>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {u.tags.map(t => (
                    <span key={t} className="text-[9px] tracking-[.08em] uppercase px-2.5 py-1 border border-gray-200 text-gray-600 font-semibold">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
