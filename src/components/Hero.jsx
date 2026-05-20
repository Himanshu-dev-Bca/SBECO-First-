export default function Hero({ label, title, subtitle, children }) {
  return (
    <section className="bg-black text-white px-8 md:px-12 pt-16 md:pt-20 pb-14 md:pb-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[45%] h-full bg-gradient-to-br from-transparent via-transparent to-white/[0.03]" />
      {label && (
        <div className="text-[10px] tracking-[.2em] uppercase text-muted mb-3.5 relative z-10">
          {label}
        </div>
      )}
      <h1 className="text-4xl md:text-[52px] font-extrabold tracking-[.02em] uppercase leading-[1.05] mb-4 max-w-[700px] relative z-10">
        {title}
      </h1>
      {subtitle && (
        <p className="text-[15px] text-muted max-w-[540px] leading-[1.7] mb-8 relative z-10">
          {subtitle}
        </p>
      )}
      {children && <div className="relative z-10">{children}</div>}
    </section>
  );
}
