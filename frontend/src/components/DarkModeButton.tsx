import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/outline'

const DarkModeButton = props => {
    const { theme, setTheme } = useTheme()
    return (
        <button
            {...props}
            type="button"
            onClick={() => {
                setTheme(theme === 'light' ? 'dark' : 'light')
            }}>
            {theme === 'light' ? (
                <>
                    <SunIcon className="inline-block h-5 w-5 opacity-60" />
                    <span className="ml-1.5">Light</span>
                </>
            ) : (
                <>
                    <MoonIcon className="inline-block h-5 w-5 opacity-60" />
                    <span className="ml-1.5">Dark</span>
                </>
            )}
        </button>
    )
}
export default DarkModeButton
