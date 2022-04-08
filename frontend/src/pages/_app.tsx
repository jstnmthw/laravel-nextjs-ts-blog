import 'styles/style.scss'
import { ThemeProvider } from 'next-themes'
import { CookiesProvider } from 'react-cookie'

const App = ({ Component, pageProps }) => (
    <CookiesProvider>
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    </CookiesProvider>
)

export default App
