import Head from 'next/head'
import { useAuth } from '@/hooks/auth'
import Navigation from '@/components/Layouts/Navigation'

export default function Home() {
    const { user } = useAuth()
    return (
        <div className="h-full">
            <Head>
                <title>Blog | justin.ly</title>
            </Head>
            <Navigation user={user} />
        </div>
    )
}
