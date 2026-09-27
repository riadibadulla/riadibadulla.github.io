---
# EXAMPLE NOTE. This file is ignored by the build because its name starts with "_".
# To publish a note: copy it to a new file such as "acme-vision-2026.md" (no leading
# underscore), replace every value below, then run `npm run build` to check it.
# The file name becomes the URL: /notes/acme-vision-2026/

title: 'PLACEHOLDER: Review of Example Co’s open-source vision model'
company: 'PLACEHOLDER Example Co'
date: 2026-01-01
summary: 'PLACEHOLDER: one or two sentences saying what was reviewed and the headline finding.'
reviewed_artefacts:
  - 'PLACEHOLDER: GitHub repository example-co/model (commit abc1234)'
  - 'PLACEHOLDER: Technical report "Example Model v1" (PDF, 2026)'
  - 'PLACEHOLDER: Public model card on Hugging Face'
weighting: 'PLACEHOLDER: explain how the criteria were weighted for this company and why, e.g. robustness and privacy weighted double because the product is used in a regulated setting.'
scores:
  architecture:
    score: 0
    justification: 'PLACEHOLDER: one line explaining this score.'
  code_quality:
    score: 0
    justification: 'PLACEHOLDER: one line explaining this score.'
  robustness:
    score: 0
    justification: 'PLACEHOLDER: one line explaining this score.'
  efficiency:
    score: 0
    justification: 'PLACEHOLDER: one line explaining this score.'
  data_privacy:
    score: 'not assessable'
    justification: 'PLACEHOLDER: e.g. no information about training data was published.'
  documentation:
    score: 0
    justification: 'PLACEHOLDER: one line explaining this score.'
  deployment:
    score: 0
    justification: 'PLACEHOLDER: one line explaining this score.'
overall_score: 0
recommended_engagement: 'PLACEHOLDER: e.g. Adversarial robustness audit'
# Optional. Put the PDF in public/files/notes/ and give its path here, or delete the line.
pdf: '/files/notes/PLACEHOLDER.pdf'
---

PLACEHOLDER: the body of the note, in Markdown. Suggested sections:

## Context

What the company does and what it has published.

## Findings

The main observations behind the scores, with links to the artefacts.

## Recommendations

What the company could do next.
