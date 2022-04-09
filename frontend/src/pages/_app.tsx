import 'styles/style.scss'
import { ThemeProvider } from 'next-themes'
import { CookiesProvider } from 'react-cookie'

const App = ({ Component, pageProps }) => (
    <CookiesProvider>
        <ThemeProvider
            forcedTheme={Component.theme || undefined}
            attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
    </CookiesProvider>
)

export default App
