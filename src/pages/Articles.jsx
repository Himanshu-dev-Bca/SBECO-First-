import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { ARTICLES } from '../data/articles';

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
            <Link
              key={a.slug}
              to={`/articles/${a.slug}`}
              className="border border-gray-200 bg-white overflow-hidden hover:border-black hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,.06)] transition-all animate-fade-up no-underline text-inherit block"
              style={{ animationDelay: `${i * .04}s` }}
            >
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
                <div className="mt-5 text-[11px] tracking-[.08em] uppercase font-semibold text-accent">
                  Open article →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
