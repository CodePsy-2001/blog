import { PostCard } from 'nextra-theme-blog'
import { getPosts, getTags } from '../../posts/get-posts'

type PageProps = {
  params: { tag: string }
}

export function generateMetadata({ params }: PageProps) {
  return {
    title: `“${decodeURIComponent(params.tag)}” 태그가 포함된 게시글`
  }
}

export async function generateStaticParams() {
  const allTags = await getTags()
  return [...new Set(allTags)].map(tag => ({ tag }))
}

export default async function TagPage({ params }: PageProps) {
  return (
    <>
      <h1>{generateMetadata({ params }).title}</h1>
      {(await getPosts())
        .filter(post =>
          post.frontMatter!.tags!.includes(decodeURIComponent(params.tag))
        )
        .map(post => (
          <PostCard key={post.route} post={post} readMore="" />
        ))}
    </>
  )
}