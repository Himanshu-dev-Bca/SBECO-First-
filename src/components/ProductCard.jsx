import { Link } from 'react-router-dom';

export default function ProductCard({ product, index = 0 }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="product-card group block rounded-2xl overflow-hidden border border-gray-200 bg-white no-underline transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(230,0,35,0.08)] hover:border-accent/30 animate-fade-up"
      style={{ animationDelay: `${Math.min(index, 16) * 0.04}s` }}
      id={`product-card-${product.id}`}
    >
      {/* Image area */}
      <div className="relative aspect-square flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100 p-5">
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
        />
        {product.badge && (
          <span className="absolute top-3 right-3 text-[8px] bg-accent/90 text-white px-2.5 py-1 tracking-[.08em] uppercase font-bold rounded-full backdrop-blur-sm">
            {product.badge}
          </span>
        )}

        {/* Quick view overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 text-[10px] font-bold tracking-[.1em] uppercase text-white bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full">
            View Details
          </span>
        </div>
      </div>

      {/* Info area */}
      <div className="px-4 py-4 border-t border-gray-100">
        <h3 className="text-[13px] font-semibold text-slate-900 leading-snug line-clamp-2 mb-1.5 group-hover:text-accent transition-colors duration-200">
          {product.name}
        </h3>
        {product.tagline && (
          <p className="text-[11px] text-gray-400 leading-relaxed line-clamp-2 mb-2">
            {product.tagline}
          </p>
        )}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-[9px] text-gray-400 tracking-[.06em] uppercase font-medium">
            {product.brand}
          </span>
          <span className="text-[10px] text-gray-400 group-hover:text-accent transition-colors flex items-center gap-1">
            View <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
