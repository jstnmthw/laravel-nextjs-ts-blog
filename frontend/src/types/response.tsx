import { User } from "@/types/auth";

export type ErrorResponse = {
    message?: string
    errors?: []
}

export type UserResponse = {
    user?: User
}
