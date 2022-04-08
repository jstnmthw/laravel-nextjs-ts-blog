import ApplicationLogo from '@/components/ApplicationLogo'
import Link from 'next/link'
import ResponsiveNavLink from '@/components/ResponsiveNavLink'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { GitHubIcon } from '@/components/Icons'
import { SunIcon } from '@heroicons/react/outline'
import { UserIcon } from '@heroicons/react/solid'
import { useAuth } from '@/hooks/auth'

const Navigation = ({ user }) => {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const { logout } = useAuth()

    return (
        <nav className="sticky top-0 z-40 w-full flex-none">
            {/* Primary Navigation Menu */}
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                <div className="mx-4 border-b border-slate-900/10 py-4 dark:border-slate-300/10 lg:mx-0 lg:border-0 lg:px-8">
                    {/* Logo */}
                    <div className="flex flex-shrink-0 items-center">
                        <Link href="/">
                            <a>
                                <ApplicationLogo className="block w-20 fill-current text-gray-900 dark:text-white" />
                            </a>
                        </Link>
                    </div>

                    <div className="flex items-center">
                        {/* Settings Dropdown */}
                        <div className="hidden sm:-my-px sm:ml-10 sm:flex">
                            <Link href="#">
                                <a className="inline-flex items-center px-2.5">
                                    <SunIcon className="h-6 w-6" />
                                </a>
                            </Link>
                            <Link href="#">
                                <a className="inline-flex items-center px-2.5">
                                    <GitHubIcon className="h-5 w-5" />
                                </a>
                            </Link>
                            {user ? (
                                <button
                                    onClick={logout}
                                    className="inline-flex items-center px-2.5 font-semibold">
                                    Logout
                                </button>
                            ) : (
                                <Link href="/login">
                                    <a className="inline-flex items-center px-2.5 font-semibold">
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
