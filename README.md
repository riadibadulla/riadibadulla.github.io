# riadibadulla.com

Source for [riadibadulla.com](https://riadibadulla.com), the site of Dr Riad Ibadulla. Built with [Astro](https://astro.build) as a fully static site and hosted on Cloudflare Pages.

## Run it locally

You need Node.js 22.12 or later (`node -v` to check).

```bash
npm install        # first time only
npm run dev        # live-reloading site at http://localhost:4321
```

Before pushing, check that the production build works:

```bash
npm run build      # builds the site into dist/ and stops on any content error
npm run preview    # serves dist/ at http://localhost:4321
npm run check      # optional: type-checks the code
```

## Where things live

| What | Where |
| --- | --- |
| Name, emails, social links, nav | `src/site.ts` |
| The seven review criteria | `src/criteria.ts` |
| Technical Notes | `src/content/notes/` |
| Publications | `src/content/publications/<slug>/index.md` |
| Pages (home, services, about, contact) | `src/pages/` |
| Styles (one file, light and dark mode) | `src/styles/global.css` |
| Profile photo | `src/assets/profile.jpg` |
| PDFs, CV, favicon, social image | `public/` (served as is) |
| Redirects from old URLs | `public/_redirects` |

Anything marked `TODO` on the site (yellow label) or in a file still needs content. Find them all with `grep -rni todo src`.

## Add a new Technical Note

1. Copy the template:
   ```bash
   cp src/content/notes/_example-note.md src/content/notes/acme-vision-2026.md
   ```
   The file name becomes the address: `/notes/acme-vision-2026/`. Use lower case and hyphens. Do not start it with `_`, because files starting with `_` are never published.
2. Open the new file and replace every `PLACEHOLDER` value in the frontmatter (the block between the `---` lines):
   - `title`, `company`, `date` (`YYYY-MM-DD`), `summary` (one or two sentences, also used in search results and RSS).
   - `reviewed_artefacts`: one list item per artefact reviewed (repositories with commit, papers, model cards and so on).
   - `weighting`: how the criteria were weighted for this company and why. It is shown above the score table.
   - `scores`: all seven criteria must be present. Each has a `score` from 0 to 10 (decimals are fine) or the exact text `'not assessable'`, and a one-line `justification`.
   - `overall_score`: 0 to 10.
   - `recommended_engagement`: for example `'Adversarial robustness audit'`.
   - `pdf` (optional): put the PDF in `public/files/notes/` and set `pdf: '/files/notes/acme-vision-2026.pdf'`. Delete the line if there is no PDF.
3. Replace the placeholder body text under the frontmatter with the note itself, in Markdown.
4. Run `npm run dev` and open `http://localhost:4321/notes/` to check it. If a field is missing or wrong, the terminal names the file and the field.
5. Run `npm run build`, then commit and push. The note appears on the home page, the notes index and the RSS feed (`/notes/rss.xml`) automatically.

## Add a publication

1. Create a folder named after the paper, for example `src/content/publications/my-paper/`, containing an `index.md`. Copying an existing one (such as `fatnet/index.md`) is the easiest start.
2. Fill in the frontmatter:
   - Required: `title`, `authors` (list, your name is bolded automatically), `venue`, `date`, `type` (`journal`, `conference` or `workshop`), `summary` (two or three plain-English sentences), `doi` (without `https://doi.org/`).
   - Optional links: `open_access` with `open_access_label` (for example an arXiv or City Research Online page), `code` (GitHub URL), `bibtex`, `pdf`.
   - Optional figure: put an image (`.jpg`, `.png` or `.webp`) in the same folder, then set `figure: './figure.jpg'`, plus `figure_alt` (describe what the image shows) and `figure_caption`. It is resized automatically.
   - Optional `short_title`: shown on the thumbnail when there is no figure. Defaults to the part of the title before a colon.
   - Optional `body_heading`: heading above the body text. Defaults to `Abstract`.
3. Put the abstract in the body under the frontmatter.
4. To host a PDF or BibTeX file, put it in `public/files/publications/my-paper/` and set `pdf: '/files/publications/my-paper/paper.pdf'` (or `bibtex:`). Check the publisher allows you to host the PDF first.
5. `npm run build`, commit, push. Papers are listed newest first by `date`.

## Update the CV

Replace `public/files/Riad_Ibadulla_CV.pdf` with the new file, keeping the same name. Remove the phone number first, because the file is public.

## How deployment works

The site is hosted on Cloudflare Pages, connected to this GitHub repository.

- Every push to `master` triggers a build on Cloudflare (`npm run build`), and the contents of `dist/` go live at https://riadibadulla.com within a minute or two.
- Pushes to other branches build a preview at a separate `*.pages.dev` address, without touching the live site.
- If a build fails (for example a note with a missing field), the live site stays on the previous version. The error is in the Cloudflare dashboard under the project's Deployments tab.
- There is no server and no database. Everything is static HTML, CSS, images and PDFs.

Build settings, for reference: build command `npm run build`, output directory `dist`, Node version from `.nvmrc` (22).
