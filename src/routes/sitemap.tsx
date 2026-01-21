import { createFileRoute } from '@tanstack/react-router';
import SitemapPage from '@/components/sections/Sitemap';

export const Route = createFileRoute('/sitemap')({
  component: SitemapPage,
});
