import Hero from '../components/Hero';

export default function Photos() {
  return (
    <>
      <Hero label="Gallery · Super Bright Labs" title="Photos"
        subtitle="A visual showcase of our products, facilities, and operations." />

      <section className="px-8 md:px-12 py-14">
        <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3 mb-7 pb-3.5 border-b-2 border-black">
          Photo Gallery <span className="text-[11px] text-gray-400 font-light">Coming Soon</span>
        </div>
        <div className="text-center py-20 text-gray-400">
          <div className="text-5xl mb-4">📸</div>
          <div className="text-[13px] tracking-[.06em] uppercase mb-2">Gallery Coming Soon</div>
          <p className="text-[12px] text-gray-600 max-w-md mx-auto leading-relaxed">
            We're curating a collection of product photography, facility images, and behind-the-scenes content. Check back soon for updates.
          </p>
        </div>
      </section>
    </>
  );
}
