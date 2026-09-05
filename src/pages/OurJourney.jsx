import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { JOURNEY_RANGES, getMilestonesForRange, getRangePreview } from '../data/journeyTimeline';

export default function OurJourney() {
  return (
    <>
      <Hero
        label="About · Our Journey"
        title={<>40 Years Of<br />Trust &amp; Growth</>}
        subtitle="From a one-man general supply operation to a trusted industrial partner — explore the milestones that shaped Super Bright Engineering Company."
      />

      <div className="px-8 md:px-12 pt-6 pb-2">
        <div className="flex items-center gap-2 text-[11px] text-gray-400 tracking-[.06em] uppercase">
          <Link to="/about" className="hover:text-accent transition-colors no-underline text-gray-400">About</Link>
          <span>→</span>
          <span className="text-black font-semibold">Our Journey</span>
        </div>
      </div>

      <div className="px-8 md:px-12 py-10">
        <div className="relative">
          <div className="absolute left-[54px] top-0 bottom-0 w-[2px] bg-gray-200 hidden md:block" />

          <div className="flex flex-col gap-6">
            {JOURNEY_RANGES.map((range, i) => {
              const preview = getRangePreview(range);
              const count = getMilestonesForRange(range).length;

              return (
                <Link
                  key={range.slug}
                  to={`/about/journey/${range.slug}`}
                  className="group flex gap-6 md:gap-8 border border-gray-200 bg-white p-7 md:p-8 hover:border-black hover:shadow-[0_8px_24px_rgba(0,0,0,.06)] transition-all animate-fade-up relative no-underline text-black"
                  style={{ animationDelay: `${Math.min(i, 14) * .05}s` }}
                >
                  <div className="flex flex-col items-center shrink-0">
                    <div className="text-[22px] md:text-[28px] font-extrabold text-accent tracking-tight leading-none text-center whitespace-nowrap">{range.label}</div>
                    <div className="mt-2 text-[9px] tracking-[.1em] uppercase text-gray-400 font-semibold border border-gray-200 px-2.5 py-1 bg-gray-100 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all">
                      {count} {count === 1 ? 'Milestone' : 'Milestones'}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[16px] font-bold uppercase tracking-[.04em] mb-2 group-hover:text-accent transition-colors">{preview.title}</h4>
                    <p className="text-[13px] text-gray-600 leading-relaxed">{preview.desc}</p>
                  </div>
                  <div className="hidden md:flex items-center">
                    <div className="w-8 h-8 border border-gray-200 flex items-center justify-center text-xs text-gray-300 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all">
                      →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
