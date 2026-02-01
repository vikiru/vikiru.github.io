import { siteConfig } from '@/config/site';
import { notFoundGraph } from '@/lib/seo/404Schema';

const {
  site: { url: siteUrl },
} = siteConfig;

export const NotFound = () => {
  const canonicalUrl = `${siteUrl}/404`;
  const title = '404 | Page Not Found';
  const description = 'The page you are looking for does not exist.';

  const graphLd = notFoundGraph;

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphLd) }}
        type="application/ld+json"
      />
      <div className="flex h-[calc(100vh-var(--header-height))] flex-col items-center justify-center bg-background text-foreground">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-3xl font-semibold">Page Not Found</h2>
        <p className="mt-2 text-muted-foreground">
          The page you are looking for does not exist.
        </p>
        <a
          className="mt-8 rounded-lg bg-primary px-6 py-3 text-primary-foreground transition-colors hover:bg-primary/90"
          href="/"
        >
          Go Home
        </a>
      </div>
    </>
  );
};
