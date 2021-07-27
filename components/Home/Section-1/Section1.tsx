import {
  Box,
  Button,
  Center,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  Text,
  useMediaQuery,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { FC } from "react"
import { BiChevronsDown } from "react-icons/bi"

const MotionBox = motion(Box)

const Section1: FC = () => {
  const [isLargerThan480] = useMediaQuery("(min-width: 480px)")
  return (
    <>
      <Center h="50px">
        <Link href="/register" mx="4">
          Register
        </Link>
        <Link href="/login" mx="4">
          Login
        </Link>
      </Center>
      <Center flexDir="column" h="90vh" w="full">
        <Heading
          as="h1"
          bgGradient="linear(to-r, primary.500, secondary.500)"
          bgClip="text"
          size={isLargerThan480 ? "4xl" : "3xl"}
        >
          Weekout
        </Heading>
        <Text mt={2} color="gray.700" fontSize="md" textAlign="center" px={4}>
          The best website for your week training.
        </Text>
        <LinkBox>
          <LinkOverlay href="#section2">
            <Button mt={6} variant="gradientSecondary">
              See more
            </Button>
          </LinkOverlay>
        </LinkBox>
        <MotionBox
          animate={{
            translateY: [1, 10, 1],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          fontSize="4xl"
          color="secondary.500"
          mt={10}
        >
          <BiChevronsDown />
        </MotionBox>
      </Center>
    </>
  )
}

export default Section1
