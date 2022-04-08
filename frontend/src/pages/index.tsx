import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Navigation from '@/components/Layouts/Navigation'

export default function Home() {
    const { user } = useAuth()
    return <span>Index</span>
}
