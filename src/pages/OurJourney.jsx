import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const MILESTONES = [
  { id: 1, year: '2001', title: 'Company Founded', category: 'Foundation', desc: 'Super Bright Engineering Company (SBECO) was established as a small trading house specialising in industrial adhesive tapes, setting out with a mission to deliver quality products to Indian industries.' },
  { id: 2, year: '2003', title: 'First Major Client', category: 'Growth', desc: 'Secured our first large-scale manufacturing client, supplying industrial-grade masking and packaging tapes for their production line.' },
  { id: 3, year: '2005', title: 'Warehouse Expansion', category: 'Infrastructure', desc: 'Expanded our warehousing capacity to meet growing demand, enabling faster dispatch and wider inventory across tape categories.' },
  { id: 4, year: '2007', title: 'Packaging Division Launched', category: 'Expansion', desc: 'Entered the protective packaging space with bubble wraps, stretch films, foam sheets, and edge protectors — becoming a one-stop packaging supplier.' },
  { id: 5, year: '2008', title: 'Power Tools Partnership', category: 'Expansion', desc: 'Formed partnerships with leading power tool brands like Bosch Professional and DeWalt, adding drills, grinders, and jigsaws to our catalogue.' },
  { id: 6, year: '2010', title: 'Team Expansion', category: 'Growth', desc: 'Grew the team to 15+ members across sales, operations, and logistics to serve an expanding base of B2B customers nationwide.' },
  { id: 7, year: '2012', title: 'Quality Certification', category: 'Milestone', desc: 'Achieved ISO quality management certification, reinforcing our commitment to consistent product standards and customer satisfaction.' },
  { id: 8, year: '2014', title: 'Regional Presence', category: 'Growth', desc: 'Established strong distribution networks in Maharashtra, Gujarat, and Karnataka — expanding reach beyond our home base.' },
  { id: 9, year: '2015', title: 'Pan-India Reach', category: 'Milestone', desc: 'Built relationships with clients across India in manufacturing, logistics, construction, and electronics sectors — serving hundreds of businesses.' },
  { id: 10, year: '2017', title: 'Custom Solutions Unit', category: 'Innovation', desc: 'Launched a dedicated custom solutions unit to offer tailored foam inserts, specialty tapes, and bespoke packaging for unique client requirements.' },
  { id: 11, year: '2019', title: '500+ Product SKUs', category: 'Milestone', desc: 'Catalogue crossed 500 unique product SKUs across adhesive tapes, power tools, and protective packaging categories.' },
  { id: 12, year: '2021', title: '20th Anniversary', category: 'Milestone', desc: 'Celebrated 20 years of trusted service with a renewed focus on digital transformation and customer experience improvements.' },
  { id: 13, year: '2023', title: 'Sustainability Initiative', category: 'Innovation', desc: 'Introduced eco-friendly packaging alternatives and started evaluating sustainable material sources for future product lines.' },
  { id: 14, year: '2025', title: 'Tech Modernisation', category: 'Innovation', desc: 'Modernised internal systems with digital inventory management, CRM integration, and streamlined order processing workflows.' },
  { id: 15, year: '2026', title: 'Digital Catalogue Launch', category: 'Milestone', desc: 'Launched the full online product catalogue — making it easier for customers to browse, compare, and enquire about products digitally.' },
];

const CATEGORIES = ['All', ...new Set(MILESTONES.map(m => m.category))];

const SORT_OPTIONS = [
  { value: 'default', label: 'Default (Oldest First)' },
  { value: 'newest', label: 'Newest First' },
  { value: 'title-asc', label: 'Title A–Z' },
  { value: 'title-desc', label: 'Title Z–A' },
  { value: 'category', label: 'Category' },
];

export default function OurJourney() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('default');

  const results = useMemo(() => {
    const q = search.toLowerCase();
    let filtered = MILESTONES.filter(m => {
      const matchCat = filter === 'All' || m.category === filter;
      const matchQ = !q || m.title.toLowerCase().includes(q) || m.year.includes(q) || m.desc.toLowerCase().includes(q) || m.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
    const sorted = [...filtered];
    switch (sort) {
      case 'newest': sorted.sort((a, b) => parseInt(b.year) - parseInt(a.year)); break;
      case 'title-asc': sorted.sort((a, b) => a.title.localeCompare(b.title)); break;
      case 'title-desc': sorted.sort((a, b) => b.title.localeCompare(a.title)); break;
      case 'category': sorted.sort((a, b) => a.category.localeCompare(b.category) || parseInt(a.year) - parseInt(b.year)); break;
    }
    return sorted;
  }, [search, filter, sort]);

  return (
    <>
      <Hero label="About · Our Journey"
        title={<>25 Years Of<br />Trust &amp; Growth</>}
        subtitle="From a small trading house to a pan-India industrial supply partner — explore the milestones that shaped Super Bright Labs." />

      {/* Toolbar */}
      <div className="flex items-center justify-between px-8 md:px-12 py-4 border-b border-gray-200 bg-white sticky top-20 z-40 gap-4 flex-wrap">
        <div className="flex items-center gap-2 border border-gray-200 px-3.5 py-2 bg-white min-w-[280px]">
          <span className="text-gray-400 text-sm">⊘</span>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search milestones by year, title, or keyword..."
            className="border-none outline-none text-[13px] bg-transparent w-full" />
        </div>
        <div className="flex flex-wrap">
          {CATEGORIES.map(c => (
            <button key={c} onClick={() => setFilter(c)}
              className={`text-[11px] tracking-[.08em] uppercase px-4.5 py-2 border border-r-0 last:border-r cursor-pointer font-semibold transition-all ${
                filter === c ? 'bg-accent text-white border-accent' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-100'
              }`}>
              {c}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-[10px] tracking-[.1em] uppercase text-gray-400 font-semibold whitespace-nowrap">Sort by</span>
          <select value={sort} onChange={e => setSort(e.target.value)}
            className="text-[11px] tracking-[.06em] uppercase font-semibold px-3.5 py-2 pr-8 border border-gray-200 bg-white text-gray-600 cursor-pointer outline-none appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%226%22%3E%3Cpath%20d%3D%22M1%201l4%204%204-4%22%20stroke%3D%22%236b7280%22%20fill%3D%22none%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_12px_center] hover:border-black focus:border-accent transition-colors">
            {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
        <div className="text-[11px] text-gray-400 tracking-[.06em]">{results.length} milestones found</div>
      </div>

      {/* Breadcrumb */}
      <div className="px-8 md:px-12 pt-6 pb-2">
        <div className="flex items-center gap-2 text-[11px] text-gray-400 tracking-[.06em] uppercase">
          <Link to="/about" className="hover:text-accent transition-colors no-underline text-gray-400">About</Link>
          <span>→</span>
          <span className="text-black font-semibold">Our Journey</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="px-8 md:px-12 py-10">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[54px] top-0 bottom-0 w-[2px] bg-gray-200 hidden md:block" />

          <div className="flex flex-col gap-6">
            {results.map((m, i) => (
              <div key={m.id}
                className="group flex gap-6 md:gap-8 border border-gray-200 bg-white p-7 md:p-8 hover:border-black hover:shadow-[0_8px_24px_rgba(0,0,0,.06)] transition-all animate-fade-up relative"
                style={{ animationDelay: `${Math.min(i, 14) * .05}s` }}>
                {/* Year badge */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="text-[32px] md:text-[36px] font-extrabold text-accent tracking-tight leading-none">{m.year}</div>
                  <div className="mt-2 text-[9px] tracking-[.1em] uppercase text-gray-400 font-semibold border border-gray-200 px-2.5 py-1 bg-gray-100 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all">
                    {m.category}
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-[16px] font-bold uppercase tracking-[.04em] mb-2 group-hover:text-accent transition-colors">{m.title}</h4>
                  <p className="text-[13px] text-gray-600 leading-relaxed">{m.desc}</p>
                </div>
                {/* Decorative arrow */}
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

      {results.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <div className="text-4xl mb-4">⊘</div>
          <div className="text-[13px] tracking-[.06em] uppercase">No milestones match your search</div>
        </div>
      )}
    </>
  );
}
    