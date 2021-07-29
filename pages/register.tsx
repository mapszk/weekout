import { Center, Flex, Link } from "@chakra-ui/react"
import RegisterForm from "components/module/RegisterForm/RegisterForm"
import Head from "next/head"
import { FC } from "react"

const register: FC = () => {
  return (
    <>
      <Head>
        <body
          style={{
            background:
              "linear-gradient(9deg, #32ccff50 0%, rgba(255,255,255,0) 37%)",
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
        <RegisterForm />
      </Flex>
    </>
  )
}

export default register
