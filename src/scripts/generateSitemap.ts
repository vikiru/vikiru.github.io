import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { siteConfig } from '@/config/site';
import { projectData } from '@/data/projects';
import { sitemap } from '@/data/sitemap';
import { lastmodFor } from '@/lib/seo/lastmod';
import type { SitemapGroup } from '@/types/SitemapGroup';

const HOST_NAME = siteConfig.site.url;
const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const targetPath = path.resolve(scriptDir, '../..', 'public', 'sitemap.xml');
const llmsTargetPath = path.resolve(scriptDir, '../..', 'public', 'llms.txt');

function constructItems(sitemapUrls: SitemapGroup[]) {
  const urls = sitemapUrls.flatMap((group) => {
    return group.items.map((item) => {
      return `${HOST_NAME}${item.url}`;
    });
  });

  const items: { loc: string; lastmod: string; priority: number }[] = [];
  for (const url of urls) {
    const pathname = new URL(url).pathname;
    const isHome = url === `${HOST_NAME}/`;
    items.push({
      loc: url,
      lastmod: lastmodFor(pathname),
      priority: isHome ? 1.0 : 0.5,
    });
  }
  return items;
}

function constructSitemap(
  items: { loc: string; lastmod: string; priority: number }[],
) {
  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  sitemapContent += items
    .map((item) => {
      return `
            <url>
                <loc>${item.loc}</loc>
                <lastmod>${item.lastmod}</lastmod>
                <priority>${item.priority}</priority>
            </url>`;
    })
    .join('');
  sitemapContent += `\n\t</urlset>`;
  return sitemapContent;
}

function constructLlmsIndex() {
  const projects = projectData.projects.filter((project) => !project.hidden);
  const lines = [
    '# Visakan Kirubakaran',
    '',
    `> ${siteConfig.site.description}`,
    '',
    '## Pages',
    '',
    `- [Home](${HOST_NAME}/): ${siteConfig.site.description}`,
    `- [Courses](${HOST_NAME}/education/courses): University courses taken during a Bachelor of Software Engineering at Carleton University.`,
    `- [Sitemap](${HOST_NAME}/sitemap): Visual index of all pages on the site.`,
    '',
    '## Projects',
    '',
  ];
  for (const project of projects) {
    lines.push(
      `- [${project.name}](${HOST_NAME}${project.projectPageUrl}): ${project.description}`,
    );
  }
  return `${lines.join('\n')}\n`;
}

const items = constructItems(sitemap);
const sitemapContent = constructSitemap(items);
//  const llmsContent = constructLlmsIndex();

fs.writeFile(targetPath, sitemapContent, (err) => {
  if (err) {
    console.error('Error generating sitemap:', err);
  } else {
    console.log(
      `Sitemap has been generated successfully and saved to: ${targetPath}`,
    );
  }
});

fs.writeFile(llmsTargetPath, llmsContent, (err) => {
  if (err) {
    console.error('Error generating llms.txt:', err);
  } else {
    console.log(
      `llms.txt has been generated successfully and saved to: ${llmsTargetPath}`,
    );
  }
});
