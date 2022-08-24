import { Center, Flex, Link } from "@chakra-ui/react"
import RegisterForm from "components/module/RegisterForm/RegisterForm"
import { GetServerSideProps } from "next"
import Head from "next/head"
import { FC } from "react"
import nookies from "nookies"
import { adminAuth } from "util/firebaseServer"

const register: FC = () => {
  return (
    <>
      <Head>
        <title>Weekout - Register</title>
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx)
  try {
    await adminAuth.verifyIdToken(cookies.token)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  } catch (err) {
    return {
      props: {}
    }
  }
}
export default register
