import { Center, Stack, Heading, Box, Text } from "@chakra-ui/react"
import { useMediaQuery } from "hooks/useMediaQuery"
import Timer from "../Timer/Timer"

const Section4 = () => {
  const isBreakpoint = useMediaQuery(720)
  return (
    <Center py={16} flexDirection={!isBreakpoint ? "row" : "column"}>
      <Stack mr={!isBreakpoint ? 24 : 0} mb={!isBreakpoint ? 0 : 12}>
        <Heading color="secondary.500">Timer</Heading>
        <Text
          position="relative"
          _after={{
            content: '""',
            position: "absolute",
            bottom: -3,
            right: 0,
            w: "10rem",
            h: "2px",
            bgGradient: "linear(to-r, transparent, primary.100)",
          }}
        >
          Use a timer to rest between your series
        </Text>
      </Stack>
      <Box w="full" maxW="350px">
        <Timer />
      </Box>
    </Center>
  )
}

export default Section4
