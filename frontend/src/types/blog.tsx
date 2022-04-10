export type BlogArticle = {
    id: number
    title: string
    description: string
    url: string
    published: string
}

export type BlogResponse = {
    success: boolean
    data?: Array<BlogArticle>
    errorMessage?: any
}
