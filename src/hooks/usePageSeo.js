import { useEffect } from 'react';

const upsertMeta = (selector, attrs) => {
  let node = document.head.querySelector(selector);

  if (!node) {
    node = document.createElement('meta');
    Object.entries(attrs).forEach(([key, value]) => {
      if (key !== 'content') {
        node.setAttribute(key, value);
      }
    });
    document.head.appendChild(node);
  }

  if (attrs.content) {
    node.setAttribute('content', attrs.content);
  }
};

function usePageSeo(seo) {
  useEffect(() => {
    if (!seo) {
      return;
    }

    document.title = seo.title;

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: seo.description,
    });

    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: seo.title,
    });

    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: seo.description,
    });

    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    });
  }, [seo]);
}

export default usePageSeo;
