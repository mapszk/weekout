import type { AppProps } from "next/app"
import { ChakraProvider, Container } from "@chakra-ui/react"
import { customTheme } from "theme"
import AuthContextProvider from "contexts/authContext"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <AuthContextProvider>
        <Container maxW="container.lg" mx="auto">
          <Component {...pageProps} />
        </Container>
      </AuthContextProvider>
    </ChakraProvider>
  )
}
export default MyApp
