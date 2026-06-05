import Hero from '../components/Hero';

const VIDEOS = [
  { id: '1', thumb: '/images/category_power_tools.png', title: 'Bosch Power Tools Showcase', duration: '3:45', category: 'Product Demo' },
  { id: '2', thumb: '/images/category_tapes.png', title: 'Choosing the Right Industrial Tape', duration: '5:20', category: 'Guide' },
  { id: '3', thumb: '/images/category_straps.png', title: 'Proper Pallet Wrapping Techniques', duration: '2:15', category: 'Tutorial' },
  { id: '4', thumb: '/images/category_facility.png', title: 'Facility Safety Equipment Overview', duration: '4:30', category: 'Overview' },
];

export default function Videos() {
  return (
    <>
      <Hero label="Videos · Super Bright Labs" title={<>Video<br/>Library</>}
        subtitle="Watch our product demonstrations, tutorials, and expert guides to get the most out of your industrial equipment." />

      <section className="px-8 md:px-12 py-14">
        <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3 mb-7 pb-3.5 border-b-2 border-black">
          Featured Videos <span className="text-[11px] text-gray-400 font-light">{VIDEOS.length} videos</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {VIDEOS.map((vid, i) => (
            <div key={vid.id} className="group border border-gray-200 bg-white overflow-hidden hover:border-black hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,.08)] transition-all animate-fade-up cursor-pointer" style={{ animationDelay: `${i * .08}s` }}>
              <div className="relative h-[320px] bg-gray-100 overflow-hidden flex items-center justify-center border-b border-gray-200 p-8">
                {/* Thumbnail */}
                <img src={vid.thumb} alt={vid.title} loading="lazy" className="max-w-[70%] max-h-[70%] object-contain group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-accent text-white flex items-center justify-center rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
                
                {/* Duration Badge */}
                <span className="absolute bottom-4 right-4 bg-black/80 text-white text-[10px] font-bold px-2 py-1 tracking-wider">
                  {vid.duration}
                </span>
              </div>
              <div className="p-6">
                <span className="block text-[10px] font-bold tracking-[.1em] uppercase text-accent mb-2">{vid.category}</span>
                <h3 className="text-[18px] font-bold uppercase tracking-[.02em] text-black leading-snug">{vid.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
