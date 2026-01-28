import { IoHome } from 'react-icons/io5';
import { Button } from '@/lib/components/ui/button';

export function NotFound() {
  const title = 'Visakan Kirubakaran | 404 Not Found';
  const description = 'The page you are looking for does not exist.';
  const canonicalUrl =
    typeof window !== 'undefined' ? window.location.href : '';

  const graphLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#404`,
        url: canonicalUrl,
        name: title,
        description,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(graphLd)}</script>

      <main aria-labelledby="not-found-heading" className="w-full">
        <div className="text-center py-8 sm:py-12 md:py-16 lg:py-20">
          <h1
            className="heading-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6"
            id="not-found-heading"
          >
            404
          </h1>
          <p
            aria-describedby="not-found-description"
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 md:mb-8 mx-auto px-4"
          >
            {description}
          </p>
          <Button
            aria-label="Go to the home page"
            asChild
            className="mx-auto"
            variant="secondary"
          >
            <a href="/">
              <IoHome aria-hidden="true" className="mr-2 size-icon-sm" />
              Go Home
            </a>
          </Button>
        </div>
      </main>
    </>
  );
}
