import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
    const posts = getAllPosts()

    return (
        <div>
            <h1 className="text-3xl font-bold mb-2">Posts</h1>
            <p className="text-gray-500 mb-8">Thoughts on web development, design, and more.</p>
            {posts.length === 0 ? (
                <p className="text-gray-400">No posts yet.</p>
            ) : (
                <div className="flex flex-col gap-6">
                    {posts.map(post => (
                        <article key={post.slug} className="group">
                            <Link href={'/blog/' + post.slug} className="block">
                                <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">{post.title}</h2>
                                <p className="text-gray-500 text-sm mt-1">{post.date}</p>
                                <p className="text-gray-600 mt-2">{post.description}</p>
                                <div className="flex gap-2 mt-2">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-500">{tag}</span>
                                    ))}
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            )}
        </div>
    )
}
