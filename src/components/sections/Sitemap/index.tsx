import { createElement } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { LuFolder, LuHouse, LuStar, LuUser } from 'react-icons/lu';
import Layout from '@/components/layout/Layout';
import { featuredProjects, otherProjects } from '@/data/projects';
import { SitemapCard } from './SitemapCard';
import { SitemapGrid } from './SitemapGrid';
import { SitemapSection } from './SitemapSection';
import { SitemapSubheading } from './SitemapSubheading';

const sitemapData = {
  core: [
    { title: 'Home', path: '/', icon: LuHouse },
    { title: 'About Me', path: '/about', icon: LuUser },
    { title: 'Contact', path: '/contact', icon: LuUser },
  ],
  socials: [
    {
      title: 'GitHub',
      path: 'https://github.com/vikiru',
      icon: FaGithub,
      label: '@vikiru',
    },
    {
      title: 'LinkedIn',
      path: 'https://linkedin.com/in/viskirubakaran',
      icon: FaLinkedin,
      label: 'in/viskirubakaran',
    },
  ],
};

export default function SitemapPage() {
  return (
    <Layout
      description="Visual overview of the portfolio structure"
      title="Visakan Kirubakaran | Sitemap"
    >
      <div className="flex flex-1 justify-center py-10 px-4 md:px-10 lg:px-12 xl:px-40">
        <div className="layout-content-container flex flex-col w-full flex-1 gap-8">
          <header className="flex flex-col gap-3 pb-4 border-b border-border">
            <h1 className="heading-1 text-foreground">Sitemap</h1>
            <p className="body-base text-muted-foreground">
              Visual overview of my portfolio website structure and all
              available links within the site and any relevant external links.
            </p>
          </header>

          <div className="flex flex-col gap-10">
            <SitemapSection title="CORE">
              <SitemapGrid cols={4}>
                {sitemapData.core.map((item) => (
                  <SitemapCard
                    href={item.path}
                    icon={createElement(item.icon, { className: 'size-5' })}
                    key={item.path}
                    path={item.path}
                    title={item.title}
                  />
                ))}
              </SitemapGrid>
            </SitemapSection>

            <SitemapSection title="PROJECTS">
              <div className="flex flex-col gap-6">
                <SitemapSubheading title="Featured Projects" />
                <SitemapGrid cols={3}>
                  {featuredProjects.map((project) => (
                    <SitemapCard
                      href={project.projectPageUrl}
                      icon={createElement(LuStar, { className: 'size-5' })}
                      key={project.slug}
                      path={`/projects/${project.slug}`}
                      title={project.name}
                    />
                  ))}
                </SitemapGrid>

                <div className="pt-4">
                  <SitemapSubheading title="Other Projects" />
                </div>
                <SitemapGrid cols={3}>
                  {otherProjects.map((project) => (
                    <SitemapCard
                      href={project.projectPageUrl}
                      icon={createElement(LuFolder, { className: 'size-5' })}
                      key={project.slug}
                      path={`/projects/${project.slug}`}
                      title={project.name}
                    />
                  ))}
                </SitemapGrid>
              </div>
            </SitemapSection>

            <SitemapSection title="SOCIALS & META">
              <SitemapGrid cols={3}>
                {sitemapData.socials.map((item) => (
                  <SitemapCard
                    href={item.path}
                    icon={createElement(item.icon, { className: 'size-5' })}
                    key={item.title}
                    label={item.label}
                    path={item.path}
                    title={item.title}
                  />
                ))}
              </SitemapGrid>
            </SitemapSection>
          </div>
        </div>
      </div>
    </Layout>
  );
}
