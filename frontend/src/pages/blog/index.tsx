import Head from 'next/head'
import { useAuth } from '@/hooks/auth'
import Navigation from '@/components/Layouts/Navigation'
import Hero from '@/components/Blog/hero'
import useSWR from 'swr'
import axios from '@/lib/axios'
import BlogArticle from '@/components/Blog/blog-article'
import BlogArticleLoader from '@/components/Blog/blog-article-loader'
import { BlogPost } from '@/types/blog'

export default function Home() {
    const { user } = useAuth()

    const { data, error } = useSWR('/api/blog', () => {
        return axios.get('/api/blog').then(res => res.data)
    })
    const articles = (data ? [].concat(...data.data) : []) as BlogPost[]
    const loading = !data && !error

    return (
        <div className="relative h-full">
            <Head>
                <title>Blog - justin.ly</title>
            </Head>
            <Navigation user={user} />
            <main className="min-h-full overflow-auto bg-top">
                <Hero
                    title={'Blog'}
                    subtitle={'Scribblings from a full stack developer.'}
                />
                <div className="mx-auto max-w-4xl px-5">
                    {loading ? (
                        <BlogArticleLoader count={10} />
                    ) : (
                        articles.map(article => {
                            return (
                                <BlogArticle data={article} key={article.id} />
                            )
                        })
                    )}
                </div>
            </main>
        </div>
    )
}
