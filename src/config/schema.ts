import type { Person, SoftwareSourceCode, WebSite } from 'schema-dts';
import { siteConfig } from '@/config/site';

export const {
  site: { title, description, url: siteUrl, lastModified },
  author: {
    name,
    alternateName,
    firstName,
    lastName,
    jobTitle,
    portfolioWebsite,
    githubProfile,
    linkedinProfile,
    universityName,
    universityUrl,
    universityLogo,
  },
  project: { githubRepo, version, programmingLanguage, license, keywords },
} = siteConfig;

export const personId = `${portfolioWebsite}/#person`;
export const softwareId = `${githubRepo}/#software`;
export const homepageId = `${siteUrl}/#homepage`;

export const personLd: Person = {
  '@type': 'Person',
  '@id': personId,
  name,
  alternateName,
  givenName: firstName,
  familyName: lastName,
  jobTitle,
  url: portfolioWebsite,
  sameAs: [githubProfile, linkedinProfile],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: universityName,
    url: universityUrl,
    logo: universityLogo,
  },
};

export const softwareLd: SoftwareSourceCode = {
  '@type': 'SoftwareSourceCode',
  '@id': softwareId,
  name: 'Visakan Kirubakaran Portfolio',
  description: 'The source code for my personal portfolio website.',
  url: githubRepo,
  author: { '@id': personId },
  maintainer: { '@id': personId },
  keywords: keywords,
  version: version,
  programmingLanguage: programmingLanguage,
  license: license,
  codeRepository: githubRepo,
  runtimePlatform: ['Node.js', 'Web', 'Browser'],
};

export const homepageLd: WebSite = {
  '@type': 'WebSite',
  '@id': homepageId,
  name: title,
  description: description,
  url: `${siteUrl}/`,
  creator: { '@id': personId },
  license: license,
  inLanguage: 'en',
  dateModified: lastModified.toISOString(),
  about: { '@id': softwareId },
  mainEntity: { '@id': personId },
};

export const homeData = [softwareLd, homepageLd];

export const homepageGraphSchema = {
  '@context': 'https://schema.org',
  '@graph': [personLd, ...homeData],
};
