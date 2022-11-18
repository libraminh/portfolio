const postFields = `
  _id,
  title,
  date,
  excerpt,
  coverImage,
  url,
  content,
  "slug": slug.current,
`;

const projectFields = `
  _id,
  title,
  date,
  url,
  content,
  "slug": slug.current,
`;

export const indexQuery = `
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`;

export const experiencesQuery = `
*[_type == "experiences"] | order(date desc, _updatedAt desc)`;

export const projectsQuery = `
*[_type == "projects"] | order(date desc, _updatedAt desc)`;

export const projectsSlugsQuery = `
*[_type == "projects" && defined(slug.current)][].slug.current
`;

export const projectQuery = `
{
  "project": *[_type == "projects" && slug.current == $slug] [0] {
    content,
    ${projectFields}
  }
}`;

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  }
}`;

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;

export const postUpdatedQuery = `*[_type == "post" && _id == $id].slug.current`;

const snippetFields = `
  _id,
  title,
  description,
  logo,
  "slug": slug.current,
`;

export const allSnippetsQuery = `
*[_type == "snippet"] | order(date desc, _updatedAt desc) {
  ${snippetFields}
}`;

export const snippetsQuery = `
{
  "snippet": *[_type == "snippet" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${snippetFields}
  }
}`;

export const snippetSlugsQuery = `
*[_type == "snippet" && defined(slug.current)][].slug.current
`;

export const snippetBySlugQuery = `
*[_type == "snippet" && slug.current == $slug][0] {
  ${snippetFields}
}
`;
