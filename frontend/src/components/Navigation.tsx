import NavLink from '@/components/NavLink'
import { useRouter } from 'next/router'
import { FC } from 'react'
import ApplicationLogo from '@/components/ApplicationLogo'
import Link from 'next/link'

const Navigation: FC<{ user }> = ({ user }) => {
    const router = useRouter()
    return (
        <div className="sticky top-0 z-40 w-full flex-none">
            <div className="mx-auto max-w-8xl">
                <div className="mx-4 border-b border-slate-900/10 py-4 dark:border-slate-300/10 lg:mx-0 lg:border-0 lg:px-8">
                    <div className="relative flex items-center">
                        <h1>
                            <Link href="/">
                                <a>
                                    <span className="sr-only">
                                        Justin.ly Homepage
                                    </span>
                                    <ApplicationLogo className="w-[88px] text-white" />
                                </a>
                            </Link>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation
