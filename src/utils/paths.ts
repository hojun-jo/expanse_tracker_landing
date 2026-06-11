export function withBase(path = '') {
  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const normalizedPath = path.replace(/^\/+/, '');

  return normalizedPath ? `${normalizedBase}${normalizedPath}` : normalizedBase;
}

export function resolveHref(href: string) {
  if (!href || href === '/') {
    return withBase();
  }

  if (
    href.startsWith('#') ||
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:')
  ) {
    return href;
  }

  return withBase(href);
}
