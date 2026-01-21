import { Link } from '@tanstack/react-router';
import sitemap from '@/data/sitemap';

function SitemapSection() {
  return (
    <section
      className="min-h-[80vh] xs:pt-6 lg:py-12 6xl:mt-10 7xl:py-16"
      id="sitemap"
    >
      <div className="xs:mx-4 xs:mb-2 lg:mb-6 2xl:mb-8 4xl:mb-10 5xl:mb-12 6xl:mb-16 10xl:mx-10 11xl:mb-24">
        <h2 className="h2-text text-center text-light-text-900 dark:text-dark-text-800">
          Sitemap
        </h2>
      </div>

      {/* Sitemap Content*/}
      {sitemap.map((group) => (
        <section
          className="8xl:pb-18 mx-4 lg:pb-6 3xl:pb-8 4xl:pb-10 5xl:pb-12 6xl:pb-14 7xl:pb-16 10xl:mx-10 11xl:mx-14"
          id={group.category.toLowerCase()}
          key={group.category}
        >
          <h3 className="h3-text text-light-text-900 dark:text-dark-text-800">
            {group.category}
          </h3>
          <div className="9xl:my-18 border-t border-gray-300 xs:my-2 lg:my-4 3xl:my-6 4xl:my-8 5xl:my-10 6xl:my-12 7xl:my-14 8xl:my-16 dark:border-dark-background-600" />
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {group.items.map((item) => (
              <section id={item.name.toLowerCase()} key={item.name}>
                <Link className="sitemap-link" to={item.url}>
                  {item.name}
                </Link>
              </section>
            ))}
          </div>
          <div className="my-8" />
        </section>
      ))}
    </section>
  );
}

export default SitemapSection;
