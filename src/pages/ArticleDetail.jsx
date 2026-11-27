import { useCallback, useEffect, useRef } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import Hero from '../components/Hero';
import { ARTICLES, getArticleBySlug } from '../data/articles';

export default function ArticleDetail() {
  const { articleSlug } = useParams();
  const article = getArticleBySlug(articleSlug);
  const activeSlug = article?.slug;
  const navigate = useNavigate();
  const carouselRef = useRef(null);
  const scrollTimerRef = useRef(null);
  const activeSlugRef = useRef(article?.slug);
  const hasMountedRef = useRef(false);

  const scrollToArticle = useCallback((slug, behavior = 'smooth') => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const slide = Array.from(carousel.children).find(
      (child) => child.dataset.articleSlug === slug
    );
    if (!slide) return;

    const carouselBounds = carousel.getBoundingClientRect();
    const slideBounds = slide.getBoundingClientRect();
    const left = carousel.scrollLeft
      + slideBounds.left
      + slideBounds.width / 2
      - carouselBounds.left
      - carouselBounds.width / 2;
    if (Math.abs(carousel.scrollLeft - left) < 1) return;

    if (behavior === 'auto') {
      carousel.scrollLeft = left;
    } else {
      carousel.scrollTo({ left, behavior });
    }
  }, []);

  const handleCarouselScroll = useCallback(() => {
    window.clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = window.setTimeout(() => {
      const carousel = carouselRef.current;
      if (!carousel) return;

      const center = carousel.getBoundingClientRect().left + carousel.clientWidth / 2;
      let closestSlide = null;
      let closestDistance = Infinity;

      Array.from(carousel.children).forEach((slide) => {
        const slideCenter = slide.getBoundingClientRect().left + slide.clientWidth / 2;
        const distance = Math.abs(center - slideCenter);
        if (distance < closestDistance) {
          closestSlide = slide;
          closestDistance = distance;
        }
      });

      const nextSlug = closestSlide?.dataset.articleSlug;
      if (nextSlug && nextSlug !== activeSlugRef.current) {
        navigate(`/articles/${nextSlug}`, {
          replace: true,
          state: { preserveScroll: true },
        });
      }
    }, 180);
  }, [navigate]);

  useEffect(() => {
    if (!activeSlug) return;
    activeSlugRef.current = activeSlug;
    scrollToArticle(activeSlug, hasMountedRef.current ? 'smooth' : 'auto');
    hasMountedRef.current = true;
  }, [activeSlug, scrollToArticle]);

  useEffect(() => () => window.clearTimeout(scrollTimerRef.current), []);

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  const currentIndex = ARTICLES.findIndex((item) => item.slug === article.slug);

  return (
    <>
      <Hero
        label={`Articles · ${article.badge}`}
        title={<>{article.title}</>}
        subtitle={article.desc}
        image="/images/pallet-belts.png"
      />

      <div className="px-4 sm:px-8 md:px-12 pt-6 pb-2">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-[11px] text-gray-400 tracking-[.06em] uppercase">
          <Link to="/" className="hover:text-accent transition-colors no-underline text-gray-400">Home</Link>
          <span>→</span>
          <Link to="/articles" className="hover:text-accent transition-colors no-underline text-gray-400">Articles</Link>
          <span>→</span>
          <span className="text-black font-semibold">{article.badge}</span>
        </div>
      </div>

      <section className="px-4 sm:px-8 md:px-12 py-10" aria-label="Article viewer">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-semibold tracking-[.1em] uppercase text-gray-400">
              Article {currentIndex + 1} of {ARTICLES.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous article"
                disabled={currentIndex === 0}
                onClick={() => scrollToArticle(ARTICLES[currentIndex - 1].slug)}
                className="w-9 h-9 border border-gray-200 bg-white text-gray-600 hover:border-black hover:text-black disabled:opacity-40 disabled:cursor-not-allowed"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next article"
                disabled={currentIndex === ARTICLES.length - 1}
                onClick={() => scrollToArticle(ARTICLES[currentIndex + 1].slug)}
                className="w-9 h-9 border border-gray-200 bg-white text-gray-600 hover:border-black hover:text-black disabled:opacity-40 disabled:cursor-not-allowed"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            onScroll={handleCarouselScroll}
            role="region"
            aria-label="All articles"
            tabIndex={0}
            className="article-carousel article-main-carousel flex"
          >
            {ARTICLES.map((item) => {
              const isActive = item.slug === article.slug;

              return (
                <article
                  key={item.slug}
                  data-article-slug={item.slug}
                  aria-current={isActive ? 'page' : undefined}
                  className={`shrink-0 snap-center border bg-white ${
                    isActive ? 'border-accent' : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-gray-100 bg-gray-100">
                    <span className="text-[10px] font-bold tracking-[.1em] uppercase text-gray-400">{item.date}</span>
                    <span className="text-[9px] bg-accent text-white px-2.5 py-0.5 tracking-[.1em] uppercase font-bold">{item.badge}</span>
                  </div>

                  <div className="px-6 md:px-10 py-8 md:py-10">
                    <h2 className="text-lg md:text-xl font-bold uppercase tracking-[.04em] leading-snug mb-6">
                      {item.title}
                    </h2>

                    <div className="flex gap-2 mb-8 flex-wrap">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-[9px] tracking-[.08em] uppercase px-2.5 py-1 border border-gray-200 text-gray-600 font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {item.image && (
                      <figure className="mb-8">
                        <img
                          src={item.image}
                          alt={item.imageAlt}
                          loading={isActive ? 'eager' : 'lazy'}
                          className="w-full max-h-[28rem] object-contain bg-gray-50 p-6"
                        />
                        <figcaption className="mt-2 text-[11px] text-gray-500">
                          {item.imageAlt}
                        </figcaption>
                      </figure>
                    )}

                    <p className="text-[15px] text-gray-700 leading-[1.85] mb-8">
                      {item.desc}
                    </p>

                    {item.sections ? (
                      <div className="space-y-7">
                        {item.sections.map((section) => (
                          <section key={section.heading}>
                            <h3 className="text-[14px] font-bold tracking-[.08em] uppercase mb-2">
                              {section.heading}
                            </h3>
                            <p className="text-[14px] text-gray-700 leading-[1.85]">
                              {section.body}
                            </p>
                          </section>
                        ))}
                      </div>
                    ) : (
                      <div className="border border-dashed border-gray-300 bg-gray-50 px-6 py-8">
                        <div className="text-[10px] font-bold tracking-[.12em] uppercase text-gray-400 mb-2">
                          Content coming soon
                        </div>
                        <p className="text-[13px] text-gray-600 leading-relaxed">
                          This article page is ready. Full copy, images, and details will be added here next.
                        </p>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-8 md:px-12 pb-14">
        <div className="max-w-5xl mx-auto">
          <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3 mb-7 pb-3.5 border-b-2 border-black">
            More Articles <span className="text-[11px] text-gray-400 font-light">{ARTICLES.length}</span>
          </div>
          <div
            role="region"
            aria-label="Browse other articles"
            tabIndex={0}
            className="article-carousel flex gap-5 pb-5"
          >
            {ARTICLES.map((item) => {
              const isActive = item.slug === article.slug;

              return (
                <Link
                  key={item.slug}
                  to={`/articles/${item.slug}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(event) => {
                    if (isActive) {
                      event.preventDefault();
                      scrollToArticle(item.slug);
                    }
                  }}
                  className={`basis-[calc(50%-0.625rem)] shrink-0 snap-start border bg-white overflow-hidden hover:border-black hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,.06)] transition-all no-underline text-inherit ${
                    isActive ? 'border-accent ring-1 ring-accent' : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between px-3 sm:px-5 py-4 border-b border-gray-100 bg-gray-100">
                    <span className="text-[10px] font-bold tracking-[.1em] uppercase text-gray-400">{item.date}</span>
                    <span className="text-[9px] bg-accent text-white px-2.5 py-0.5 tracking-[.1em] uppercase font-bold">{item.badge}</span>
                  </div>
                  <div className="p-3 sm:p-5">
                    <h3 className="text-[12px] sm:text-[14px] font-bold uppercase tracking-[.04em] mb-2 leading-snug">{item.title}</h3>
                    <p className="text-[11px] sm:text-[12px] text-gray-600 leading-relaxed line-clamp-3">{item.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-10">
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 text-[11px] tracking-[.08em] uppercase font-semibold text-gray-600 hover:text-accent transition-colors no-underline"
            >
              ← Back to All Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
