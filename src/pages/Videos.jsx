import Hero from '../components/Hero';

const VIDEOS = [
  { id: '1', youtubeId: 'tAwpzWalPAg', title: 'Super Bright Engineering Company-our products', duration: '0.60', category: 'Products view', description: 'just showcasing the products we deal in.' },
  { id: '2', youtubeId: 'IUdHLF08wJA', title: 'Bread packing tape dispenser', duration: '0:50', category: 'Guide', description: 'guide on how u shall operate the bread sealing machine.' },
  { id: '3', youtubeId: 'us6wqThUrhE', title: 'BHive stand', duration: '0:13', category: 'Demo', description: 'showing the durable bhive paper stand we offer.' },
  { id: '4', youtubeId: '9U12rA7FZkE', title: 'Lane marking for indoors', duration: '0:29', category: 'Overview', description: 'Lane marking solutions for indoor applications.' },
  { id: '5', youtubeId: 'oMDkSq-DFgw', title: 'Hand tape dispenser', duration: '1:11', category: 'Product Demo', description: 'Learn about our complete range of tape dispensers.' },
  { id: '6', youtubeId: '04RORJBFGqk', title: 'GLM 500', duration: '0:49', category: 'Overview', description: 'look at the GLM 500 in action.' },
];

export default function Videos() {
  return (
    <>
      <Hero 
        label="Videos · Super Bright Labs" 
        title={<>Video<br/>Library</>}
        subtitle="Watch our product demonstrations, tutorials, and expert guides to get the most out of your industrial equipment and solutions." 
      />

      {/* YouTube Videos Section */}
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

      <section className="px-6 pb-14 md:px-12 md:pb-16" aria-labelledby="social-cta-heading">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-sm border border-gray-200 border-t-2 border-t-accent bg-white p-6 shadow-[0_12px_36px_rgba(17,24,39,.04)] sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <div className="max-w-2xl">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[.2em] text-accent">Stay connected</p>
            <h2 id="social-cta-heading" className="mb-3 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
              Want to see more?
            </h2>
            <p className="text-sm leading-6 text-gray-600 sm:text-base">
              Explore our YouTube channel and follow us on Instagram for more videos, product highlights, and updates.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://www.youtube.com/@superbrightlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2.5 bg-accent px-5 py-3 text-center text-xs font-bold uppercase tracking-[.08em] text-white transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.615 3.184c-1.7-.455-8.51-.455-8.51-.455s-6.81 0-8.51.455A2.8 2.8 0 0 0 .615 5.164C.16 6.864.16 12 .16 12s0 5.136.455 6.836a2.8 2.8 0 0 0 1.98 1.98c1.7.455 8.51.455 8.51.455s6.81 0 8.51-.455a2.8 2.8 0 0 0 1.98-1.98c.455-1.7.455-6.836.455-6.836s0-5.136-.455-6.836a2.8 2.8 0 0 0-1.98-1.98ZM9.6 15.75v-7.5L16.1 12l-6.5 3.75Z" />
              </svg>
              Visit Our YouTube Channel
            </a>
            <a
              href="https://www.instagram.com/superbrightlabs/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2.5 border border-gray-300 px-5 py-3 text-center text-xs font-bold uppercase tracking-[.08em] text-black transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
              </svg>
              Follow Us on Instagram
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
