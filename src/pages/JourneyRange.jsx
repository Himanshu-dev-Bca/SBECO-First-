import { Link, Navigate, useParams } from 'react-router-dom';
import Hero from '../components/Hero';
import { getMilestonesForRange, getRangeBySlug } from '../data/journeyTimeline';

export default function JourneyRange() {
  const { rangeSlug } = useParams();
  const range = getRangeBySlug(rangeSlug);

  if (!range) {
    return <Navigate to="/about/journey" replace />;
  }

  const milestones = getMilestonesForRange(range);

  return (
    <>
      <Hero
        label="About · Our Journey"
        title={<>{range.label}</>}
        subtitle={`Key milestones from ${range.start} to ${range.end} that shaped Super Bright Engineering Company's growth and industry partnerships.`}
      />

      <div className="px-8 md:px-12 pt-6 pb-2">
        <div className="flex items-center gap-2 text-[11px] text-gray-400 tracking-[.06em] uppercase">
          <Link to="/about" className="hover:text-accent transition-colors no-underline text-gray-400">About</Link>
          <span>→</span>
          <Link to="/about/journey" className="hover:text-accent transition-colors no-underline text-gray-400">Our Journey</Link>
          <span>→</span>
          <span className="text-black font-semibold">{range.label}</span>
        </div>
      </div>

      <div className="px-8 md:px-12 py-10">
        <div className="relative">
          <div className="absolute left-[54px] top-0 bottom-0 w-[2px] bg-gray-200 hidden md:block" />

          <div className="flex flex-col gap-6">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className="group flex gap-6 md:gap-8 border border-gray-200 bg-white p-7 md:p-8 hover:border-black hover:shadow-[0_8px_24px_rgba(0,0,0,.06)] transition-all animate-fade-up relative"
                style={{ animationDelay: `${Math.min(i, 14) * .05}s` }}
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="text-[32px] md:text-[36px] font-extrabold text-accent tracking-tight leading-none">{m.year}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[16px] font-bold uppercase tracking-[.04em] mb-2 group-hover:text-accent transition-colors">{m.title}</h4>
                  <p className="text-[13px] text-gray-600 leading-relaxed">{m.desc}</p>
                </div>
                <div className="hidden md:flex items-center">
                  <div className="w-8 h-8 border border-gray-200 flex items-center justify-center text-xs text-gray-300 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all">
                    →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-8 md:px-12 pb-14">
        <Link
          to="/about/journey"
          className="inline-flex items-center gap-2 text-[11px] tracking-[.08em] uppercase font-semibold text-gray-600 hover:text-accent transition-colors no-underline"
        >
          ← Back to All Periods
        </Link>
      </div>
    </>
  );
}
