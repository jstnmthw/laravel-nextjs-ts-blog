import { FC } from 'react'

const Hero: FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
    return (
        <div className="mx-auto my-10 mx-auto max-w-2xl px-2.5 text-center md:my-20 md:mb-10 md:px-5">
            <h1 className="mb-10 text-2xl font-black md:text-4xl">{title}</h1>
            <div className="mx-auto max-w-[300px] text-lg text-gray-500 dark:text-white dark:opacity-60 md:max-w-full md:text-xl">
                {subtitle}
            </div>
        </div>
    )
}
export default Hero
