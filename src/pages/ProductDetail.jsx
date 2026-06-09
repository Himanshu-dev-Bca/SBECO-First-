import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CATALOGUE, productIndex } from '../data/products';

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const product = productIndex[productId];
  if (!product) return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-gray-400">
      <div className="text-5xl mb-4">⊘</div>
      <div className="text-[13px] uppercase tracking-[.08em] mb-4">Product not found</div>
      <Link to="/products" className="text-accent text-[11px] uppercase tracking-[.08em] font-bold no-underline">← Back to Catalog</Link>
    </div>
  );

  const similar = (product.similar || []).map(id => productIndex[id]).filter(Boolean);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-[280px]' : 'w-0'} shrink-0 bg-white border-r border-gray-200 overflow-y-auto overflow-x-hidden transition-all duration-300 hidden lg:block`}>
        <div className="p-6 border-b border-gray-200">
          <div className="text-[10px] tracking-[.12em] uppercase text-gray-400 font-semibold mb-3">Product Categories</div>
        </div>
        {CATALOGUE.map(cat => (
          <div key={cat.id} className="border-b border-gray-200">
            <div className="px-6 py-3 text-[11px] font-bold tracking-[.06em] uppercase bg-gray-100">{cat.name}</div>
            {cat.subcategories.map(sub => (
              <div key={sub.id}>
                <div className="px-6 py-2 text-[10px] tracking-[.06em] uppercase text-gray-400 font-semibold">{sub.name}</div>
                
                {/* Regular products */}
                {sub.products && sub.products.map(p => (
                  <button key={p.id} onClick={() => navigate(`/products/${p.id}`)}
                    className={`w-full text-left px-6 py-2 text-[12px] border-none cursor-pointer transition-all ${
                      p.id === productId ? 'bg-accent text-white font-semibold' : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}>
                    {p.name}
                  </button>
                ))}
                
                {/* Nested subcategories */}
                {sub.nestedSubcategories && sub.nestedSubcategories.map(nested => (
                  <div key={nested.id}>
                    <div className="px-8 py-1.5 text-[9px] tracking-[.06em] uppercase text-gray-300 font-semibold bg-gray-50">{nested.name}</div>
                    {nested.products && nested.products.map(p => (
                      <button key={p.id} onClick={() => navigate(`/products/${p.id}`)}
                        className={`w-full text-left px-8 py-2 text-[11px] border-none cursor-pointer transition-all ${
                          p.id === productId ? 'bg-accent text-white font-semibold' : 'bg-white text-gray-600 hover:bg-gray-100'
                        }`}>
                        {p.name}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 px-8 md:px-12 py-4 text-[10px] tracking-[.08em] uppercase text-gray-400 border-b border-gray-200 bg-white">
          <Link to="/products" className="text-gray-400 no-underline hover:text-accent transition-colors">Catalog</Link>
          <span>›</span>
          <span>{product.catName}</span>
          <span>›</span>
          <span>{product.subName}</span>
          {product.nestedSubName && (
            <>
              <span>›</span>
              <span>{product.nestedSubName}</span>
            </>
          )}
          <span>›</span>
          <span className="text-black font-semibold">{product.name}</span>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}
            className="ml-auto hidden lg:flex items-center gap-1.5 text-[10px] tracking-[.08em] uppercase text-gray-400 border border-gray-200 px-3 py-1 bg-white cursor-pointer hover:bg-gray-100 transition-colors">
            {sidebarOpen ? '← Hide' : '→ Show'} Sidebar
          </button>
        </div>

        {/* Product Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-100 flex items-center justify-center min-h-[430px] border-b md:border-b-0 md:border-r border-gray-200 relative overflow-hidden">
            <span className="absolute top-4 left-4 text-[9px] bg-accent text-white px-3 py-1.5 tracking-[.1em] uppercase font-bold">{product.badge}</span>
            <img src={product.imageUrl} alt={product.name} className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-500 ease-out" />
          </div>
          <div className="p-10 md:p-14 bg-white">
            <div className="text-[10px] text-gray-400 tracking-[.12em] uppercase mb-1">{product.sku} · {product.brand}</div>
            <h1 className="text-[28px] md:text-[36px] font-extrabold uppercase tracking-[.02em] leading-tight mb-3">{product.name}</h1>
            <p className="text-[14px] text-gray-600 leading-relaxed mb-6">{product.tagline}</p>
            <Link to="/contact" className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-accent text-white text-[11px] font-bold tracking-[.12em] uppercase no-underline hover:bg-accent-hover hover:-translate-y-0.5 transition-all">
              Enquire Now →
            </Link>
          </div>
        </div>

        {/* Description */}
        <section className="px-8 md:px-12 py-14">
          <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3 mb-7 pb-3.5 border-b-2 border-black">
            Product Details <span className="text-[11px] text-gray-400 font-light">01</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 bg-white p-8">
              <div className="text-[12px] font-bold tracking-[.08em] uppercase mb-4">Description</div>
              <p className="text-[13px] text-gray-600 leading-relaxed">{product.description}</p>
            </div>
            <div className="border border-gray-200 bg-white p-8">
              <div className="text-[12px] font-bold tracking-[.08em] uppercase mb-4">Specifications</div>
              <div className="flex flex-col">
                {Object.entries(product.specs || {}).map(([k, v], i) => (
                  <div key={k} className={`flex justify-between py-2.5 text-[12px] ${i > 0 ? 'border-t border-gray-100' : ''}`}>
                    <span className="text-gray-400 tracking-[.06em] uppercase">{k}</span>
                    <span className="font-semibold">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Consumables */}
        {product.consumables?.length > 0 && (
          <section className="px-8 md:px-12 pb-14">
            <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3 mb-7 pb-3.5 border-b-2 border-black">
              Consumables <span className="text-[11px] text-gray-400 font-light">02</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {product.consumables.map((c, i) => (
                <div key={i} className="border border-gray-200 bg-white p-6 text-center hover:border-black hover:-translate-y-0.5 transition-all">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 text-xl">📦</div>
                  <div className="text-[13px] font-bold uppercase tracking-[.02em] mb-1">{c.name}</div>
                  <div className="text-[10px] text-gray-400 tracking-[.06em]">{c.sku}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Similar */}
        {similar.length > 0 && (
          <section className="px-8 md:px-12 pb-14">
            <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3 mb-7 pb-3.5 border-b-2 border-black">
              Similar Products <span className="text-[11px] text-gray-400 font-light">03</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {similar.map(s => (
                <Link key={s.id} to={`/products/${s.id}`}
                  className="group flex border border-gray-200 bg-white overflow-hidden no-underline text-black hover:border-black transition-all">
                  <div className="w-[170px] shrink-0 bg-gray-100 flex items-center justify-center border-r border-gray-200 overflow-hidden">
                    <img src={s.imageUrl} alt={s.name} className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out" />
                  </div>
                  <div className="p-5 flex-1">
                    <div className="text-[10px] text-gray-400 tracking-[.06em] uppercase mb-1">{s.sku}</div>
                    <div className="text-[14px] font-bold uppercase tracking-[.02em] mb-1">{s.name}</div>
                    <div className="text-[12px] text-gray-600 leading-snug">{s.tagline}</div>
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
