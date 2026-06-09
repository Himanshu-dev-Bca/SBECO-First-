import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { allProducts, CATALOGUE } from '../data/products';

const CAROUSEL_ITEMS = allProducts.slice(0, 12);

function Carousel() {
  const trackRef = useRef(null);
  const [slide, setSlide] = useState(0);
  const [perView, setPerView] = useState(3);

  const updatePerView = useCallback(() => {
    const w = window.innerWidth;
    setPerView(w <= 768 ? 1 : w <= 960 ? 2 : 3);
  }, []);

  useEffect(() => {
    updatePerView();
    window.addEventListener('resize', updatePerView);
    return () => window.removeEventListener('resize', updatePerView);
  }, [updatePerView]);

  const maxSlide = Math.max(0, CAROUSEL_ITEMS.length - perView);
  const clampedSlide = Math.min(slide, maxSlide);

  useEffect(() => {
    if (slide > maxSlide) setSlide(maxSlide);
  }, [maxSlide, slide]);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(s => (s >= maxSlide ? 0 : s + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [maxSlide]);

  const translateX = trackRef.current
    ? clampedSlide * ((trackRef.current.children[0]?.offsetWidth || 300) + 24)
    : 0;

  return (
    <section className="px-8 md:px-12 py-14">
      <div className="flex items-center justify-between mb-8">
        <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3">
          Categories <span className="text-[11px] text-gray-400 font-light">{CAROUSEL_ITEMS.length} products</span>
        </div>
        <div className="flex items-center gap-5">
          <Link to="/products" className="text-[11px] tracking-[.08em] uppercase text-accent no-underline font-semibold hover:opacity-70 transition-opacity">
            View All Products →
          </Link>

        </div>
      </div>

      <div className="overflow-hidden">
        <div ref={trackRef} className="flex gap-6 transition-transform duration-500 ease-[cubic-bezier(.4,0,.2,1)]"
          style={{ transform: `translateX(-${translateX}px)` }}>
          {CAROUSEL_ITEMS.map(p => (
            <Link key={p.id} to={`/products/${p.id}`}
              className="group min-w-[calc(33.333%-16px)] max-md:min-w-[calc(50%-12px)] max-sm:min-w-full shrink-0 border border-gray-200 bg-white overflow-hidden no-underline text-black hover:border-black hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,.08)] transition-all duration-200">
              <div className="bg-gray-100 h-[240px] flex items-center justify-center overflow-hidden relative">
                <span className="absolute top-3 left-3 text-[9px] bg-white text-gray-600 px-2 py-1 tracking-[.06em] uppercase border border-gray-200">{p.sub}</span>
                <span className="absolute top-3 right-3 text-[9px] bg-accent text-white px-2.5 py-1 tracking-[.1em] uppercase">{p.badge}</span>
                <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500 ease-out" />
              </div>
              <div className="p-5">
                <div className="text-[10px] text-gray-400 tracking-[.1em] uppercase mb-1">{p.sku}</div>
                <div className="text-[17px] font-bold uppercase tracking-[.02em] mb-1 leading-tight">{p.name}</div>
                <div className="text-[12px] text-gray-600 leading-snug mb-3.5">{p.tagline}</div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-[10px] text-gray-400 tracking-[.06em]">{p.brand}</span>
                  <div className="w-7 h-7 border border-gray-200 flex items-center justify-center text-xs text-gray-400 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all">→</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Categories grid (placed below the Carousel) ─────────── */
function CategoriesSection() {
  return (
    <section className="px-8 md:px-12 py-14 bg-gray-50 border-t border-gray-200">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 pb-3.5 border-b-2 border-black">
        <div>
          <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3">
            Browse Our Categories
            <span className="text-[11px] text-gray-400 font-light">{CATALOGUE.length} categories</span>
          </div>
          <p className="text-[13px] text-gray-500 mt-2 max-w-[560px] leading-relaxed">
            Explore our complete range of industrial packaging, tools, and facility solutions — engineered for demanding environments.
          </p>
        </div>
        <Link
          to="/products"
          className="text-[11px] tracking-[.08em] uppercase text-accent no-underline font-bold hover:opacity-70 transition-opacity shrink-0"
        >
          View All Products →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATALOGUE.map((c, i) => {
          const productCount = c.subcategories.reduce((acc, sub) => {
            let count = sub.products ? sub.products.length : 0;
            if (sub.nestedSubcategories) {
              count += sub.nestedSubcategories.reduce(
                (nestedAcc, nested) => nestedAcc + (nested.products ? nested.products.length : 0),
                0
              );
            }
            return acc + count;
          }, 0);

          return (
            <Link
              key={c.id}
              to={`/products?category=${c.id}`}
              className="group relative border border-gray-200 bg-white overflow-hidden no-underline text-black hover:border-black hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,.1)] transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="relative h-[260px] bg-gray-100 overflow-hidden">
                <img
                  src={c.imageUrl}
                  alt={c.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <span className="absolute top-4 right-4 text-[9px] bg-accent text-white px-3 py-1.5 tracking-[.12em] uppercase font-bold">
                  {productCount > 0 ? `${productCount} Products` : 'Coming Soon'}
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-extrabold uppercase tracking-[.04em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] leading-tight">
                    {c.name}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-[13px] text-gray-600 leading-relaxed mb-5 line-clamp-2 min-h-[3.2em]">
                  {c.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-[10px] tracking-[.1em] uppercase font-semibold text-gray-400">
                    {c.subcategories.length > 0
                      ? `${c.subcategories.length} Subcategories`
                      : 'Products Coming Soon'}
                  </span>
                  <div className="flex items-center gap-2 text-[11px] tracking-[.08em] uppercase font-bold text-accent group-hover:gap-3 transition-all duration-300">
                    Explore
                    <div className="w-8 h-8 border border-gray-200 flex items-center justify-center text-sm text-gray-400 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300">
                      →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero
        label="Super Bright Labs · Since 2001" 
        title={<>Your Trusted Partner<br/>For Industrial<br/>Packaging &amp; Tools</>}
        subtitle="Showcasing premium industrial solutions — adhesive tapes, professional power tools, and protective packaging engineered for demanding environments. Enquire today for your requirements."
        image="/images/about_trusted_partner.png"
      >
        <Link to="/products" className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-accent text-white text-[11px] font-bold tracking-[.12em] uppercase no-underline hover:bg-accent-hover hover:-translate-y-0.5 transition-all">
          Explore Products →
        </Link>
      </Hero>

      {/* Stats */}
      <div className="flex flex-wrap bg-white border-b border-gray-200 animate-fade-up">
        {[
          { num: '40+', label: 'Years of Experience' },
          { num: '200+', label: 'Products Available' },
          { num: '1,000+', label: 'Clients Served' },
          { num: '20+', label: 'Product Categories' },
        ].map((s, i) => (
          <div key={i} className="flex-1 min-w-[50%] md:min-w-0 py-7 px-8 border-r border-b md:border-b-0 border-gray-200 text-center last:border-r-0">
            <div className="text-[32px] font-extrabold tracking-tight">{s.num}</div>
            <div className="text-[10px] text-gray-400 tracking-[.12em] uppercase mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="animate-fade-up">
        <Carousel />
      </div>

      {/* Categories overview – placed BELOW the product carousel as requested */}
      <CategoriesSection />

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-gray-200 bg-white animate-fade-up">
        {[
          { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>, title: 'Quality Assured', desc: 'Every product tested and certified for industrial-grade performance and durability.' },
          { icon: <><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></>, title: 'Trusted Brands', desc: 'Authorised stockists for Bosch, DeWalt, Camo, and our own Super Bright Labs range.' },
          { icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/></>, title: 'Expert Support', desc: 'Dedicated technical team to help you choose the right products for your needs.' },
          { icon: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></>, title: 'Since 2001', desc: 'Over two decades of trusted expertise in industrial packaging and tools.' },
        ].map((f, i) => (
          <div key={i} className="p-9 border-r border-gray-200 last:border-r-0 hover:bg-gray-100 transition-colors">
            <div className="w-10 h-10 bg-accent rounded-[10px] flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none stroke-2">{f.icon}</svg>
            </div>
            <div className="text-[13px] font-semibold uppercase tracking-[.06em] mb-1.5">{f.title}</div>
            <div className="text-[12px] text-gray-600 leading-relaxed">{f.desc}</div>
          </div>
        ))}
      </div>
    </>
  );
}
