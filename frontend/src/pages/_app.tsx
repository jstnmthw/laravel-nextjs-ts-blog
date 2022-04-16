import 'styles/style.scss'
import { ThemeProvider, ThemeProviderProps } from 'next-themes'
import { CookiesProvider } from 'react-cookie'
import React from 'react'
import { AppProps } from 'next/app'

const App = ({
    Component,
    pageProps
}: AppProps & { Component: { theme: ThemeProviderProps } }) => (
    <CookiesProvider>
        <ThemeProvider disableTransitionOnChange attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
    </CookiesProvider>
)

export default App
