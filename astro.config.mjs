import { defineConfig } from 'astro/config';

function getGitHubPagesConfig() {
  const repository = process.env.GITHUB_REPOSITORY;

  if (!repository) {
    return {
      base: '/',
      site: undefined,
    };
  }

  const [owner, repo] = repository.split('/');

  if (!owner || !repo) {
    return {
      base: '/',
      site: undefined,
    };
  }

  const isUserSite = repo === `${owner}.github.io`;

  return {
    base: isUserSite ? '/' : `/${repo}`,
    site: `https://${owner}.github.io`,
  };
}

const pages = getGitHubPagesConfig();

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  publicDir: './assets',
  ...(pages.site ? { site: pages.site } : {}),
  base: process.env.BASE_PATH ?? pages.base,
});
