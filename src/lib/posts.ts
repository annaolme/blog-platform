import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'content/posts')

export interface PostMeta {
    slug: string
    title: string
    date: string
    description: string
    tags: string[]
}

export function getAllPosts(): PostMeta[] {
    const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'))
    const posts = files.map(file => {
        const slug = file.replace('.mdx', '')
        const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8')
        const { data } = matter(raw)
        return {
            slug,
            title: data.title || slug,
            date: data.date || '',
            description: data.description || '',
            tags: data.tags || []
        }
    })
    return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPost(slug: string) {
    const file = path.join(postsDir, slug + '.mdx')
    if (!fs.existsSync(file)) return null
    const raw = fs.readFileSync(file, 'utf-8')
    const { data, content } = matter(raw)
    return { meta: { slug, ...data } as PostMeta, content }
}
