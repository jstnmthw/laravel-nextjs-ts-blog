import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/auth'
import useSWR from 'swr'
import axios from '@/lib/axios'
import Head from 'next/head'
import Navigation from '@/components/Layouts/Navigation'
import Hero from '@/components/Blog/hero'

const Post = () => {
    const router = useRouter()
    const { post } = router.query
    const { user } = useAuth()

    const { data, error } = useSWR(post ? '/api/blog/' + post : null, () => {
        return axios.get(`/api/blog/${post}`).then(res => res.data)
    })
    const article = data ? data : []
    const loading = !data && !error

    return (
        <div className="relative h-full">
            <Head>
                <title>Blog - justin.ly</title>
            </Head>
            <Navigation user={user} />
            <main className="min-h-full overflow-auto bg-top">
                {loading ? (
                    <div>Loading</div>
                ) : (
                    <>
                        <Hero
                            title={article.title}
                            subtitle={article.description}
                        />
                        <div className="mx-auto max-w-2xl px-5">
                            <p>{article.body}</p>
                        </div>
                    </>
                )}
            </main>
        </div>
    )
}
export default Post
