import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import AuthValidationErrors from '@/components/AuthValidationErrors'
import Button from '@/components/Button'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import React, { ChangeEvent, useState } from 'react'

const ForgotPassword = () => {
    const { forgotPassword } = useAuth({ middleware: 'guest' })

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState<[]>([])
    const [status, setStatus] = useState<string | null>(null)

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        forgotPassword({ email, setErrors, setStatus })
    }

    return (
        <GuestLayout>
            <AuthCard
                logo={
                    <Link href="/">
                        <a>
                            <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                        </a>
                    </Link>
                }>
                <div className="mb-4 text-sm text-gray-600">
                    Forgot your password? No problem. Just let us know your
                    email address and we will email you a password reset link
                    that will allow you to choose a new one.
                </div>

                {/* Session Status */}
                <AuthSessionStatus className="mb-4" status={status} />

                {/* Validation Errors */}
                <AuthValidationErrors className="mb-4" errors={errors} />

                <form onSubmit={submitForm}>
                    {/* Email Address */}
                    <div>
                        <Label htmlFor="email" className={undefined}>
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            className="mt-1 block w-full"
                            onChange={(event: ChangeEvent) =>
                                setEmail(
                                    (event.target as HTMLInputElement).value
                                )
                            }
                            required
                            autoFocus
                        />
                    </div>

                    <div className="mt-4 flex items-center justify-end">
                        <Button className={undefined}>
                            Email Password Reset Link
                        </Button>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default ForgotPassword
