import { useEffect } from 'react';

export function useMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;

    const metaDescription =
      document.querySelector('meta[name="description"]') ||
      document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', description);
    if (!metaDescription.parentNode) {
      document.head.appendChild(metaDescription);
    }
  }, [title, description]);
}
