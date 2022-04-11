export type BlogPost = {
    id: number
    title: string
    description: string
    url: string
    published: string
}

export type BlogResponse = {
    success: boolean
    data?: Array<BlogPost>
    errorMessage?: any
}
