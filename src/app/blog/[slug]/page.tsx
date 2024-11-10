import { getPost, getAllPosts } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
    return getAllPosts().map(p => ({ slug: p.slug }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = getPost(params.slug)
    if (!post) notFound()

    return (
        <article>
            <Link href="/" className="text-sm text-gray-400 hover:text-gray-600">← Back to posts</Link>
            <h1 className="text-3xl font-bold mt-4 mb-2">{post.meta.title}</h1>
            <p className="text-gray-500 text-sm mb-8">{post.meta.date}</p>
            <div className="prose">
                <MDXRemote source={post.content} />
            </div>
            <div className="flex gap-2 mt-8 pt-6 border-t">
                {post.meta.tags.map(tag => (
                    <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500">{tag}</span>
                ))}
            </div>
        </article>
    )
}
