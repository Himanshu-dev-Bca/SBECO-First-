import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { allProducts } from '../data/products';

const CAROUSEL_ITEMS = allProducts.slice(0, 12);

function Carousel() {
  const trackRef = useRef(null);
  const [slide, setSlide] = useState(0);
  const [perView, setPerView] = useState(() => {
    if (typeof window === 'undefined') return 3;
    const w = window.innerWidth;
    return w <= 640 ? 1 : w <= 960 ? 2 : 3;
  });
  const [isPaused, setIsPaused] = useState(false);
  const [itemWidth, setItemWidth] = useState(320);

  // Touch/swipe state
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const updatePerView = useCallback(() => {
    const w = window.innerWidth;
    setPerView(w <= 640 ? 1 : w <= 960 ? 2 : 3);
  }, []);

  const measureItemWidth = useCallback(() => {
    const width = trackRef.current?.children[0]?.offsetWidth;
    if (width && width !== itemWidth) {
      setItemWidth(width);
    }
  }, [itemWidth]);

  useEffect(() => {
    window.addEventListener('resize', updatePerView);
    window.addEventListener('resize', measureItemWidth);
    measureItemWidth();
    return () => {
      window.removeEventListener('resize', updatePerView);
      window.removeEventListener('resize', measureItemWidth);
    };
  }, [measureItemWidth, updatePerView]);

  const maxSlide = Math.max(0, CAROUSEL_ITEMS.length - perView);
  const activeSlide = Math.min(slide, maxSlide);

  // Slower auto-slide: 5 seconds for better content absorption
  useEffect(() => {
    if (isPaused || maxSlide === 0) return;

    const interval = setInterval(() => {
      setSlide(s => (s >= maxSlide ? 0 : s + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, maxSlide]);

  const handlePointerEnter = () => {
    setIsPaused(true);
  };

  const handlePointerLeave = () => {
    setIsPaused(false);
  };

  // Touch/swipe handlers for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const delta = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (delta > threshold) {
      // Swiped left → next
      setSlide(s => (s >= maxSlide ? 0 : s + 1));
    } else if (delta < -threshold) {
      // Swiped right → prev
      setSlide(s => (s <= 0 ? maxSlide : s - 1));
    }
    setIsPaused(false);
  };

  const goNext = () => setSlide(s => (s >= maxSlide ? 0 : s + 1));
  const goPrev = () => setSlide(s => (s <= 0 ? maxSlide : s - 1));

  const translateX = activeSlide * (itemWidth + 24);

  // Determine which card indices are "active" (currently visible)
  const visibleStart = activeSlide;
  const visibleEnd = activeSlide + perView - 1;

  return (
    <section className="px-6 md:px-12 py-14">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
        <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3">
          Categories <span className="text-[11px] text-gray-400 font-light">{CAROUSEL_ITEMS.length} products</span>
        </div>
        <Link to="/products" className="text-[11px] tracking-[.08em] uppercase text-accent no-underline font-semibold hover:opacity-80 transition-opacity">
          View All Products →
        </Link>
      </div>

      <div
        className="relative overflow-hidden rounded-[28px]"
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation arrows */}
        <button
          onClick={goPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-accent transition-colors cursor-pointer backdrop-blur-sm border-none"
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" /></svg>
        </button>
        <button
          onClick={goNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-accent transition-colors cursor-pointer backdrop-blur-sm border-none"
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /></svg>
        </button>

        {/* Smoother transition: 700ms with refined easing */}
        <div ref={trackRef} className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(.25,.1,.25,1)]"
          style={{ transform: `translateX(-${translateX}px)` }}>
          {CAROUSEL_ITEMS.map((p, idx) => {
            const isVisible = idx >= visibleStart && idx <= visibleEnd;
            return (
              <Link
                key={p.id}
                to={`/products/${p.id}`}
                className={`group relative min-w-[calc(33.333%-16px)] max-md:min-w-[calc(50%-12px)] max-sm:min-w-full shrink-0 overflow-hidden rounded-[20px] border bg-white no-underline transition-all duration-500 ease-out hover:border-accent/40 ${
                  isVisible
                    ? 'scale-100 border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)] opacity-100'
                    : 'scale-[0.96] border-gray-100 shadow-none opacity-60'
                }`}
              >
                <div className="relative h-[260px] flex items-center justify-center overflow-hidden bg-slate-50">
                  <img src={p.img} alt={p.name} loading="lazy" className="max-h-full max-w-full object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-110" />
                </div>

                <div className="px-6 py-5 text-center">
                  <h3 className="text-[15px] font-semibold text-slate-900 mb-1.5 line-clamp-2">{p.name}</h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed line-clamp-2">{p.tagline}</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Enhanced dot indicators */}
        <div className="flex justify-center gap-2 py-4">
          {Array.from({ length: maxSlide + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`h-2 rounded-full border-none cursor-pointer transition-all duration-500 ease-out ${
                i === activeSlide
                  ? 'bg-accent w-8 shadow-[0_0_8px_rgba(230,0,35,0.3)]'
                  : 'bg-gray-400/30 w-2 hover:bg-gray-400/60'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero
        label="Super Bright Labs · Since 2001"
        title={<>Your Trusted Partner<br />For Industrial<br />Packaging &amp; Tools</>}
        subtitle="Showcasing premium industrial solutions — adhesive tapes, professional power tools, and protective packaging engineered for demanding environments. Enquire today for your requirements."
        image="/images/about_trusted_partner.png"
      >
        <Link to="/products" className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-accent text-white text-[11px] font-bold tracking-[.12em] uppercase no-underline hover:bg-accent-hover hover:-translate-y-0.5 transition-all">
          Explore Products →
        </Link>
      </Hero>

      <section className="space-y-12 py-12 bg-gray-50">
        <div className="mx-auto max-w-6xl rounded-[32px] bg-white p-8 shadow-[0_28px_70px_rgba(15,23,42,0.08)] animate-fade-up">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { num: '40+', label: 'Years of Experience' },
              { num: '200+', label: 'Products Available' },
              { num: '1,000+', label: 'Clients Served' },
              { num: '20+', label: 'Product Categories' },
            ].map((s, i) => (
              <div key={i} className="rounded-[20px] border border-gray-200 bg-white p-6 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="text-[32px] font-extrabold tracking-tight text-slate-900">{s.num}</div>
                <div className="text-[11px] text-gray-500 tracking-[.12em] uppercase mt-3">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <Carousel />

        <div className="mx-auto max-w-6xl grid gap-6 sm:grid-cols-2 lg:grid-cols-4 animate-fade-up">
          {[
            { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />, title: 'Quality Assured', desc: 'Every product tested and certified for industrial-grade performance and durability.' },
            { icon: <><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></>, title: 'Trusted Brands', desc: 'Authorised stockists for Bosch, DeWalt, Camo, and our own Super Bright Labs range.' },
            { icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /></>, title: 'Expert Support', desc: 'Dedicated technical team to help you choose the right products for your needs.' },
            { icon: <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></>, title: 'Since 2001', desc: 'Over two decades of trusted expertise in industrial packaging and tools.' },
          ].map((f, i) => (
            <div key={i} className="rounded-[28px] border border-gray-200 bg-white p-8 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-[18px] bg-accent text-white">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">{f.icon}</svg>
              </div>
              <div className="text-[13px] font-semibold uppercase tracking-[.06em] mb-2">{f.title}</div>
              <p className="text-[13px] leading-relaxed text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
