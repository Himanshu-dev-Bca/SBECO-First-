import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const TEAM_MEMBERS = [
  { id: 1, name: 'Arjun Mehta', role: 'Managing Director', department: 'Leadership', initials: 'AM', color: '#e60023' },
  { id: 2, name: 'Priya Sharma', role: 'Head of Sales', department: 'Sales', initials: 'PS', color: '#2563eb' },
  { id: 3, name: 'Vikram Patel', role: 'Operations Manager', department: 'Operations', initials: 'VP', color: '#059669' },
  { id: 4, name: 'Sneha Rao', role: 'Marketing Lead', department: 'Marketing', initials: 'SR', color: '#7c3aed' },
  { id: 5, name: 'Rahul Desai', role: 'Senior Sales Executive', department: 'Sales', initials: 'RD', color: '#d97706' },
  { id: 6, name: 'Anita Kulkarni', role: 'Accounts Manager', department: 'Finance', initials: 'AK', color: '#dc2626' },
  { id: 7, name: 'Suresh Nair', role: 'Warehouse Supervisor', department: 'Operations', initials: 'SN', color: '#0891b2' },
  { id: 8, name: 'Kavita Joshi', role: 'Customer Relations', department: 'Sales', initials: 'KJ', color: '#be185d' },
  { id: 9, name: 'Deepak Gupta', role: 'Logistics Coordinator', department: 'Operations', initials: 'DG', color: '#4f46e5' },
  { id: 10, name: 'Meera Iyer', role: 'Product Specialist', department: 'Sales', initials: 'MI', color: '#0d9488' },
  { id: 11, name: 'Anil Bhatt', role: 'Technical Advisor', department: 'Engineering', initials: 'AB', color: '#9333ea' },
  { id: 12, name: 'Pooja Verma', role: 'HR Manager', department: 'HR', initials: 'PV', color: '#e11d48' },
  { id: 13, name: 'Manish Tiwari', role: 'Field Sales Executive', department: 'Sales', initials: 'MT', color: '#ea580c' },
  { id: 14, name: 'Ritu Agarwal', role: 'Quality Assurance', department: 'Engineering', initials: 'RA', color: '#0284c7' },
  { id: 15, name: 'Sanjay Kapoor', role: 'Dispatch Manager', department: 'Operations', initials: 'SK', color: '#16a34a' },
];

const DEPARTMENTS = ['All', ...new Set(TEAM_MEMBERS.map(m => m.department))];

const SORT_OPTIONS = [
  { value: 'default', label: 'Default' },
  { value: 'name-asc', label: 'Name A–Z' },
  { value: 'name-desc', label: 'Name Z–A' },
  { value: 'department', label: 'Department' },
  { value: 'role', label: 'Role' },
];

export default function OurTeam() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('default');

  const results = useMemo(() => {
    const q = search.toLowerCase();
    let filtered = TEAM_MEMBERS.filter(m => {
      const matchDept = filter === 'All' || m.department === filter;
      const matchQ = !q || m.name.toLowerCase().includes(q) || m.role.toLowerCase().includes(q) || m.department.toLowerCase().includes(q);
      return matchDept && matchQ;
    });
    const sorted = [...filtered];
    switch (sort) {
      case 'name-asc': sorted.sort((a, b) => a.name.localeCompare(b.name)); break;
      case 'name-desc': sorted.sort((a, b) => b.name.localeCompare(a.name)); break;
      case 'department': sorted.sort((a, b) => a.department.localeCompare(b.department) || a.name.localeCompare(b.name)); break;
      case 'role': sorted.sort((a, b) => a.role.localeCompare(b.role)); break;
    }
    return sorted;
  }, [search, filter, sort]);

  return (
    <>
      <Hero label="About · Our Team"
        title={<>Meet The People<br />Behind SBECO</>}
        subtitle="Our dedicated team of professionals brings decades of combined experience in industrial packaging, tools, and customer service." />

      {/* Toolbar */}
      <div className="flex items-center justify-between px-8 md:px-12 py-4 border-b border-gray-200 bg-white sticky top-20 z-40 gap-4 flex-wrap">
        <div className="flex items-center gap-2 border border-gray-200 px-3.5 py-2 bg-white min-w-[280px]">
          <span className="text-gray-400 text-sm">⊘</span>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search team by name, role, or department..."
            className="border-none outline-none text-[13px] bg-transparent w-full" />
        </div>
        <div className="flex flex-wrap">
          {DEPARTMENTS.map(d => (
            <button key={d} onClick={() => setFilter(d)}
              className={`text-[11px] tracking-[.08em] uppercase px-4.5 py-2 border border-r-0 last:border-r cursor-pointer font-semibold transition-all ${
                filter === d ? 'bg-accent text-white border-accent' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-100'
              }`}>
              {d}
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
        <div className="text-[11px] text-gray-400 tracking-[.06em]">{results.length} members found</div>
      </div>

      {/* Breadcrumb */}
      <div className="px-8 md:px-12 pt-6 pb-2">
        <div className="flex items-center gap-2 text-[11px] text-gray-400 tracking-[.06em] uppercase">
          <Link to="/about" className="hover:text-accent transition-colors no-underline text-gray-400">About</Link>
          <span>→</span>
          <span className="text-black font-semibold">Our Team</span>
        </div>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-8 md:px-12 py-10">
        {results.map((m, i) => (
          <div key={m.id}
            className="group flex flex-col items-center text-center border border-gray-200 bg-white p-8 hover:border-black hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,.08)] transition-all animate-fade-up"
            style={{ animationDelay: `${Math.min(i, 14) * .04}s` }}>
            {/* Circular Avatar */}
            <div className="w-[90px] h-[90px] rounded-full flex items-center justify-center mb-5 text-white text-[22px] font-bold tracking-wide shadow-[0_4px_20px_rgba(0,0,0,.12)] group-hover:scale-110 transition-transform duration-300"
              style={{ background: `linear-gradient(135deg, ${m.color}, ${m.color}dd)` }}>
              {m.initials}
            </div>
            <div className="text-[10px] text-gray-400 tracking-[.1em] uppercase mb-1 font-semibold">{m.department}</div>
            <div className="text-[15px] font-bold uppercase tracking-[.02em] mb-1">{m.name}</div>
            <p className="text-[12px] text-gray-600 leading-relaxed">{m.role}</p>
          </div>
        ))}
      </div>

      {results.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <div className="text-4xl mb-4">⊘</div>
          <div className="text-[13px] tracking-[.06em] uppercase">No team members match your search</div>
        </div>
      )}
    </>
  );
}
