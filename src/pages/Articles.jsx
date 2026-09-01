import Hero from '../components/Hero';

const ARTICLES = [
  { date: 'May 2026', badge: 'Guide', title: 'Choosing the Right Industrial Tape for Your Application', desc: 'A comprehensive guide to selecting between double-sided, masking, gaffer, and specialty tapes based on surface type, temperature, and load requirements.', tags: ['Tapes', 'Guide'] },
  { date: 'April 2026', badge: 'Tips', title: 'Hot Air Gun Safety & Maintenance Guide', desc: 'Essential maintenance and safety practices for professional heat guns and hot air tools — from temperature control to nozzle care.', tags: ['Hot Air Guns', 'Maintenance'] },
  { date: 'March 2026', badge: 'Industry', title: 'Sustainable Packaging Solutions for Modern Warehouses', desc: 'How recyclable edge protectors, biodegradable stretch films, and eco-friendly foam inserts are reshaping the packaging industry.', tags: ['Packaging', 'Sustainability'] },
  { date: 'February 2026', badge: 'Technical', title: 'Understanding Adhesive Strength Ratings & Standards', desc: 'Breaking down peel strength, shear resistance, and temperature ratings — what the numbers on your tape specifications actually mean.', tags: ['Technical', 'Standards'] },
];

export default function Articles() {
  return (
    <>
      <Hero label="Resources · Super Bright Labs" title={<>Articles &<br/>Insights</>}
        subtitle="Industry knowledge, product guides, and expert tips from our team of packaging and tools specialists." />

      <section className="px-8 md:px-12 py-14">
        <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3 mb-7 pb-3.5 border-b-2 border-black">
          Latest Articles <span className="text-[11px] text-gray-400 font-light">{ARTICLES.length} articles</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ARTICLES.map((a, i) => (
            <div key={i} className="border border-gray-200 bg-white overflow-hidden hover:border-black hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,.06)] transition-all animate-fade-up" style={{ animationDelay: `${i * .06}s` }}>
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-gray-100">
                <span className="text-[10px] font-bold tracking-[.1em] uppercase text-gray-400">{a.date}</span>
                <span className="text-[9px] bg-accent text-white px-2.5 py-0.5 tracking-[.1em] uppercase font-bold">{a.badge}</span>
              </div>
              <div className="p-6">
                <h3 className="text-[16px] font-bold uppercase tracking-[.04em] mb-2.5 leading-snug">{a.title}</h3>
                <p className="text-[13px] text-gray-600 leading-relaxed">{a.desc}</p>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {a.tags.map(t => (
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
