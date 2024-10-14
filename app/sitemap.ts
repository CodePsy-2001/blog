import { MetadataRoute } from 'next'
import { getPosts } from './posts/get-posts'

// @see https://witch.work/posts/blog-nextjs-sitemap-generation

const defaultSitemap: MetadataRoute.Sitemap = [
  {
    url: 'https://codepsy2001.blog',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1
  },
  {
    url: 'https://codepsy2001.blog/posts',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8
  }
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()

  const postsSitemap: MetadataRoute.Sitemap = posts.map((post) => {
    return {
      url: 'https://codepsy2001.blog' + post.route,
      lastModified: new Date(post.frontMatter.date!),
      changeFrequency: 'daily',
      priority: 0.7
    }
  })

  return [...defaultSitemap, ...postsSitemap]
}