import { Dispatch, SetStateAction } from 'react'

export type ReactProps = {
    children: Array<JSX.Element>
}

export type AuthHookParams = {
    middleware?: string
    redirectIfAuthenticated?: string
}

export type SetErrorsParam = Dispatch<SetStateAction<[]>>

export type SetStatusParam = Dispatch<SetStateAction<string | null>>

export type LoginParams = {
    setErrors: SetErrorsParam
    setStatus: SetStatusParam
    email: string
    password: string
}

export type ForgotPasswordParams = {
    setErrors: SetErrorsParam
    setStatus: SetStatusParam
    email: string
}

export type ResetPasswordParams = {
    setErrors: SetErrorsParam
    setStatus: SetStatusParam
    email: string
    password: string
    password_confirmation: string
}

export type RegisterParams = {
    setErrors: SetErrorsParam
    email: string
    name: string
    password: string
    password_confirmation: string
}

export type ResendEmailVerificationParams = {
    setStatus: SetStatusParam
}

export type User = {
    id: number
    email: string
    name: string
    created_at: string
    updated_at: string
}