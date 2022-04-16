import Link from 'next/link'
import DarkModeButton from '@/components/DarkModeButton'
import ApplicationLogo from '@/components/ApplicationLogo'
import Modal from '@/components/Modal'
import React, { useEffect, useState} from 'react'
import { GitHubIcon } from '@/components/Icons'
import { DotsVerticalIcon } from '@heroicons/react/solid'
import { useAuth } from '@/hooks/auth'
import { User } from '@/types/auth'

const Navigation = ({ user }: { user: User }) => {
    const { logout } = useAuth()
    const [open, setOpen] = useState(false)
    const [scrollTop, setScrollTop] = useState(0)

    useEffect(() => {
        const onScroll = (e: Event) => {
            setScrollTop((e.target as Document)?.documentElement.scrollTop)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [scrollTop])

    return (
        <nav
            className={
                (scrollTop
                    ? 'bg-white backdrop-blur-sm dark:bg-navy-900/50 md:bg-navy-900/10 '
                    : '') +
                'fixed top-0 z-10 w-full flex-none border-b border-slate-900/10 py-4 px-4 transition-all dark:border-slate-300/10'
            }>
            {/* Primary Navigation Menu */}
            <div className="mx-auto max-w-8xl">
                <div className="lg:px-8">
                    <div className="relative flex items-center sm:justify-center">
                        {/* Logo */}
                        <div className="flex items-center">
                            <h1>
                                <Link href="/">
                                    <a title="Justin.ly">
                                        <span className="text-green sr-only text-green-500">
                                            Justin.ly homepage
                                        </span>
                                        <ApplicationLogo className="block w-6 fill-current text-gray-900 dark:text-white" />
                                    </a>
                                </Link>
                            </h1>

                            {user &&
                                <span className="ml-5 text-[14px] text-gray-600">
                                Hello, {user?.name}
                            </span>
                            }
                        </div>

                        {/* Settings Dropdown */}
                        <div className="relative ml-auto hidden items-center lg:flex">
                            <div className="hidden sm:flex">
                                <div className="mr-2.5 border-r border-gray-200 pr-2.5 dark:border-white/10">
                                    <Link href={'/blog'}>
                                        <a className="inline-flex items-center px-2.5 text-sm font-semibold opacity-75 transition-opacity hover:opacity-100">
                                            Blog
                                        </a>
                                    </Link>
                                    {user ? (
                                        <button
                                            onClick={logout}
                                            className="hover-opacity-100 inline-flex items-center px-2.5 text-sm font-semibold opacity-75 transition-opacity">
                                            Logout
                                        </button>
                                    ) : (
                                        <Link href="/login">
                                            <a
                                                title="Login"
                                                className="inline-flex items-center px-2.5 text-sm font-semibold opacity-75 transition-opacity hover:opacity-100">
                                                Login
                                            </a>
                                        </Link>
                                    )}
                                </div>
                                <DarkModeButton
                                    iconOnly={true}
                                    className="inline-flex items-center px-2.5 opacity-70 transition-opacity hover:opacity-100"
                                />
                                <Link href="#">
                                    <a
                                        title="My Github"
                                        className="inline-flex items-center px-2.5 opacity-70 transition-opacity hover:opacity-100">
                                        <GitHubIcon className="h-5 w-5" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        <div className="ml-auto flex items-center sm:block lg:hidden">
                            <button
                                onClick={() => setOpen(open => !open)}
                                className="inline-flex items-center justify-center rounded-md p-0.5 transition duration-150 ease-in-out dark:text-white">
                                <DotsVerticalIcon className="inline-block h-6 w-6" />
                            </button>
                            <Modal
                                isOpen={open}
                                closeModal={() => setOpen(open => !open)}>
                                <div className="mb-8 flex flex-col space-y-6 font-semibold">
                                    <Link href="/">
                                        <a>Homepage</a>
                                    </Link>
                                    <Link href="/blog">
                                        <a>Blog</a>
                                    </Link>
                                    <Link href="/">
                                        <a>Github</a>
                                    </Link>
                                </div>
                                <div className="mt-4 flex items-center justify-between border-t border-gray-700 pt-6 align-middle dark:text-white/75">
                                    Switch theme:{' '}
                                    <DarkModeButton className="align-items ml-4 flex rounded-lg py-2 px-3 font-semibold opacity-75 transition-opacity hover:opacity-100 dark:border-t dark:border-gray-500 dark:bg-gray-600 dark:text-white" />
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
