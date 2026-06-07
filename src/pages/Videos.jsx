import Hero from '../components/Hero';

const VIDEOS = [
  { id: '1', youtubeId: 'tAwpzWalPAg', title: 'Bosch Power Tools Showcase', duration: '3:45', category: 'Product Demo', description: 'Comprehensive overview of professional power tools for industrial applications.' },
  { id: '2', youtubeId: 'VIDEO_ID_2', title: 'Choosing the Right Industrial Tape', duration: '5:20', category: 'Guide', description: 'Expert guide to selecting the perfect adhesive tape for your packaging needs.' },
  { id: '3', youtubeId: 'VIDEO_ID_3', title: 'Proper Pallet Wrapping Techniques', duration: '2:15', category: 'Tutorial', description: 'Step-by-step tutorial on efficient and secure pallet wrapping methods.' },
  { id: '4', youtubeId: 'VIDEO_ID_4', title: 'Facility Safety Equipment Overview', duration: '4:30', category: 'Overview', description: 'Complete walkthrough of safety equipment and best practices at SBECO.' },
  { id: '5', youtubeId: 'VIDEO_ID_5', title: 'Strapping Solutions Explained', duration: '3:10', category: 'Product Demo', description: 'Learn about our complete range of strapping systems and tools.' },
  { id: '6', youtubeId: 'VIDEO_ID_6', title: 'Quality Control Process', duration: '4:05', category: 'Overview', description: 'Inside look at our rigorous quality assurance testing procedures.' },
];

export default function Videos() {
  return (
    <>
      <Hero 
        label="Videos · Super Bright Labs" 
        title={<>Video<br/>Library</>}
        subtitle="Watch our product demonstrations, tutorials, and expert guides to get the most out of your industrial equipment and solutions." 
      />

      <section className="px-8 md:px-12 py-14">
        <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3 mb-8 pb-3.5 border-b-2 border-black">
          Featured Videos <span className="text-[11px] text-gray-400 font-light">{VIDEOS.length} videos</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEOS.map((vid, i) => (
            <div key={vid.id} className="group border border-gray-200 bg-white overflow-hidden hover:border-black hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,.08)] transition-all animate-fade-up" style={{ animationDelay: `${i * .05}s` }}>
              {/* Video Embed Container */}
              <div className="relative w-full h-0 pb-[56.25%] bg-gray-900 overflow-hidden border-b border-gray-200">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${vid.youtubeId}?rel=0`}
                  title={vid.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
                {/* Placeholder overlay if youtubeId is not set */}
                {vid.youtubeId.startsWith('VIDEO_ID_') && (
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center z-10">
                    <div className="text-center">
                      <div className="text-4xl text-gray-400 mb-2">▶</div>
                      <div className="text-xs text-gray-500 font-semibold tracking-wide">VIDEO URL PLACEHOLDER</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold tracking-[.1em] uppercase text-accent bg-accent/10 px-2.5 py-1.5 inline-block">{vid.category}</span>
                  <span className="text-[10px] font-bold text-gray-400 tracking-wider">{vid.duration}</span>
                </div>
                <h3 className="text-[15px] font-bold uppercase tracking-[.02em] text-black leading-snug mb-2 group-hover:text-accent transition-colors">{vid.title}</h3>
                <p className="text-[12px] text-gray-600 leading-relaxed">{vid.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Tips Section */}
      <section className="px-8 md:px-12 py-14 bg-gradient-to-r from-gray-50 to-white border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-3xl mb-3">📹</div>
            <div className="text-[13px] font-bold uppercase tracking-[.06em] mb-2 text-black">Product Demonstrations</div>
            <p className="text-[12px] text-gray-600 leading-relaxed">Watch real-world applications of our industrial equipment and packaging solutions in action.</p>
          </div>
          <div>
            <div className="text-3xl mb-3">🎓</div>
            <div className="text-[13px] font-bold uppercase tracking-[.06em] mb-2 text-black">Expert Tutorials</div>
            <p className="text-[12px] text-gray-600 leading-relaxed">Learn best practices and techniques from our team of certified professionals and specialists.</p>
          </div>
          <div>
            <div className="text-3xl mb-3">📊</div>
            <div className="text-[13px] font-bold uppercase tracking-[.06em] mb-2 text-black">Process Overview</div>
            <p className="text-[12px] text-gray-600 leading-relaxed">Gain insights into our quality assurance, testing, and manufacturing processes at SBECO.</p>
          </div>
        </div>
      </section>
    </>
  );
}
