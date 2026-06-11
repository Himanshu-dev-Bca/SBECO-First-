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
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [itemWidth, setItemWidth] = useState(320);

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

  useEffect(() => {
    if (isPaused || maxSlide === 0) return;

    const interval = setInterval(() => {
      setSlide(s => (s >= maxSlide ? 0 : s + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, maxSlide]);

  const centerItem = useCallback(
    (index) => {
      const target = Math.max(0, Math.min(index - Math.floor(perView / 2), maxSlide));
      setSlide(target);
    },
    [maxSlide, perView]
  );

  const handlePointerEnter = (index) => {
    setHoveredIndex(index);
    setIsPaused(true);
    centerItem(index);
  };

  const handlePointerLeave = () => {
    setHoveredIndex(null);
    setIsPaused(false);
  };

  const handleTouchStart = (index) => {
    setHoveredIndex(index);
    setIsPaused(true);
    centerItem(index);
  };

  const handleTouchEnd = () => {
    setHoveredIndex(null);
    setIsPaused(false);
  };

  const translateX = activeSlide * (itemWidth + 24);

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

      <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-[0_30px_70px_rgba(15,23,42,0.06)]">
        <div ref={trackRef} className="flex gap-6 transition-transform duration-500 ease-[cubic-bezier(.4,0,.2,1)]"
          style={{ transform: `translateX(-${translateX}px)` }}>
          {CAROUSEL_ITEMS.map((p, index) => {
            const isActive = hoveredIndex === index;
            const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

            return (
              <Link
                key={p.id}
                to={`/products/${p.id}`}
                onPointerEnter={() => handlePointerEnter(index)}
                onPointerLeave={handlePointerLeave}
                onTouchStart={() => handleTouchStart(index)}
                onTouchEnd={handleTouchEnd}
                onFocus={() => handlePointerEnter(index)}
                onBlur={handlePointerLeave}
                className={`group relative min-w-[calc(33.333%-16px)] max-md:min-w-[calc(50%-12px)] max-sm:min-w-full shrink-0 overflow-hidden rounded-[20px] border border-gray-200 bg-white shadow-sm transition-all duration-500 ease-out will-change-transform opacity ${isActive ? 'scale-105 shadow-[0_30px_90px_rgba(15,23,42,0.18)] z-20' : ''}`}
                style={{ opacity: isDimmed ? 0.35 : 1, filter: isDimmed ? 'blur(1.2px)' : 'none', willChange: 'transform, opacity' }}
              >
                <div className="relative h-[260px] flex items-center justify-center overflow-hidden bg-slate-50">
                  <img src={p.img} alt={p.name} loading="lazy" className={`max-h-full max-w-full object-contain p-6 transition-transform duration-700 ease-out ${isActive ? 'scale-105' : ''}`} />
                </div>

                <div className="px-6 py-6 text-center">
                  <h3 className="text-[16px] font-semibold text-slate-900 mb-2 line-clamp-2">{p.name}</h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed line-clamp-2">{p.tagline}</p>
                </div>
              </Link>
            );
          })}
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
