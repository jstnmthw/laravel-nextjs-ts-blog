import { FC } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/outline'

const DarkModeButton: FC = () => {
    const { theme, setTheme } = useTheme()
    return (
        <button
            type="button"
            className="px-2.5 opacity-75 transition-opacity hover:opacity-100"
            onClick={() => {
                setTheme(theme === 'light' ? 'dark' : 'light')
            }}>
            {theme === 'light' ? (
                <SunIcon className="h-5 w-5" />
            ) : (
                <MoonIcon className="h-5 w-5" />
            )}
        </button>
    )
}
export default DarkModeButton
