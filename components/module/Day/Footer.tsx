import {
  Flex,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  Spacer,
} from "@chakra-ui/react"

const Footer = () => {
  return (
    <Flex h="50px" alignItems="center">
      <LinkBox>
        <LinkOverlay href="/">
          <Heading size="sm" color="primary.500" fontWeight="bold">
            Weekout
          </Heading>
        </LinkOverlay>
      </LinkBox>
      <Spacer />
      <Link>Log out</Link>
    </Flex>
  )
}

export default Footer
