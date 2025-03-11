import 'module-alias/register';
import fs from 'fs';
import moment from 'moment';
import path from 'path';
import { sitemap } from '~data/index';
import { SitemapGroup } from '~types/index';

const HOST_NAME = 'https://vikiru.vercel.app';
const currentDate = Date.now();
const targetPath = path.resolve(__dirname, '../..', 'public', 'sitemap.xml');

function constructItems(sitemapUrls: SitemapGroup[]) {
    const urls = sitemapUrls
        .map((group) => {
            return group.items.map((item) => {
                return `${HOST_NAME}${item.url}`;
            });
        })
        .flat();

    const items: { loc: string; lastmod: string; priority: number }[] = [];
    for (const url of urls) {
        const isHome = url === `${HOST_NAME}/`;
        items.push({
            loc: url,
            lastmod: moment(currentDate).format('YYYY-MM-DD'),
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

const items = constructItems(sitemap);
const sitemapContent = constructSitemap(items);

fs.writeFile(targetPath, sitemapContent, (err) => {
    if (err) {
        console.error('Error generating sitemap:', err);
    } else {
        console.log(
            `Sitemap has been generated successfully and saved to: ${targetPath}`,
        );
    }
});
