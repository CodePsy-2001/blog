import { PostCard } from 'nextra-theme-blog'
import { getPosts, getTags } from '../../posts/get-posts'
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: Promise<{ tag: string }>
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const tag = (await params).tag
  return {
    title: `“${decodeURIComponent(tag)}” 태그가 포함된 게시글`
  }
}

export async function generateStaticParams() {
  const allTags = await getTags()
  return [...new Set(allTags)].map(tag => ({ tag }))
}

export default async function TagPage({ params }: Props) {
  const tag = (await params).tag

  return (
    <>
      <h1>“{decodeURIComponent(tag)}” 태그가 포함된 게시글</h1>
      {(await getPosts())
        .filter(post =>
          post.frontMatter!.tags!.includes(tag)
        )
        .map(post => (
          <PostCard key={post.route} post={post} readMore="" />
        ))}
    </>
  )
}