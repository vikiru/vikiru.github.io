import { createFileRoute } from '@tanstack/react-router';
import Layout from '@/components/layout/Layout';
import SitemapSection from '@/components/sections/SitemapSection';

export const Route = createFileRoute('/sitemap')({
  component: SitemapPage,
});

function SitemapPage() {
  return (
    <Layout
      description="Explore a comprehensive list of all pages on this portfolio website."
      title="Visakan Kirubakaran | Sitemap"
    >
      <SitemapSection />
    </Layout>
  );
}
