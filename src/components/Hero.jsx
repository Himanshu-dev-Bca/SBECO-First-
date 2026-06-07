export default function Hero({ label, title, subtitle, children, image }) {
  return (
    <section className="bg-black text-white relative overflow-hidden flex flex-col justify-center min-h-[400px]">
      {/* Background Image with Netflix-style gradient blend */}
      {image && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 w-full md:w-3/4 lg:w-2/3 h-full right-0 ml-auto">
            <img src={image} alt="Background" className="w-full h-full object-cover opacity-60" />
            {/* The blend gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
          </div>
        </div>
      )}
      
      {/* Default Subtle Gradient if no image */}
      {!image && (
        <div className="absolute top-0 right-0 w-[45%] h-full bg-gradient-to-br from-transparent via-transparent to-white/[0.03] z-0" />
      )}

      {/* Content */}
      <div className="px-8 md:px-12 pt-16 md:pt-24 pb-14 md:pb-20 relative z-10 w-full animate-fade-up">
        {label && (
          <div className="text-[10px] tracking-[.2em] uppercase text-muted mb-3.5">
            {label}
          </div>
        )}
        <h1 className="text-4xl md:text-[52px] font-extrabold tracking-[.02em] uppercase leading-[1.05] mb-4 max-w-[700px]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[15px] text-muted max-w-[540px] leading-[1.7] mb-8">
            {subtitle}
          </p>
        )}
        {children && <div>{children}</div>}
      </div>
    </section>
  );
}
