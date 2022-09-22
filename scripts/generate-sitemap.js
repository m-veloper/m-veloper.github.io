const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const pages = await globby([
    // include
    'pages/**/*.tsx',
    'pages/*.tsx',
    // exclude
    '!pages/_*.tsx',
  ]);

  const YOUR_AWESOME_DOMAIN = 'https://issuenow.vercel.app';

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace('pages/', '')
                  .replace('.tsx', '')
                  .replace(/\/index/g, '');
                const route = path === '/index' ? '' : path;
                if (page === `pages/404.tsx`) {
                  return;
                }
                return `
                        <url>
                            <loc>${YOUR_AWESOME_DOMAIN}/${route}</loc>
                        </url>
                    `;
              })
              .join('')}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  // eslint-disable-next-line no-sync
  fs.writeFileSync('public/sitemap.xml', formatted);
})();
