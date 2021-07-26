import type { AppProps } from "next/app"
import { ChakraProvider, Container } from "@chakra-ui/react"
import { customTheme } from "theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Container maxW="container.lg" centerContent>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}
export default MyApp
