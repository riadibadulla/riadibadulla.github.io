import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getNotes } from '../../notes';
import { SITE } from '../../site';

export async function GET(context: APIContext) {
  const notes = await getNotes();
  return rss({
    title: `Technical Notes | ${SITE.name}`,
    description: 'Independent technical reviews of AI companies’ public work.',
    site: context.site!,
    customData: '<language>en-gb</language>',
    items: notes.map((note) => ({
      title: note.data.title,
      description: note.data.summary,
      pubDate: note.data.date,
      link: `/notes/${note.id}/`,
    })),
  });
}
