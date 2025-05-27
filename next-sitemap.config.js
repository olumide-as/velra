/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://velra.co.uk', // replace with your domain
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin'], // optional
};