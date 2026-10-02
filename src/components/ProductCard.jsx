import { Link } from 'react-router-dom';

export default function ProductCard({ product, index = 0 }) {
  /* pick first 3 spec entries for preview */
  const specEntries = product.specs
    ? Object.entries(product.specs).slice(0, 3)
    : [];

  return (
    <div
      className="product-card group rounded-2xl overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(230,0,35,0.08)] hover:border-accent/30 animate-fade-up flex flex-col"
      style={{ animationDelay: `${Math.min(index, 16) * 0.04}s` }}
      id={`product-card-${product.id}`}
    >
      {/* Image area */}
      <Link to={`/products/${product.id}`} className="block no-underline">
        <div className="relative aspect-square flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100 p-5">
          <img
            src={product.img}
            alt={product.name}
            loading="lazy"
            className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
          />

          {/* Quick view overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 text-[10px] font-bold tracking-[.1em] uppercase text-white bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full">
              View Details
            </span>
          </div>
        </div>
      </Link>

      {/* Info area */}
      <div className="px-4 py-4 border-t border-gray-100 flex flex-col flex-1">
        <Link to={`/products/${product.id}`} className="no-underline">
          <h3 className="text-[13px] font-semibold text-slate-900 leading-snug line-clamp-2 mb-1.5 group-hover:text-accent transition-colors duration-200">
            {product.name}
          </h3>
        </Link>
        {product.tagline && (
          <p className="text-[11px] text-gray-400 leading-relaxed line-clamp-2 mb-2">
            {product.tagline}
          </p>
        )}

        {/* Specs preview pills */}
        {specEntries.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {specEntries.map(([key, val]) => (
              <span
                key={key}
                className="text-[8px] tracking-[.04em] uppercase font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full whitespace-nowrap"
              >
                {key}: {val}
              </span>
            ))}
          </div>
        )}

        {/* Bottom row with brand + buttons */}
        <div className="mt-auto pt-3 border-t border-gray-50 flex items-center gap-2">
          <span className="text-[9px] text-gray-400 tracking-[.06em] uppercase font-medium mr-auto">
            {product.brand}
          </span>
          <Link
            to={`/products/${product.id}`}
            className="text-[9px] font-bold tracking-[.06em] uppercase text-white bg-accent px-3 py-1.5 rounded-md no-underline hover:bg-accent-hover transition-colors"
          >
            Details
          </Link>
          <Link
            to="/contact"
            className="text-[9px] font-bold tracking-[.06em] uppercase text-accent bg-accent/8 px-3 py-1.5 rounded-md no-underline hover:bg-accent/15 transition-colors border border-accent/20"
          >
            Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
