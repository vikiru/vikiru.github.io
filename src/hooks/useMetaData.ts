import { useEffect } from 'react';

export function useMetaData(
  title: string,
  description: string,
  url: string = window.location.href,
) {
  useEffect(() => {
    document.title = title;

    let descriptionTag = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.setAttribute('name', 'description');
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute('content', description);

    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
    ];

    ogTags.forEach((tag) => {
      let element = document.querySelector<HTMLMetaElement>(
        `meta[property="${tag.property}"]`,
      );
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', tag.property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', tag.content);
    });

    const twitterTags = [
      { property: 'twitter:title', content: title },
      { property: 'twitter:description', content: description },
    ];

    twitterTags.forEach((tag) => {
      let element = document.querySelector<HTMLMetaElement>(
        `meta[property="${tag.property}"]`,
      );
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', tag.property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', tag.content);
    });
  }, [title, description, url]);
}
