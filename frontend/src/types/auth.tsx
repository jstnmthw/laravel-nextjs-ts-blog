import { SetStateAction } from 'react'
import {ErrorResponse} from "@/types/response";

export type ReactProps = {
    children: Array<JSX.Element>
}

export type AuthHookParams = {
    middleware?: string
    redirectIfAuthenticated?: string
}

export type SetErrorsParam<S extends ErrorResponse | Array<null> | SetStateAction<never[]>> = (
    value: SetStateAction<S>
) => never

export type SetStatusParam<S extends number | null> = (value: SetStateAction<S>) => void

export type LoginParams = {
    setErrors: SetErrorsParam<ErrorResponse | Array<null> | SetStateAction<never[]>>
    setStatus: SetStatusParam<number | null>
    email: string
    password: string
}

export type ForgotPasswordParams = {
    setErrors: SetErrorsParam<ErrorResponse | Array<null>>
    setStatus: SetStatusParam<number | null>
    email: string
}

export type ResetPasswordParams = {
    setErrors: SetErrorsParam<ErrorResponse | Array<null>>
    setStatus: SetStatusParam<number | null>
    email: string
    password: string
    password_confirmation: string
}

export type RegisterParams = {
    setErrors: SetErrorsParam<ErrorResponse | Array<null>> |  SetStateAction<never[]>
    email: string
    name: string
    password: string
    password_confirmation: string
}

export type ResendEmailVerificationParams = {
    setStatus: SetStatusParam<number | null>
}

export type User = {
    email: string
    name: string
    created_at: string
    updated_at: string
}