import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
} from "@chakra-ui/react"
import Head from "next/head"
import { FC } from "react"

const login: FC = () => {
  return (
    <>
      <Head>
        <body
          style={{
            background:
              "linear-gradient(349deg, #ec89ef44 0%, rgba(255,255,255,0) 30%)",
          }}
        ></body>
      </Head>
      <Flex minH="100vh" w="full" flexDir="column" alignItems="center">
        <Center justifySelf="flex-start" h="50px">
          <Link
            href="/"
            color="primary.500"
            size="md"
            fontWeight="bold"
            textDecoration="none"
            _hover={{ textDecor: "none" }}
          >
            Weekout
          </Link>
        </Center>
        <Stack mt={24} textAlign="center" w="full" maxW="450px">
          <Heading color="primary.500">Log in</Heading>
          <form>
            <FormControl mb={4}>
              <FormLabel>Email</FormLabel>
              <Input />
            </FormControl>
            <FormControl mb={6}>
              <FormLabel>Password</FormLabel>
              <Input />
            </FormControl>
            <FormControl mb={6}>
              <Button type="submit" isFullWidth variant="gradientPrimary">
                Log in
              </Button>
            </FormControl>
            <Link href="/register">{"I don't have an account"}</Link>
          </form>
        </Stack>
      </Flex>
    </>
  )
}

export default login
