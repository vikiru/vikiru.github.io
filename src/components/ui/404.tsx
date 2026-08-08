import { siteConfig } from '@/config/site';
import { notFoundGraph } from '@/lib/seo/404Schema';
import { Link } from '@tanstack/react-router';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/lib/components/ui/button';

const {
  site: { url: siteUrl },
} = siteConfig;

export const NotFound = () => {
  const canonicalUrl = `${siteUrl}/404`;

  const graphLd = {
    ...notFoundGraph,
    url: canonicalUrl,
    name: '404 | Page Not Found',
    description: 'The page you are looking for does not exist.',
  };

  return (
    <Layout>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(graphLd),
        }}
        type="application/ld+json"
      />
      <main className="flex min-h-screen flex-col items-center justify-center px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-9xl space-y-4 text-center">
          <div>
            <p className="text-h1 font-bold tracking-tight font-heading text-primary">
              404
            </p>
          </div>

          <div>
            <h1 className="text-h2 font-bold tracking-tight font-heading text-foreground">
              Page Not Found
            </h1>
          </div>

          <div>
            <p className="text-muted-foreground body-base">
              The page you are looking for does not exist.
            </p>

            <Link
              to="/"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus-visible:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Go Home
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
};

