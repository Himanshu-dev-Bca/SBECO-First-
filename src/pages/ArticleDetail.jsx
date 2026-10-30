import { Link, Navigate, useParams } from 'react-router-dom';
import Hero from '../components/Hero';
import { getArticleBySlug, getRelatedArticles } from '../data/articles';

export default function ArticleDetail() {
  const { articleSlug } = useParams();
  const article = getArticleBySlug(articleSlug);

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  const related = getRelatedArticles(article.slug);

  return (
    <>
      <Hero
        label={`Articles · ${article.badge}`}
        title={<>{article.title}</>}
        subtitle={article.desc}
      />

      <div className="px-8 md:px-12 pt-6 pb-2">
        <div className="flex items-center gap-2 text-[11px] text-gray-400 tracking-[.06em] uppercase">
          <Link to="/" className="hover:text-accent transition-colors no-underline text-gray-400">Home</Link>
          <span>→</span>
          <Link to="/articles" className="hover:text-accent transition-colors no-underline text-gray-400">Articles</Link>
          <span>→</span>
          <span className="text-black font-semibold">{article.badge}</span>
        </div>
      </div>

      <article className="px-8 md:px-12 py-10">
        <div className="max-w-3xl border border-gray-200 bg-white">
          <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-gray-100 bg-gray-100">
            <span className="text-[10px] font-bold tracking-[.1em] uppercase text-gray-400">{article.date}</span>
            <span className="text-[9px] bg-accent text-white px-2.5 py-0.5 tracking-[.1em] uppercase font-bold">{article.badge}</span>
          </div>

          <div className="px-6 md:px-10 py-10">
            <div className="flex gap-2 mb-8 flex-wrap">
              {article.tags.map((tag) => (
                <span key={tag} className="text-[9px] tracking-[.08em] uppercase px-2.5 py-1 border border-gray-200 text-gray-600 font-semibold">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-[15px] text-gray-700 leading-[1.85] mb-6">
              {article.desc}
            </p>

            <div className="border border-dashed border-gray-300 bg-gray-50 px-6 py-8">
              <div className="text-[10px] font-bold tracking-[.12em] uppercase text-gray-400 mb-2">
                Content coming soon
              </div>
              <p className="text-[13px] text-gray-600 leading-relaxed">
                This article page is ready. Full copy, images, and details will be added here next.
              </p>
            </div>
          </div>
        </div>
      </article>

      <section className="px-8 md:px-12 pb-14">
        <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3 mb-7 pb-3.5 border-b-2 border-black">
          More Articles <span className="text-[11px] text-gray-400 font-light">{related.length}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((item) => (
            <Link
              key={item.slug}
              to={`/articles/${item.slug}`}
              className="border border-gray-200 bg-white overflow-hidden hover:border-black hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,.06)] transition-all no-underline text-inherit"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gray-100">
                <span className="text-[10px] font-bold tracking-[.1em] uppercase text-gray-400">{item.date}</span>
                <span className="text-[9px] bg-accent text-white px-2.5 py-0.5 tracking-[.1em] uppercase font-bold">{item.badge}</span>
              </div>
              <div className="p-5">
                <h3 className="text-[14px] font-bold uppercase tracking-[.04em] mb-2 leading-snug">{item.title}</h3>
                <p className="text-[12px] text-gray-600 leading-relaxed line-clamp-3">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 text-[11px] tracking-[.08em] uppercase font-semibold text-gray-600 hover:text-accent transition-colors no-underline"
          >
            ← Back to All Articles
          </Link>
        </div>
      </section>
    </>
  );
}
