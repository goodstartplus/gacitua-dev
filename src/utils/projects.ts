import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;
export type ProjectLocale = 'en' | 'pt';

const byOrderAndYearDesc = (a: Project, b: Project) => {
  if (a.data.order !== b.data.order) return a.data.order - b.data.order;
  return b.data.year - a.data.year;
};

export async function getProjectsByLocale(locale: ProjectLocale) {
  const projects = await getCollection('projects', ({ data }) => !data.draft && data.locale === locale);
  return projects.sort(byOrderAndYearDesc);
}

export async function getFeaturedProjects(locale: ProjectLocale) {
  const projects = await getProjectsByLocale(locale);
  return projects.filter((project) => project.data.featured);
}

export async function getProjectBySlug(locale: ProjectLocale, slug: string) {
  const projects = await getProjectsByLocale(locale);
  return projects.find((project) => project.data.slug === slug);
}

export async function getProjectsByType(locale: ProjectLocale, type: Project['data']['type']) {
  const projects = await getProjectsByLocale(locale);
  return projects.filter((project) => project.data.type === type);
}