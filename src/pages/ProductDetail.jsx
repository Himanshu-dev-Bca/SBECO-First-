import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Lightbox from '../components/Lightbox';
import CategorySidebar from '../components/CategorySidebar';
import { CATALOGUE, productIndex } from '../data/products';

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const product = productIndex[productId];
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-gray-400 px-6">
        <div className="text-5xl mb-4 opacity-40">⊘</div>
        <div className="text-[13px] uppercase tracking-[.08em] mb-4 font-semibold">Product not found</div>
        <Link to="/products" className="text-accent text-[11px] uppercase tracking-[.08em] font-bold no-underline hover:underline">
          ← Back to Catalog
        </Link>
      </div>
    );
  }

  const similar = (product.similar || []).map((id) => productIndex[id]).filter(Boolean);

  return (
    <div className="flex min-h-[calc(100vh-80px)] bg-white">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 lg:sticky lg:top-20 lg:self-start lg:h-[calc(100vh-5rem)] transition-transform duration-300 ${
          mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
        style={{ width: '280px' }}
      >
        <div
          className={`absolute inset-0 bg-black/40 lg:hidden ${mobileSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}
          onClick={() => setMobileSidebarOpen(false)}
        />
        <div className="relative h-full w-[280px] shrink-0">
          <CategorySidebar
            categories={CATALOGUE}
            mode="detail"
            activeId={productId}
            onMobileClose={() => setMobileSidebarOpen(false)}
          />
        </div>
      </div>

      <main className="flex-1 min-w-0">
        {/* Top toolbar */}
        <div className="sticky top-20 z-30 bg-white border-b border-gray-200">
          <div className="flex items-center gap-3 px-4 md:px-8 py-3 flex-wrap">
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="lg:hidden flex items-center gap-2 px-3 py-2 border border-gray-200 text-[11px] font-bold tracking-[.08em] uppercase text-gray-700 hover:border-accent hover:text-accent transition-colors"
            >
              ☰ Categories
            </button>
            <nav className="flex items-center gap-1.5 text-[10px] tracking-[.08em] uppercase text-gray-500 min-w-0 flex-1 overflow-x-auto">
              <Link to="/products" className="hover:text-accent no-underline shrink-0 font-semibold">All Products</Link>
              <span className="text-gray-300 shrink-0">›</span>
              {product.catId && (
                <Link to={`/products?category=${product.catId}`} className="hover:text-accent no-underline shrink-0">
                  {product.catName}
                </Link>
              )}
              {product.subName && (
                <>
                  <span className="text-gray-300 shrink-0">›</span>
                  <span className="text-gray-500 shrink-0">{product.subName}</span>
                </>
              )}
              {product.nestedSubName && (
                <>
                  <span className="text-gray-300 shrink-0">›</span>
                  <span className="text-gray-500 shrink-0">{product.nestedSubName}</span>
                </>
              )}
              <span className="text-gray-300 shrink-0">›</span>
              <span className="text-black font-bold shrink-0 truncate">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 animate-fade-up">
          <div className="bg-gray-50 flex items-center justify-center min-h-[400px] border-b md:border-b-0 md:border-r border-gray-200 relative overflow-hidden">
            {product.badge && (
              <span className="absolute top-4 left-4 text-[9px] bg-accent text-white px-3 py-1.5 tracking-[.1em] uppercase font-bold z-10">
                {product.badge}
              </span>
            )}
            <Lightbox src={product.imageUrl} alt={product.name}>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-contain p-6 md:p-10 hover:scale-105 transition-transform duration-500 ease-out cursor-zoom-in max-h-[500px]"
              />
            </Lightbox>
          </div>
          <div className="p-6 md:p-12 bg-white flex flex-col justify-center">
            <div className="text-[10px] text-gray-400 tracking-[.12em] uppercase mb-2">
              {product.sku} · {product.brand}
            </div>
            <h1 className="text-[24px] md:text-[34px] font-extrabold uppercase tracking-[.02em] leading-tight mb-3 text-black">
              {product.name}
            </h1>
            <p className="text-[14px] text-gray-500 leading-relaxed mb-6">{product.tagline}</p>
            <div className="flex flex-wrap gap-2.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-accent text-white text-[11px] font-bold tracking-[.12em] uppercase no-underline hover:bg-accent-hover hover:-translate-y-0.5 transition-all"
              >
                Enquire Now →
              </Link>
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-gray-200 text-[11px] font-bold tracking-[.12em] uppercase hover:border-black transition-colors bg-white"
              >
                ← Back
              </button>
            </div>
          </div>
        </div>

        {/* Product Details – STACKED: Description ABOVE Specifications */}
        <section className="px-4 md:px-8 py-12 md:py-14">
          <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3 mb-7 pb-3.5 border-b-2 border-black">
            Product Details <span className="text-[11px] text-gray-400 font-light">01</span>
          </div>

          {/* Description – full width, stacked ABOVE */}
          <div className="border border-gray-200 bg-white p-6 md:p-8 hover:shadow-md transition-shadow mb-6">
            <div className="text-[12px] font-bold tracking-[.08em] uppercase mb-3 text-accent flex items-center gap-2">
              <span className="w-1 h-4 bg-accent inline-block" /> Description
            </div>
            <p className="text-[14px] text-gray-700 leading-[1.8] max-w-[820px]">{product.description}</p>
          </div>

          {/* Specifications – below description, table style */}
          <div className="border border-gray-200 bg-white hover:shadow-md transition-shadow">
            <div className="px-6 md:px-8 py-4 border-b border-gray-200 bg-gray-50">
              <div className="text-[12px] font-bold tracking-[.08em] uppercase text-accent flex items-center gap-2">
                <span className="w-1 h-4 bg-accent inline-block" /> Specifications
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {Object.entries(product.specs || {}).map(([k, v], i) => (
                <div
                  key={k}
                  className={`flex justify-between items-center px-6 md:px-8 py-3.5 text-[13px] ${
                    i > 0 ? 'border-t border-gray-100' : ''
                  } ${i % 2 === 0 ? 'md:border-r md:border-gray-100' : ''}`}
                >
                  <span className="text-gray-400 tracking-[.06em] uppercase font-medium text-[11px]">{k}</span>
                  <span className="font-semibold text-black text-right">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related / Consumables */}
        {product.consumables?.length > 0 && (
          <section className="px-4 md:px-8 pb-12 md:pb-14">
            <div className="flex items-center gap-3 mb-7 pb-3.5 border-b-2 border-black">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 text-accent text-xl">
                ⚙
              </div>
              <div className="flex-1">
                <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3">
                  Related / Consumables <span className="text-[11px] text-gray-400 font-light">02</span>
                </div>
                <p className="text-[12px] text-gray-500 mt-1">Accessories and refills used with this product</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {product.consumables.map((c, i) => (
                <div
                  key={i}
                  className="group border border-gray-200 bg-white p-6 text-center hover:border-accent hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(230,0,35,0.08)] transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-accent/[0.08] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-all duration-300">
                    <span className="text-accent group-hover:text-white text-xl font-bold transition-colors">📦</span>
                  </div>
                  <div className="text-[13px] font-bold uppercase tracking-[.02em] mb-1.5 text-black">{c.name}</div>
                  <div className="text-[10px] text-gray-400 tracking-[.06em] uppercase">{c.sku}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Similar Products */}
        {similar.length > 0 && (
          <section className="px-4 md:px-8 pb-12 md:pb-14">
            <div className="flex items-center gap-3 mb-7 pb-3.5 border-b-2 border-black">
              <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center shrink-0 text-black text-xl">
                ⇄
              </div>
              <div className="flex-1">
                <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3">
                  Similar Products <span className="text-[11px] text-gray-400 font-light">03</span>
                </div>
                <p className="text-[12px] text-gray-500 mt-1">Other products that complement or pair well with this one</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {similar.map((s) => (
                <Link
                  key={s.id}
                  to={`/products/${s.id}`}
                  className="group flex border border-gray-200 bg-white overflow-hidden no-underline text-black hover:border-black hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-300"
                >
                  <div className="w-[140px] sm:w-[180px] shrink-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center border-r border-gray-200 overflow-hidden">
                    <img
                      src={s.imageUrl}
                      alt={s.name}
                      className="w-full h-full object-contain p-3 group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-center">
                    <div className="text-[10px] text-gray-400 tracking-[.06em] uppercase mb-1 font-semibold">{s.sku}</div>
                    <div className="text-[14px] sm:text-[15px] font-bold uppercase tracking-[.02em] mb-1.5 leading-snug text-black group-hover:text-accent transition-colors">
                      {s.name}
                    </div>
                    <div className="text-[12px] text-gray-500 leading-snug line-clamp-2 mb-2">{s.tagline}</div>
                    <div className="text-[10px] text-accent font-bold uppercase tracking-[.08em] flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                      View Details <span>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
