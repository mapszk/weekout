import { Center, Flex, Link } from "@chakra-ui/react"
import Head from "next/head"
import { FC } from "react"
import LoginForm from "components/module/LoginForm/LoginForm"

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
        <LoginForm />
      </Flex>
    </>
  )
}

export default login
