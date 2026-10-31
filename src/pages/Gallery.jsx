import Hero from '../components/Hero';
import { GALLERY_IMAGE_PATHS } from '../data/galleryImages';

const CATEGORY_LABELS = {
  Consumables: 'Packaging Consumables',
  'Facility Management': 'Facility Management',
  Images: 'Power Tools',
  'nailing&Stapling': 'Nailing & Stapling',
  'Tape-dispensers': 'Tape Dispensers',
  tapes: 'Tapes & Films',
  'Weldy heat guns': 'Heat Guns',
};

const GALLERY_IMAGES = GALLERY_IMAGE_PATHS.map((path) => {
  const segments = path.split('/');
  const fileName = segments[segments.length - 1];
  const title = fileName.replace(/\.[^.]+$/, '').replace(/[-_=]+/g, ' ');
  const category = CATEGORY_LABELS[segments[0]] || 'Product Range';

  return {
    src: `/images/${segments.map(encodeURIComponent).join('/')}`,
    title,
    category,
  };
});

export default function Gallery() {
  return (
    <>
      <Hero
        label="Gallery · Super Bright Labs"
        title={<>A closer look<br />at our range.</>}
        subtitle="Explore the products and equipment we bring together for better, more reliable work."
      />

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-10" aria-labelledby="gallery-heading">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-8 flex flex-col gap-3 border-b border-gray-200 pb-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[.2em] text-accent">The SBECO selection</p>
              <h2 id="gallery-heading" className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                Product gallery
              </h2>
            </div>
            <p className="text-sm text-gray-600">
              {GALLERY_IMAGES.length} products · Browse the collection
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5 2xl:grid-cols-5">
            {GALLERY_IMAGES.map((image) => (
              <figure
                key={image.src}
                className="group overflow-hidden rounded-sm border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_14px_36px_rgba(17,24,39,.09)]"
              >
                <div className="aspect-square overflow-hidden bg-[#f7f8fa] p-4 sm:p-6">
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="min-h-[76px] border-t border-gray-100 px-3 py-3 sm:px-4">
                  <p className="line-clamp-2 text-xs font-semibold leading-5 text-black sm:text-sm">
                    {image.title}
                  </p>
                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-[.12em] text-gray-400">
                    {image.category}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
