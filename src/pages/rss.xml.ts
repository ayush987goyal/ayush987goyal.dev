import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { PROFILE, PUBLISHED_WRITING } from '../data/profile';

export async function GET(context: APIContext) {
  const localPosts = (await getCollection('writing', ({ data }) => !data.draft)).map((post) => ({
    title: post.data.title,
    pubDate: post.data.publishedAt,
    description: post.data.description,
    link: `/writing/${post.id}`,
  }));

  const externalPosts = PUBLISHED_WRITING.map((item) => ({
    title: item.title,
    pubDate: new Date(item.publishedAt),
    description: `${item.venue} (${item.role}) — ${item.summary}`,
    link: item.url,
  }));

  const items = [...localPosts, ...externalPosts].sort(
    (a, b) => b.pubDate.valueOf() - a.pubDate.valueOf()
  );

  return rss({
    title: `${PROFILE.name} — Writing`,
    description: PROFILE.metaDescription,
    site: context.site ?? `https://${PROFILE.domain}`,
    items,
  });
}
