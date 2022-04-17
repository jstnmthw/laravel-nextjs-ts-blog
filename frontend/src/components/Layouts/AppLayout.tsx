import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'
import { ReactElement } from 'react'

const AppLayout = ({ children }: { children: ReactElement[] }) => {
    const { user } = useAuth({
        middleware: 'auth'
    })

    return (
        <div className="min-h-screen">
            <Navigation user={user} />

            {/* Page Content */}
            <main>{children}</main>
        </div>
    )
}

export default AppLayout
