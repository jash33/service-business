/**
 * RSS Feed Generator
 * Generates an RSS 2.0 feed for blog articles.
 *
 * This endpoint serves the blog RSS feed at /blog/rss.xml
 */

import type { APIRoute } from 'astro';
import { BLOG_ARTICLES, RSS_FEED_CONFIG, sortArticlesByDate } from '../../config/blog.config';

/**
 * Escape XML special characters
 */
function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Format date to RFC 822 format for RSS
 */
function formatRFC822Date(dateString: string): string {
  const date = new Date(dateString);
  return date.toUTCString();
}

/**
 * Generate RSS feed XML
 */
function generateRSSFeed(): string {
  const sortedArticles = sortArticlesByDate(BLOG_ARTICLES);
  const latestArticle = sortedArticles[0];
  const lastBuildDate = latestArticle
    ? formatRFC822Date(latestArticle.publishedDate)
    : formatRFC822Date(new Date().toISOString());

  const items = sortedArticles
    .slice(0, 20) // Limit to 20 most recent articles
    .map((article) => {
      const articleUrl = `${RSS_FEED_CONFIG.siteUrl}/blog/${article.slug}`;
      const categories = [
        article.category,
        ...article.tags.map((tag) => tag.slug),
      ];

      return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${articleUrl}</link>
      <description><![CDATA[${article.excerpt}]]></description>
      <pubDate>${formatRFC822Date(article.publishedDate)}</pubDate>
      <guid isPermaLink="true">${articleUrl}</guid>
      <author>${escapeXml(article.author.name)}</author>
      ${categories.map((cat) => `<category>${escapeXml(cat)}</category>`).join('\n      ')}
      ${article.featuredImage ? `<enclosure url="${RSS_FEED_CONFIG.siteUrl}${article.featuredImage.src}" type="image/svg+xml" length="0"/>` : ''}
    </item>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(RSS_FEED_CONFIG.title)}</title>
    <description>${escapeXml(RSS_FEED_CONFIG.description)}</description>
    <link>${RSS_FEED_CONFIG.siteUrl}</link>
    <atom:link href="${RSS_FEED_CONFIG.feedUrl}" rel="self" type="application/rss+xml"/>
    <language>${RSS_FEED_CONFIG.language}</language>
    <copyright>${escapeXml(RSS_FEED_CONFIG.copyright)}</copyright>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <generator>Astro</generator>
    <docs>https://www.rssboard.org/rss-specification</docs>
    <image>
      <url>${RSS_FEED_CONFIG.siteUrl}/favicon.svg</url>
      <title>${escapeXml(RSS_FEED_CONFIG.title)}</title>
      <link>${RSS_FEED_CONFIG.siteUrl}</link>
    </image>
${items}
  </channel>
</rss>`;
}

export const GET: APIRoute = async () => {
  const rssContent = generateRSSFeed();

  return new Response(rssContent, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  });
};
