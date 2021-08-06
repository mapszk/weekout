import {
  Button,
  Center,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import Head from "next/head"
import { FC } from "react"

const notFound: FC = () => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Weekout - Not found</title>
      </Head>
      <Center h="50px">
        <LinkBox>
          <LinkOverlay href="/">
            <Heading color="primary.500" size="md" justifySelf="flex-start">
              Weekout
            </Heading>
          </LinkOverlay>
        </LinkBox>
      </Center>
      <Center h="calc(100vh - 50px)" w="full" flexDirection="column">
        <Heading color="third.500" size="2xl" mb={4}>
          Sorry :(
        </Heading>
        <Text color="third.500" fontWeight="semibold">
          {"The page you're looking for doesn't exist"}
        </Text>
        <Button mt={4} onClick={() => router.back()} colorScheme="secondary">
          Go back
        </Button>
      </Center>
    </>
  )
}

export default notFound
