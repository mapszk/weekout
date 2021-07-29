import {
  Button,
  Center,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react"
import { FC } from "react"

const Section4: FC = () => {
  return (
    <Center h="450px" pb={12} flexDirection="column">
      <Heading color="secondary.500" mb={2}>
        {"Get' started!"}
      </Heading>
      <Text
        position="relative"
        _after={{
          content: "''",
          position: "absolute",
          width: "12rem",
          height: "2px",
          bgGradient: "linear(to-r, transparent, primary.100, transparent)",
          bottom: -3,
          right: "calc(50% - 6rem)",
        }}
      >
        Create your account and start using Weekout
      </Text>
      <LinkBox>
        <LinkOverlay href="/register">
          <Button mt={10} variant="gradientPrimary">
            Register
          </Button>
        </LinkOverlay>
      </LinkBox>
    </Center>
  )
}

export default Section4
