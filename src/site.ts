// Single source of truth for names, contact details and profile links.

export const SITE = {
  name: 'Dr Riad Ibadulla',
  shortName: 'Riad Ibadulla',
  tagline: 'Independent technical review and advice for AI systems',
  description:
    'Dr Riad Ibadulla reviews and advises on AI systems: efficient deep learning architectures, adversarial robustness, computer vision and privacy. Lecturer in Computer Science at City St George’s, University of London.',
  url: 'https://riadibadulla.com',
  locale: 'en_GB',
};

export const CONTACT = {
  email: 'riadibadulla@gmail.com',
  universityEmail: 'riad.ibadulla.2@city.ac.uk',
  linkedin: 'https://www.linkedin.com/in/riadibadulla/',
};

export const PROFILES = [
  { label: 'LinkedIn', href: CONTACT.linkedin },
  { label: 'GitHub', href: 'https://github.com/riadibadulla' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=KHdEW9oAAAAJ&hl=en' },
  { label: 'ORCID', href: 'https://orcid.org/0000-0002-0359-0830' },
  { label: 'X', href: 'https://x.com/riad_ibadulla' },
];

export const NAV = [
  { label: 'Technical Notes', href: '/notes/' },
  { label: 'Services', href: '/services/' },
  { label: 'Publications', href: '/publications/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export const CV_PATH = '/files/Riad_Ibadulla_CV.pdf';

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
