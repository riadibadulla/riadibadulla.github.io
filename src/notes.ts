import { getCollection } from 'astro:content';

// Published notes, newest first. Files whose names start with "_" (such as
// _example-note.md) are still schema-checked at build time but never published.
export async function getNotes() {
  const notes = await getCollection('notes', (note) => !note.filePath?.split('/').pop()?.startsWith('_'));
  return notes.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
