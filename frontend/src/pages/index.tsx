import Head from 'next/head'
import { useAuth } from '@/hooks/auth'
import Navigation from '@/components/Layouts/Navigation'

export default function Home() {
    const { user } = useAuth()
    return (
        <div className="relative h-full">
            <Head>
                <title>Blog - justin.ly</title>
            </Head>
            <Navigation user={user} />
            <main className="min-h-full overflow-auto bg-top bg-no-repeat pt-[53px] dark:bg-blog" />
        </div>
    )
}
