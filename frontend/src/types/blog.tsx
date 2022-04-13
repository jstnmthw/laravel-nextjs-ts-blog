export type BlogPost = {
    id: number
    title: string
    description: string
    slug: string
    created_at: string
}

export type BlogResponse = {
    success: boolean
    data?: Array<BlogPost>
    errorMessage?: any
}
