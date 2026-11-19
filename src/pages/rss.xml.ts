import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { PROFILE } from '../data/profile';

export async function GET(context: APIContext) {
  const posts = (await getCollection('writing', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf()
  );

  return rss({
    title: `${PROFILE.name} — Writing`,
    description: PROFILE.bio,
    site: context.site ?? `https://${PROFILE.domain}`,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedAt,
      description: post.data.description,
      link: `/writing/${post.id}/`,
    })),
  });
}
