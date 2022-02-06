import type { AppProps } from 'next/app'
import { GlobalStyle } from '../components/styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import theme from '../components/styles/theme'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

export default App
