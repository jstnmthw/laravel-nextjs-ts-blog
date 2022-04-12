import { FC } from 'react'

const Hero: FC = () => {
    return (
        <div className="my-10 text-center md:my-20">
            <h1 className="mb-3 text-4xl font-black">Blog</h1>
            <div className="mx-auto max-w-[300px] text-xl text-gray-500 dark:text-white dark:opacity-60 md:max-w-full">
                Scribblings from a full stack developer.
            </div>
        </div>
    )
}
export default Hero
