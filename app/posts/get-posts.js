import { getPageMap } from 'nextra/page-map'

export async function getPosts () {
  const pageMap = await getPageMap()

  const postPages = pageMap.find((item) => item.route === '/posts').children.filter(post => !post.frontMatter.draft && post.name !== 'index')

  return postPages
    .sort((a, b) => (new Date(b.frontMatter.date ?? 0)).getTime() - (new Date(a.frontMatter.date ?? 0)).getTime())
}

export const getTags = async () =>
  (await getPosts()).flatMap(post => post.frontMatter.tags)