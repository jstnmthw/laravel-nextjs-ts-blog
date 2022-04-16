import Head from 'next/head'
import React from 'react'

const GuestLayout = ({ children }: { children: React.ReactElement | null }) => {
    return (
        <div>
            <Head>
                <title>Guest Layout | justin.ly</title>
            </Head>

            <div className="font-sans text-gray-900 antialiased">
                {children}
            </div>
        </div>
    )
}

export default GuestLayout
