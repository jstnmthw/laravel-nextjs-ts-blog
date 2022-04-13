import { FC } from 'react'

const BlogArticleLoader: FC<{ count: number }> = ({ count }) => {
    return (
        <>
            {[...Array(count)].map((count, index) => {
                return (
                    <div
                        key={index.toString()}
                        className="mb-10 grid animate-pulse rounded-md p-2 md:grid-cols-6 md:space-x-10">
                        <div className="col-span-1 mb-5 block h-[11px] rounded-full bg-gray-200 dark:bg-gray-600 md:col-span-1" />
                        <div className="col-span-6 block md:col-span-5">
                            <div className="mb-5 block h-[18px] w-full rounded-full bg-gray-200 dark:bg-gray-600 md:w-3/5" />
                            <div className="mb-2.5 block h-[10px] w-full rounded-full bg-gray-200 dark:bg-gray-600 md:w-4/5" />
                            <div className="mb-2.5 block h-[10px] w-full rounded-full bg-gray-200 dark:bg-gray-600" />
                            <div className="mb-2.5 block h-[10px] w-full rounded-full bg-gray-200 dark:bg-gray-600 md:w-4/5" />
                            <div className="mb-8 block h-[12px] rounded-full bg-gray-200 dark:bg-gray-600" />
                            <div className="block h-[18px] w-1/5 rounded-full bg-gray-200 dark:bg-gray-600" />
                        </div>
                    </div>
                )
            })}
        </>
    )
}
export default BlogArticleLoader
