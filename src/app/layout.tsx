import './globals.css'
import Link from 'next/link'
export const metadata = { title: 'Blog', description: 'A minimal blog platform' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-white text-gray-900 antialiased">
                <nav className="border-b px-6 py-4 max-w-3xl mx-auto flex justify-between items-center">
                    <Link href="/" className="text-lg font-bold">blog.</Link>
                    <div className="flex gap-4 text-sm text-gray-500">
                        <Link href="/" className="hover:text-gray-900">Posts</Link>
                        <Link href="/about" className="hover:text-gray-900">About</Link>
                    </div>
                </nav>
                <main className="max-w-3xl mx-auto px-6 py-8">{children}</main>
                <footer className="max-w-3xl mx-auto px-6 py-8 text-sm text-gray-400 border-t">
                    Built with Next.js and MDX
                </footer>
            </body>
        </html>
    )
}
