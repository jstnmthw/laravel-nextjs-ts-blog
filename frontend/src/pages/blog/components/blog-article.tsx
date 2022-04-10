import { FC } from 'react'
import { BlogArticle } from '@/types/blog'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/solid'

const BlogArticle: FC<{ data: BlogArticle }> = ({ data }) => {
    return (
        <article className="mb-10 md:mb-20 md:grid md:grid-cols-5">
            <div className="mb-2 text-sm text-white opacity-50 md:col-span-1">
                {data.published}
            </div>
            <div className="md:col-span-4">
                <Link href={data.url}>
                    <a className="mb-3 inline-block text-lg font-semibold hover:underline md:mb-5 md:text-xl">
                        <h2>{data.title}</h2>
                    </a>
                </Link>
                <p className="mb-4 text-white opacity-50 md:mb-8">
                    {data.description}
                </p>
                <Link href={data.url}>
                    <a className="inline-block rounded-full px-2 py-1.5 text-sm font-bold tracking-tight text-white transition-all dark:bg-white/10 hover:dark:bg-white/30">
                        Read more{' '}
                        <ChevronRightIcon className="inline-block h-4 w-4" />
                    </a>
                </Link>
            </div>
        </article>
    )
}
export default BlogArticle