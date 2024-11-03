import type { BlogMetadata } from 'nextra-theme-blog'
import type { Page } from 'nextra'
import { getPageMap } from 'nextra/page-map'

type PostPage = Page & { frontMatter: BlogMetadata & { tags?: string[] } }

export async function getPosts() {
  const { pageMap } = await getPageMap() as { pageMap: (Page & { children: PostPage[] })[] }

  const postPage = pageMap.find((item) => item.route === '/posts')! as Page & { children: PostPage[] }

  return postPage.children.filter(post => !post.frontMatter.draft && post.name !== 'index')
    .sort((a, b) => (new Date(b.frontMatter.date ?? 0)).getTime() - (new Date(a.frontMatter.date ?? 0)).getTime())
}

export const getTags = async () =>
  (await getPosts()).flatMap(post => post.frontMatter.tags!)