import {
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Spacer,
  Text,
} from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import { clientAuth } from "util/firebaseClient"

const Footer = () => {
  const router = useRouter()
  const handleClickLogOut = async () => {
    await clientAuth.signOut().then(() => router.push("/"))
  }
  return (
    <Flex h="100px" alignItems="center">
      <LinkBox>
        <LinkOverlay href="/">
          <Heading size="sm" color="primary.500" fontWeight="bold">
            Weekout
          </Heading>
        </LinkOverlay>
      </LinkBox>
      <Spacer />
      <Text
        onClick={handleClickLogOut}
        cursor="pointer"
        _hover={{ textDecoration: "underline" }}
      >
        Log out
      </Text>
    </Flex>
  )
}

export default Footer
