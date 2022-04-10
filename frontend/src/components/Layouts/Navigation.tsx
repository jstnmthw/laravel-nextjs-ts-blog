import ApplicationLogo from '@/components/ApplicationLogo'
import Link from 'next/link'
import ResponsiveNavLink from '@/components/ResponsiveNavLink'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { GitHubIcon } from '@/components/Icons'
import { UserIcon } from '@heroicons/react/solid'
import { useAuth } from '@/hooks/auth'
import DarkModeButton from '@/components/DarkModeButton'

const Navigation = ({ user }) => {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const { logout } = useAuth()

    return (
        <nav className="absolute top-0 z-40 w-full flex-none border-b border-slate-900/10 py-4 px-4 dark:border-slate-300/10">
            {/* Primary Navigation Menu */}
            <div className="mx-auto max-w-8xl ">
                <div className="lg:px-8">
                    <div className="relative flex items-center sm:justify-center">
                        {/* Logo */}
                        <h1>
                            <Link href="/">
                                <a title="Justin.ly">
                                    <span className="text-green sr-only text-green-500">
                                        Justin.ly Logo
                                    </span>
                                    <ApplicationLogo className="block w-20 fill-current text-gray-900 dark:text-white" />
                                </a>
                            </Link>
                        </h1>

                        <div className="relative ml-auto hidden items-center lg:flex">
                            {/* Settings Dropdown */}
                            <div className="hidden sm:flex">
                                <DarkModeButton />
                                <Link href="#">
                                    <a
                                        title="My Github"
                                        className="inline-flex items-center px-2.5 opacity-70 transition-opacity hover:opacity-100">
                                        <GitHubIcon className="h-5 w-5" />
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

                            {/* Hamburger */}
                            <div className="-mr-2 flex items-center sm:hidden">
                                <button
                                    onClick={() => setOpen(open => !open)}
                                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none">
                                    <svg
                                        className="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24">
                                        {open ? (
                                            <path
                                                className="inline-flex"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        ) : (
                                            <path
                                                className="inline-flex"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        )}
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Responsive Navigation Menu */}
            {open && (
                <div className="block sm:hidden">
                    <div className="space-y-1 pt-2 pb-3">
                        <ResponsiveNavLink
                            href="/dashboard"
                            active={router.pathname === '/dashboard'}>
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    {/* Responsive Settings Options */}
                    <div className="border-t border-gray-200 pt-4 pb-1">
                        <div className="flex items-center px-4">
                            <div className="flex-shrink-0">
                                <UserIcon className="h-10 w-10 fill-current text-gray-400" />
                            </div>

                            <div className="ml-3">
                                <div className="text-base font-medium text-gray-800">
                                    {user?.name}
                                </div>
                                <div className="text-sm font-medium text-gray-500">
                                    {user?.email}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navigation
