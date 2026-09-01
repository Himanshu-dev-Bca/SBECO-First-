import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Lightbox from '../components/Lightbox';
import CategorySidebar from '../components/CategorySidebar';
import { CATALOGUE, productIndex } from '../data/products';

/* ── Badge class helper ── */
function getBadgeClass(badge) {
  if (!badge) return '';
  const b = badge.toLowerCase();
  if (b.includes('best') || b.includes('popular')) return 'badge-popular';
  if (b.includes('professional')) return 'badge-professional';
  if (b.includes('industrial')) return 'badge-industrial';
  if (b.includes('essential')) return 'badge-essential';
  if (b.includes('eco')) return 'badge-eco';
  if (b.includes('heavy')) return 'badge-heavy-duty';
  if (b.includes('machine')) return 'badge-machine';
  if (b.includes('value')) return 'badge-value';
  if (b.includes('premium')) return 'badge-premium';
  if (b.includes('specialty')) return 'badge-specialty';
  if (b.includes('new')) return 'badge-new';
  if (b.includes('safety')) return 'badge-safety';
  return 'badge-standard';
}

/* ── SVG icon components (replace emojis with professional vectors) ── */
const ICONS = {
  factory: (cls = 'w-5 h-5') => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20M4 20V10l4 2V8l4 2V6l4 2V4h4v16" />
    </svg>
  ),
  package: (cls = 'w-5 h-5') => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  truck: (cls = 'w-5 h-5') => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  store: (cls = 'w-5 h-5') => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l1-4h16l1 4M3 9h18M3 9v11a1 1 0 001 1h16a1 1 0 001-1V9" />
      <path d="M9 21V13h6v8" />
      <path d="M7 9c0 1.1-.9 2-2 2s-2-.9-2-2M12 9c0 1.1-.9 2-2 2s-2-.9-2-2M17 9c0 1.1-.9 2-2 2s-2-.9-2-2M22 9c0 1.1-.9 2-2 2s-2-.9-2-2" />
    </svg>
  ),
  construction: (cls = 'w-5 h-5') => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="18" width="20" height="4" rx="1" />
      <path d="M9 18V8h6v10M4 18V12h3M17 18V12h3" />
      <path d="M2 8h20" />
      <path d="M12 2l10 6H2l10-6z" />
    </svg>
  ),
  wrench: (cls = 'w-5 h-5') => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  wood: (cls = 'w-5 h-5') => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M12 3C9 3 5 5 5 9c0 3 2 5 4 6M12 3c3 0 7 2 7 6 0 3-2 5-4 6" />
      <rect x="8" y="15" width="8" height="6" rx="1" />
    </svg>
  ),
  ship: (cls = 'w-5 h-5') => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20l1.5-1.5C5 17 7 17 8.5 18.5L10 20l1.5-1.5C13 17 15 17 16.5 18.5L18 20l1.5-1.5C21 17 22 17 23 18" />
      <path d="M4 15l8-9 8 9" />
      <path d="M12 6V3" />
    </svg>
  ),
  snowflake: (cls = 'w-5 h-5') => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
      <polyline points="9 2 12 5 15 2" />
      <polyline points="9 22 12 19 15 22" />
      <polyline points="2 9 5 12 2 15" />
      <polyline points="22 9 19 12 22 15" />
    </svg>
  ),
  building: (cls = 'w-5 h-5') => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="1" />
      <path d="M9 22V18h6v4" />
      <line x1="8" y1="6" x2="8" y2="6.01" />
      <line x1="12" y1="6" x2="12" y2="6.01" />
      <line x1="16" y1="6" x2="16" y2="6.01" />
      <line x1="8" y1="10" x2="8" y2="10.01" />
      <line x1="12" y1="10" x2="12" y2="10.01" />
      <line x1="16" y1="10" x2="16" y2="10.01" />
      <line x1="8" y1="14" x2="8" y2="14.01" />
      <line x1="12" y1="14" x2="12" y2="14.01" />
      <line x1="16" y1="14" x2="16" y2="14.01" />
    </svg>
  ),
  hospital: (cls = 'w-5 h-5') => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="12" y1="5" x2="12" y2="11" />
      <path d="M7 15h10M7 19h10" />
    </svg>
  ),
  cog: (cls = 'w-5 h-5') => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  ),
  arrows: (cls = 'w-5 h-5') => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 014-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 01-4 4H3" />
    </svg>
  ),
  ban: (cls = 'w-12 h-12') => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    </svg>
  ),
};

/* ── Applications inferred from category context ── */
const APPLICATION_MAP = {
  'tape-dispensers': [
    { icon: 'package', label: 'Packaging & Sealing', desc: 'Carton sealing, box closing, and parcel wrapping' },
    { icon: 'truck', label: 'Logistics & Shipping', desc: 'Secure packaging for transit and delivery' },
    { icon: 'factory', label: 'Manufacturing', desc: 'Production line packaging and labeling' },
    { icon: 'store', label: 'Retail & E-commerce', desc: 'Order fulfillment and product packaging' },
  ],
  'strapping-solutions': [
    { icon: 'package', label: 'Palletizing', desc: 'Heavy-duty pallet strapping and securing' },
    { icon: 'construction', label: 'Construction', desc: 'Bundling building materials and steel' },
    { icon: 'ship', label: 'Export & Shipping', desc: 'Container and cargo securing for transport' },
    { icon: 'factory', label: 'Industrial Manufacturing', desc: 'Production line bundling and unitizing' },
  ],
  'power-tools': [
    { icon: 'construction', label: 'Packaging & Shrinking', desc: 'Industrial heat shrinking and film wrapping' },
    { icon: 'wrench', label: 'Maintenance', desc: 'Paint stripping, adhesive curing, and drying' },
    { icon: 'wood', label: 'Plastic Welding', desc: 'Precision plastic shaping and pipe bending' },
    { icon: 'factory', label: 'Manufacturing', desc: 'High-temperature industrial heat application' },
  ],
  'nailing-stapling': [
    { icon: 'wood', label: 'Woodworking', desc: 'Furniture assembly and wood joinery' },
    { icon: 'package', label: 'Crate & Pallet Making', desc: 'Constructing shipping crates and pallets' },
    { icon: 'construction', label: 'Construction', desc: 'Framing, roofing, and finishing work' },
    { icon: 'factory', label: 'Manufacturing', desc: 'Upholstery and product assembly' },
  ],
  'packaging-consumables': [
    { icon: 'package', label: 'Packaging', desc: 'Wrapping, cushioning, and protecting goods' },
    { icon: 'truck', label: 'Logistics', desc: 'Safe transit and storage of products' },
    { icon: 'store', label: 'Retail', desc: 'Presentation packaging and protection' },
    { icon: 'snowflake', label: 'Cold Chain', desc: 'Insulated packaging for temperature-sensitive goods' },
  ],
  'facility-management': [
    { icon: 'building', label: 'Office & Facilities', desc: 'Workplace cleaning and maintenance' },
    { icon: 'factory', label: 'Industrial Sites', desc: 'Factory floor safety and hygiene' },
    { icon: 'hospital', label: 'Healthcare', desc: 'Medical facility safety equipment' },
    { icon: 'store', label: 'Retail Spaces', desc: 'Store maintenance and safety compliance' },
  ],
};

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const product = productIndex[productId];
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-gray-400 px-6">
        <div className="mb-4 opacity-40">{ICONS.ban('w-12 h-12')}</div>
        <div className="text-[13px] uppercase tracking-[.08em] mb-4 font-semibold">Product not found</div>
        <Link to="/products" className="text-accent text-[11px] uppercase tracking-[.08em] font-bold no-underline hover:underline">
          ← Back to Catalog
        </Link>
      </div>
    );
  }

  const similar = (product.similar || []).map((id) => productIndex[id]).filter(Boolean);
  const applications = APPLICATION_MAP[product.catId] || APPLICATION_MAP['strapping-solutions'];

  /* Parse description into bullet points if it has sentences */
  const descriptionBullets = product.description
    ? product.description.split(/\.\s+/).filter((s) => s.trim().length > 10).map((s) => s.trim().replace(/\.$/, ''))
    : [];

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
              <Link to="/" className="hover:text-accent no-underline shrink-0 font-medium">Home</Link>
              <span className="breadcrumb-sep shrink-0">›</span>
              <Link to="/products" className="hover:text-accent no-underline shrink-0 font-semibold">All Products</Link>
              <span className="breadcrumb-sep shrink-0">›</span>
              {product.catId && (
                <Link to={`/products?category=${product.catId}`} className="hover:text-accent no-underline shrink-0">
                  {product.catName}
                </Link>
              )}
              {product.subName && (
                <>
                  <span className="breadcrumb-sep shrink-0">›</span>
                  <span className="text-gray-500 shrink-0">{product.subName}</span>
                </>
              )}
              {product.nestedSubName && (
                <>
                  <span className="breadcrumb-sep shrink-0">›</span>
                  <span className="text-gray-500 shrink-0">{product.nestedSubName}</span>
                </>
              )}
              <span className="breadcrumb-sep shrink-0">›</span>
              <span className="text-black font-bold shrink-0 truncate">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 animate-fade-up">
          <div className="bg-gray-50 flex items-center justify-center min-h-[400px] border-b md:border-b-0 md:border-r border-gray-200 relative overflow-hidden">
            {product.badge && (
              <span className={`absolute top-4 left-4 text-[9px] px-3 py-1.5 tracking-[.1em] uppercase font-bold z-10 rounded-full ${getBadgeClass(product.badge)}`}>
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

            {/* Quick specs inline */}
            {product.specs && (
              <div className="flex flex-wrap gap-2 mb-6">
                {Object.entries(product.specs).slice(0, 4).map(([k, v]) => (
                  <span key={k} className="text-[10px] tracking-[.04em] font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {k}: <strong>{v}</strong>
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-2.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-accent text-white text-[11px] font-bold tracking-[.12em] uppercase no-underline hover:bg-accent-hover hover:-translate-y-0.5 transition-all rounded-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                  <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                </svg>
                Request Quote
              </Link>
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-gray-200 text-[11px] font-bold tracking-[.12em] uppercase hover:border-black transition-colors bg-white rounded-md cursor-pointer"
              >
                ← Back
              </button>
            </div>
          </div>
        </div>

        {/* ═══ SECTION 01: Product Details ═══ */}
        <section className="px-4 md:px-8 py-12 md:py-14">
          <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3 mb-7 pb-3.5 border-b-2 border-black">
            Product Details <span className="text-[11px] text-gray-400 font-light">01</span>
          </div>

          {/* Description — full width */}
          <div className="border border-gray-200 bg-white p-6 md:p-8 hover:shadow-md transition-shadow mb-6 rounded-lg">
            <div className="text-[12px] font-bold tracking-[.08em] uppercase mb-4 text-accent flex items-center gap-2">
              <span className="w-1 h-4 bg-accent inline-block rounded-sm" /> Description
            </div>
            <p className="text-[14px] text-gray-700 leading-[1.8] max-w-[820px] mb-4">{product.description}</p>

            {/* Features as bullet points */}
            {descriptionBullets.length > 1 && (
              <div className="mt-4 border-t border-gray-100 pt-4">
                <div className="text-[11px] font-bold tracking-[.08em] uppercase mb-3 text-gray-500">Key Features</div>
                <ul className="space-y-2">
                  {descriptionBullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[13px] text-gray-600 leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Specifications — table style */}
          <div className="border border-gray-200 bg-white hover:shadow-md transition-shadow rounded-lg overflow-hidden">
            <div className="px-6 md:px-8 py-4 border-b border-gray-200 bg-gray-50">
              <div className="text-[12px] font-bold tracking-[.08em] uppercase text-accent flex items-center gap-2">
                <span className="w-1 h-4 bg-accent inline-block rounded-sm" /> Technical Specifications
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {Object.entries(product.specs || {}).map(([k, v], i) => (
                <div
                  key={k}
                  className={`spec-row flex justify-between items-center px-6 md:px-8 py-4 text-[13px] ${
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

        {/* ═══ SECTION 02: Applications / Industries ═══ */}
        <section className="px-4 md:px-8 pb-12 md:pb-14">
          <div className="flex items-center gap-3 mb-7 pb-3.5 border-b-2 border-black">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 text-accent">
              {ICONS.factory()}
            </div>
            <div className="flex-1">
              <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3">
                Applications & Industries <span className="text-[11px] text-gray-400 font-light">02</span>
              </div>
              <p className="text-[12px] text-gray-500 mt-1">Industries and use cases where this product excels</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {applications.map((app, i) => (
              <div
                key={i}
                className="app-card border border-gray-200 bg-white p-6 rounded-lg text-center"
              >
                <div className="w-10 h-10 rounded-full bg-accent/[0.06] flex items-center justify-center mx-auto mb-3 text-accent">
                  {ICONS[app.icon] ? ICONS[app.icon]() : ICONS.factory()}
                </div>
                <div className="text-[12px] font-bold uppercase tracking-[.06em] mb-1.5 text-black">{app.label}</div>
                <p className="text-[11px] text-gray-500 leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ SECTION 03: Compatible Accessories / Consumables ═══ */}
        {product.consumables?.length > 0 && (
          <section className="px-4 md:px-8 pb-12 md:pb-14">
            <div className="flex items-center gap-3 mb-7 pb-3.5 border-b-2 border-black">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 text-accent">
                {ICONS.cog()}
              </div>
              <div className="flex-1">
                <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3">
                  Compatible Accessories <span className="text-[11px] text-gray-400 font-light">03</span>
                </div>
                <p className="text-[12px] text-gray-500 mt-1">Accessories and refills used with this product</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {product.consumables.map((c, i) => {
                /* check if consumable exists as a product in catalog */
                const linkedProduct = Object.values(productIndex).find(
                  (p) => p.sku === c.sku && p.id !== product.id
                );

                const Card = (
                  <div
                    key={i}
                    className={`group border border-gray-200 bg-white p-6 text-center rounded-lg hover:border-accent hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(230,0,35,0.08)] transition-all duration-300 ${linkedProduct ? 'cursor-pointer' : ''}`}
                  >
                    <div className="w-14 h-14 bg-accent/[0.08] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-all duration-300">
                      <span className="text-accent group-hover:text-white transition-colors">{ICONS.package()}</span>
                    </div>
                    <div className="text-[13px] font-bold uppercase tracking-[.02em] mb-1.5 text-black">{c.name}</div>
                    <div className="text-[10px] text-gray-400 tracking-[.06em] uppercase mb-2">{c.sku}</div>
                    {linkedProduct && (
                      <span className="text-[9px] text-accent font-bold uppercase tracking-[.06em]">
                        View Product →
                      </span>
                    )}
                  </div>
                );

                return linkedProduct ? (
                  <Link key={i} to={`/products/${linkedProduct.id}`} className="no-underline">
                    {Card}
                  </Link>
                ) : (
                  Card
                );
              })}
            </div>
          </section>
        )}

        {/* ═══ SECTION 04: Similar / Related Products ═══ */}
        {similar.length > 0 && (
          <section className="px-4 md:px-8 pb-12 md:pb-14">
            <div className="flex items-center gap-3 mb-7 pb-3.5 border-b-2 border-black">
              <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center shrink-0 text-black">
                {ICONS.arrows()}
              </div>
              <div className="flex-1">
                <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3">
                  Related Products <span className="text-[11px] text-gray-400 font-light">04</span>
                </div>
                <p className="text-[12px] text-gray-500 mt-1">Other products that complement or pair well with this one</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {similar.map((s) => (
                <Link
                  key={s.id}
                  to={`/products/${s.id}`}
                  className="group block rounded-xl border border-gray-200 bg-white overflow-hidden no-underline text-black hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-300"
                >
                  <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden p-4">
                    <img
                      src={s.imageUrl}
                      alt={s.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="p-4 border-t border-gray-100">
                    <div className="text-[10px] text-gray-400 tracking-[.06em] uppercase mb-1 font-semibold">{s.sku}</div>
                    <div className="text-[13px] font-bold uppercase tracking-[.02em] mb-1 leading-snug text-black group-hover:text-accent transition-colors line-clamp-2">
                      {s.name}
                    </div>
                    <div className="text-[11px] text-gray-500 leading-snug line-clamp-2 mb-2">{s.tagline}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-gray-400 tracking-[.06em] uppercase font-medium">{s.brand}</span>
                      <span className="text-[10px] text-accent font-bold uppercase tracking-[.08em] flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                        View <span>→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ═══ CTA BANNER ═══ */}
        <section className="mx-4 md:mx-8 mb-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 md:p-12 text-center animate-fade-up">
          <h3 className="text-[18px] md:text-[22px] font-bold text-white uppercase tracking-[.08em] mb-3">
            Interested in this product?
          </h3>
          <p className="text-[13px] text-gray-300 mb-6 max-w-lg mx-auto leading-relaxed">
            Contact our team for bulk pricing, technical specifications, or to schedule a product demonstration.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white text-[11px] font-bold tracking-[.12em] uppercase no-underline hover:bg-accent-hover hover:-translate-y-0.5 transition-all rounded-md"
            >
              Request a Quotation →
            </Link>
            <a
              href="tel:+918884746746"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white text-[11px] font-bold tracking-[.12em] uppercase no-underline hover:bg-white/10 transition-all rounded-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
              </svg>
              Call Us
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
