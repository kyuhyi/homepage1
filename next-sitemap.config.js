/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ai-vibecoding.vercel.app',
  generateRobotsTxt: false, // robots.txt는 이미 public/에 수동으로 생성했으므로 false
  generateIndexSitemap: false, // 단일 페이지 랜딩이므로 index sitemap 불필요
  changefreq: 'weekly',
  priority: 1.0,
  sitemapSize: 7000,
  exclude: ['/api/*'], // API 경로 제외
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  // 추가 경로가 필요한 경우 여기에 명시
  additionalPaths: async (config) => {
    return [
      await config.transform(config, '/'),
    ];
  },
}
