import useSWR, { responseInterface } from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ErrorResponse } from '@/types/response'
import {
    User,
    AuthHookParams,
    ForgotPasswordParams,
    LoginParams,
    RegisterParams,
    ResendEmailVerificationParams,
    ResetPasswordParams
} from '@/types/auth'
import { useCookies } from 'react-cookie'

export const useAuth = ({
    middleware,
    redirectIfAuthenticated
}: AuthHookParams = {}) => {
    const router = useRouter()
    const [cookies, setCookies, removeCookies] = useCookies()

    const {
        data: user,
        error,
        mutate
    }: responseInterface<User, ErrorResponse> = useSWR(
        cookies.isAuth ? '/api/user' : null,
        () =>
            axios
                .get('/api/user')
                .then(res => res.data)
                .catch(error => {
                    removeCookies('isAuth')
                    if (error.response.status !== 409) throw error

                    router.push('/verify-email')
                })
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const register = async ({ setErrors, ...props }: RegisterParams) => {
        await csrf()

        setErrors([])

        axios
            .post('/register', props)
            .then(() => {
                setCookies('isAuth', true, { sameSite: 'lax' })
                mutate()
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(
                    Object.values(error.response.data.errors).flat() as []
                )
            })
    }

    const login = async ({ setErrors, setStatus, ...props }: LoginParams) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/login', props)
            .then(() => {
                setCookies('isAuth', true, { sameSite: 'lax' })
                mutate()
            })
            .catch(error => {
                removeCookies('isAuth')
                if (error.response.status !== 422) throw error

                setErrors(
                    Object.values(error.response.data.errors).flat() as []
                )
            })
    }

    const forgotPassword = async ({
        setErrors,
        setStatus,
        email
    }: ForgotPasswordParams) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/forgot-password', { email })
            .then(response => setStatus(response.data.status))
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(
                    Object.values(error.response.data.errors).flat() as []
                )
            })
    }

    const resetPassword = async ({
        setErrors,
        setStatus,
        ...props
    }: ResetPasswordParams) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/reset-password', { token: router.query.token, ...props })
            .then(response =>
                router.push('/login?reset=' + window.btoa(response.data.status))
            )
            .catch(error => {
                if (error.response.status != 422) throw error

                setErrors(
                    Object.values(error.response.data.errors).flat() as []
                )
            })
    }

    const resendEmailVerification = ({
        setStatus
    }: ResendEmailVerificationParams) => {
        axios
            .post('/email/verification-notification')
            .then(response => setStatus(response.data.status))
    }

    const logout = async () => {
        if (!error) {
            await axios.post('/logout').then(() => {
                removeCookies('isAuth', { sameSite: 'lax' })
            })
        }

        window.location.pathname = '/login'
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user)
            router.push(redirectIfAuthenticated)
        if (middleware === 'auth' && error) logout()
    })

    return {
        user,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout
    }
}
