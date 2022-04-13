import Head from 'next/head'
import { useAuth } from '@/hooks/auth'
import Navigation from '@/components/Layouts/Navigation'
import Hero from '@/components/Blog/hero'
import useSWR from 'swr'
import axios from '@/lib/axios'
import BlogArticle from '@/components/Blog/blog-article'

export default function Home() {
    const { user } = useAuth()

    const { data } = useSWR('/api/blog', () => {
        return axios.get('/api/blog').then(res => res.data)
    })
    const articles = data ? [].concat(...data.data) : []

    return (
        <div className="relative h-full">
            <Head>
                <title>Blog - justin.ly</title>
            </Head>
            <Navigation user={user} />
            <main className="min-h-full overflow-auto bg-top bg-no-repeat pt-[53px] dark:bg-blog">
                <Hero />
                <div className="mx-auto max-w-4xl px-5">
                    {/*<pre className="max-w-4xl overflow-auto text-sm">*/}
                    {/*    {JSON.stringify(articles, null, 2)}*/}
                    {/*</pre>*/}
                    {articles.map(article => {
                        return <BlogArticle data={article} key={article.id} />
                    })}
                </div>
            </main>
        </div>
    )
}

export const BlogData = {
    success: true,
    data: [
        {
            id: 1,
            title: "L'Maecenas feugiat egestas dolor ac fermentum.",
            description:
                'Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras lacinia risus nisi, vitae vehicula leo scelerisque in. In non mollis leo, at cursus metus. Fusce dapibus mauris eget eleifend laoreet. Praesent ac dolor ac erat blandit porta vel id tortor. Suspendisse sed tellus convallis, bibendum tellus sit amet, dignissim est.',
            url: '/blog/category/how-to-ipsum',
            published: 'April 20, 20224',
        },
        {
            id: 2,
            title: 'Lorium ipsum dolor devuon mounti.',
            description:
                'Sed ultricies, nisl ac bibendum accumsan, mauris urna suscipit orci, a varius tellus mi id ligula. Donec fermentum purus in ultrices molestie. Donec tempor vulputate tellus eget feugiat.',
            url: '/blog/category/how-to-ipsum',
            published: 'January 6, 2022',
        },
        {
            id: 3,
            title: 'Nunc aliquam cursus ipsum, vitae lobortis neque.',
            description:
                'Pellentesque ultrices massa eu finibus bibendum. Phasellus efficitur neque vitae justo hendrerit blandit nec at lectus. Nam viverra turpis non mauris eleifend porttitor. ',
            url: '/blog/category/how-to-ipsum',
            published: 'December 25, 2021',
        },
    ],
    errorMessage: undefined,
}
