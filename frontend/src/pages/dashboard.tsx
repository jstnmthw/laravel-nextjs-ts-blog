import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'

const Dashboard = () => {
    return (
        <AppLayout>
            <Head>
                <title>Dashboard - jstn.ly</title>
            </Head>

            <div className="mt-16 py-5">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <div className="rounded-lg border-b border-gray-200 bg-white p-6 dark:border-t dark:border-b-0 dark:border-gray-700 dark:bg-gray-800/80">
                            You&apos;re logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Dashboard
