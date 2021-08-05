import {
  Box,
  Center,
  Collapse,
  Heading,
  HStack,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react"
import { useMediaQuery } from "hooks/useMediaQuery"
import { FC, useState } from "react"

const volumeNone: String[] = [
  "Push-ups",
  "Decline press",
  "Dumbbell bench press",
]
const volumeMin: String[] = ["Hammer curl", "Reverse curl"]
const volumeMid: String[] = [
  "Push-ups",
  "Decline press",
  "Dumbbell bench press",
]
const volumeMax: String[] = [
  "Diamond push-up",
  "Overhead extension",
  "Tricep dips",
]

const Section3: FC = () => {
  const [activeVolume, setActiveVolume] = useState<string>("NONE")
  const isBreakpoint = useMediaQuery(720)
  return (
    <Center py={16} W="full" flexDirection={isBreakpoint ? "column" : "row"}>
      <Stack ml={!isBreakpoint ? 24 : 0} mb={!isBreakpoint ? 0 : 12}>
        <Heading color="secondary.500">Divide your training</Heading>
        <Text
          position="relative"
          _after={{
            content: "''",
            position: "absolute",
            bottom: -3,
            left: 0,
            width: "6rem",
            height: "2px",
            bgGradient: "linear(to-r, primary.100, transparent)",
          }}
        >
          You can divide your training in three volumes
        </Text>
      </Stack>
      <Box w="full" maxW="350px" minH="300px" order={!isBreakpoint ? -1 : 0}>
        <Heading color="primary.500" mb={4}>
          Monday
        </Heading>
        <HStack spacing={2} mb={4}>
          <Tag
            cursor="pointer"
            onClick={() => setActiveVolume("NONE")}
            size="sm"
            colorScheme={activeVolume === "NONE" ? "gray" : "gray"}
            opacity={activeVolume === "NONE" ? 1 : 0.5}
          >
            NONE
          </Tag>
          <Tag
            cursor="pointer"
            onClick={() => setActiveVolume("MIN")}
            size="sm"
            colorScheme={activeVolume === "MIN" ? "green" : "gray"}
            opacity={activeVolume === "MIN" ? 1 : 0.5}
          >
            MIN
          </Tag>
          <Tag
            cursor="pointer"
            onClick={() => setActiveVolume("MID")}
            size="sm"
            colorScheme={activeVolume === "MID" ? "yellow" : "gray"}
            opacity={activeVolume === "MID" ? 1 : 0.5}
          >
            MID
          </Tag>
          <Tag
            cursor="pointer"
            onClick={() => setActiveVolume("MAX")}
            size="sm"
            colorScheme={activeVolume === "MAX" ? "red" : "gray"}
            opacity={activeVolume === "MAX" ? 1 : 0.5}
          >
            MAX
          </Tag>
        </HStack>
        <Collapse in={activeVolume === "NONE"}>
          {volumeNone.map((ex, index) => (
            <Box
              _notLast={{ mb: "2" }}
              key={index}
              p={2}
              bgColor="third.50"
              rounded="lg"
            >
              <Heading size="sm" fontWeight="semibold">
                {ex}
              </Heading>
            </Box>
          ))}
        </Collapse>
        <Collapse in={activeVolume === "MIN"}>
          {volumeMin.map((ex, index) => (
            <Box
              _notLast={{ mb: "2" }}
              key={index}
              p={2}
              bgColor="third.50"
              rounded="lg"
            >
              <Heading size="sm" fontWeight="semibold">
                {ex}
              </Heading>
            </Box>
          ))}
        </Collapse>
        <Collapse in={activeVolume === "MID"}>
          {volumeMid.map((ex, index) => (
            <Box
              _notLast={{ mb: "2" }}
              key={index}
              p={2}
              bgColor="third.50"
              rounded="lg"
            >
              <Heading size="sm" fontWeight="semibold">
                {ex}
              </Heading>
            </Box>
          ))}
        </Collapse>
        <Collapse in={activeVolume === "MAX"}>
          {volumeMax.map((ex, index) => (
            <Box
              _notLast={{ mb: "2" }}
              key={index}
              p={2}
              bgColor="third.50"
              rounded="lg"
            >
              <Heading size="sm" fontWeight="semibold">
                {ex}
              </Heading>
            </Box>
          ))}
        </Collapse>
      </Box>
    </Center>
  )
}

export default Section3
