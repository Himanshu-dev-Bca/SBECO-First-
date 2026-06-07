import Hero from '../components/Hero';

const TEAM_STRUCTURE = {
  'Leadership': [
    { id: 1, name: 'Kamal Singh Bhutoria', role: 'Sole Proprietor', initials: 'KB', color: '#e60023' },
    { id: 2, name: 'Rohit Bhutoria', role: 'General Manager', initials: 'RB', color: '#d97706' },
  ],
  'Sales': [
    { id: 3, name: 'Arpitha', role: 'Sales Executive', initials: 'AR', color: '#2563eb' },
    { id: 4, name: 'Tarun', role: 'Sales Representative', initials: 'TA', color: '#7c3aed' },
    { id: 5, name: 'Devanand', role: 'Senior Sales Associate', initials: 'DE', color: '#059669' },
  ],
  'Operations': [
    { id: 6, name: 'Naresh', role: 'Operations Supervisor', initials: 'NA', color: '#0891b2' },
    { id: 7, name: 'Padam Kothari', role: 'Warehouse Manager', initials: 'PK', color: '#9333ea' },
    { id: 8, name: 'Kantharaj', role: 'Quality Assurance Lead', initials: 'KA', color: '#dc2626' },
    { id: 9, name: 'Gopal', role: 'Operations Coordinator', initials: 'GO', color: '#0284c7' },
  ],
  'Banking and Finance': [
    { id: 10, name: 'Lalitha', role: 'Finance Manager', initials: 'LA', color: '#be185d' },
    { id: 11, name: 'Govindraju', role: 'Accounts Executive', initials: 'GV', color: '#16a34a' },
  ],
  'Logistics': [
    { id: 12, name: 'Thyagraj', role: 'Logistics Manager', initials: 'TH', color: '#ea580c' },
    { id: 13, name: 'Vijay', role: 'Dispatch Coordinator', initials: 'VI', color: '#4f46e5' },
    { id: 14, name: 'Bhaskar', role: 'Delivery Executive', initials: 'BH', color: '#0d9488' },
  ],
};

export default function OurTeam() {
  const totalMembers = Object.values(TEAM_STRUCTURE).reduce((sum, team) => sum + team.length, 0);

  return (
    <>
      <Hero label="About · Our Team"
        title={<>Meet The Team<br/>Behind SBECO</>}
        subtitle="Our dedicated professionals bring expertise and commitment to delivering excellence in industrial packaging and tools." />

      {/* Section Counter */}
      <div className="px-8 md:px-12 py-6 border-b border-gray-200 bg-white sticky top-20 z-40">
        <div className="flex items-center gap-3">
          <div className="text-[15px] font-semibold tracking-[.15em] uppercase">Team Members</div>
          <span className="text-[11px] text-gray-400 font-light">{totalMembers} people</span>
        </div>
      </div>

      {/* Team Sections */}
      <div className="px-8 md:px-12 py-14 space-y-16">
        {Object.entries(TEAM_STRUCTURE).map(([dept, members], deptIndex) => (
          <div key={dept} className="animate-fade-up" style={{ animationDelay: `${deptIndex * .06}s` }}>
            {/* Department Header */}
            <div className="mb-10 pb-4 border-b-2 border-black">
              <h2 className="text-[20px] font-bold uppercase tracking-[.04em] text-black mb-1">{dept}</h2>
              <p className="text-[11px] text-gray-500 tracking-[.08em] uppercase">{members.length} members</p>
            </div>

            {/* Team Grid for Department */}
            <div className={`grid gap-6 ${
              dept === 'Leadership' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2' :
              dept === 'Banking and Finance' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2' :
              'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
            }`}>
              {members.map((m, i) => (
                <div key={m.id}
                  className="group flex flex-col items-center text-center border border-gray-200 bg-white p-8 hover:border-black hover:shadow-[0_12px_32px_rgba(0,0,0,.08)] hover:-translate-y-1 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${(deptIndex * 5 + i) * .03}s` }}>
                  
                  {/* Circular Avatar */}
                  <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center mb-5 text-white text-[20px] font-bold tracking-wide shadow-[0_4px_16px_rgba(0,0,0,.12)] group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `linear-gradient(135deg, ${m.color}, ${m.color}dd)` }}>
                    {m.initials}
                  </div>

                  {/* Name */}
                  <div className="text-[14px] font-bold uppercase tracking-[.02em] mb-1 group-hover:text-accent transition-colors">{m.name}</div>
                  
                  {/* Role */}
                  <p className="text-[12px] text-gray-600 leading-relaxed">{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <section className="px-8 md:px-12 py-14 bg-gradient-to-r from-gray-50 to-white border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-l-4 border-accent pl-6">
            <div className="text-[24px] font-extrabold text-accent mb-2">{totalMembers}+</div>
            <div className="text-[12px] font-bold uppercase tracking-[.06em] text-black mb-1">Dedicated Professionals</div>
            <p className="text-[12px] text-gray-600 leading-relaxed">Expert team members working across all departments.</p>
          </div>
          <div className="border-l-4 border-accent pl-6">
            <div className="text-[24px] font-extrabold text-accent mb-2">{Object.keys(TEAM_STRUCTURE).length}</div>
            <div className="text-[12px] font-bold uppercase tracking-[.06em] text-black mb-1">Departments</div>
            <p className="text-[12px] text-gray-600 leading-relaxed">Organized teams ensuring operational excellence.</p>
          </div>
          <div className="border-l-4 border-accent pl-6">
            <div className="text-[24px] font-extrabold text-accent mb-2">25+</div>
            <div className="text-[12px] font-bold uppercase tracking-[.06em] text-black mb-1">Years Combined</div>
            <p className="text-[12px] text-gray-600 leading-relaxed">Experience in industrial packaging and tools.</p>
          </div>
        </div>
      </section>
    </>
  );
}
