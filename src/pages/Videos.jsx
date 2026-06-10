import Hero from '../components/Hero';

const VIDEOS = [
  { id: '1', youtubeId: 'tAwpzWalPAg', title: 'Super Bright Engineering Company-our products', duration: '0.60', category: 'Products view', description: 'just showcasing the products we deal in.' },
  { id: '2', youtubeId: 'IUdHLF08wJA', title: 'Bread packing tape dispenser', duration: '0:50', category: 'Guide', description: 'guide on how u shall operate the bread sealing machine.' },
  { id: '3', youtubeId: 'us6wqThUrhE', title: 'BHive stand', duration: '0:13', category: 'Demo', description: 'showing the durable bhive paper stand we offer.' },
  { id: '4', youtubeId: '9U12rA7FZkE', title: 'Lane marking for indoors', duration: '0:29', category: 'Overview', description: 'Lane marking solutions for indoor applications.' },
  { id: '5', youtubeId: 'oMDkSq-DFgw', title: 'Hand tape dispenser', duration: '1:11', category: 'Product Demo', description: 'Learn about our complete range of tape dispensers.' },
  { id: '6', youtubeId: '04RORJBFGqk', title: 'GLM 500', duration: '0:49', category: 'Overview', description: 'look at the GLM 500 in action.' },
];

// Instagram content - placeholders for future integration
const INSTAGRAM_VIDEOS = [
  { id: 'ig-1', handle: '@superbrightlabs', caption: 'Product showcase', thumbnail: '📸', url: 'https://www.instagram.com/p/DYrpRBphkFC/' },
  { id: 'ig-2', handle: '@superbrightlabs', caption: 'Behind the scenes', thumbnail: '🎬', url: '#' },
  { id: 'ig-3', handle: '@superbrightlabs', caption: 'Customer testimonials', thumbnail: '⭐', url: '#' },
  { id: 'ig-4', handle: '@superbrightlabs', caption: 'New product launch', thumbnail: '🚀', url: '#' },
  { id: 'ig-5', handle: '@superbrightlabs', caption: 'Team highlights', thumbnail: '👥', url: '#' },
  { id: 'ig-6', handle: '@superbrightlabs', caption: 'Industry updates', thumbnail: '📰', url: '#' },
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

      {/* Instagram Social Handles Section */}
      <section className="px-8 md:px-12 py-14 bg-gray-50 border-t border-gray-200">
        <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3 mb-8 pb-3.5 border-b-2 border-black">
          Our Social Handles <span className="text-[11px] text-gray-400 font-light">Follow Us</span>
        </div>

        <div className="mb-8">
          <p className="text-[13px] text-gray-600 leading-relaxed max-w-3xl">
            Stay connected with Super Bright Labs on Instagram for the latest product launches, behind-the-scenes content, customer testimonials, and industry updates. Follow us for exclusive insights into our manufacturing process and innovative solutions.
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSTAGRAM_VIDEOS.map((item, i) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative border border-gray-200 bg-white overflow-hidden hover:border-black hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,.08)] transition-all animate-fade-up cursor-pointer"
              style={{ animationDelay: `${i * .06}s` }}
            >
              {/* Placeholder Image Area */}
              <div className="relative w-full aspect-square bg-gradient-to-br from-pink-100 to-red-50 flex items-center justify-center overflow-hidden">
                {/* Instagram Icon/Thumbnail Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <div className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity">
                    {item.thumbnail}
                  </div>
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                {/* Play Button Indicator */}
                <div className="relative z-10 w-16 h-16 rounded-full border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <span className="text-white text-2xl">▶</span>
                </div>

                {/* Instagram Badge */}
                <div className="absolute top-3 right-3 bg-white px-2.5 py-1 rounded-full flex items-center gap-1.5 z-20">
                  <span className="text-[12px] font-bold text-pink-600">📷</span>
                  <span className="text-[9px] font-bold tracking-[.08em] uppercase text-pink-600">Instagram</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="text-[10px] font-bold tracking-[.12em] uppercase text-pink-600 mb-2">
                  {item.handle}
                </div>
                <h3 className="text-[13px] font-bold uppercase tracking-[.02em] text-black leading-snug mb-2 group-hover:text-accent transition-colors">
                  {item.caption}
                </h3>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-[10px] text-gray-400 tracking-[.06em]">@superbrightlabs</span>
                  <div className="w-6 h-6 border border-gray-200 flex items-center justify-center text-xs text-gray-400 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all">
                    →
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-10 p-8 bg-white border border-gray-200 rounded-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-[14px] font-bold uppercase tracking-[.06em] mb-2">
                🎬 Join Our Community
              </h3>
              <p className="text-[12px] text-gray-600">
                Subscribe to our Instagram channel to stay updated with new product launches, industry insights, and exclusive behind-the-scenes content from Super Bright Labs.
              </p>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-pink-600 to-red-500 hover:from-pink-700 hover:to-red-600 text-white text-[11px] font-bold tracking-[.12em] uppercase border-none cursor-pointer transition-all hover:-translate-y-0.5 whitespace-nowrap"
            >
              Follow on Instagram →
            </a>
          </div>
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
