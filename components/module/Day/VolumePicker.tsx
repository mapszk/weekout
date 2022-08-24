import { Flex, Heading, HStack, Tag } from "@chakra-ui/react"
import { useMediaQuery } from "hooks/useMediaQuery"
import { FC } from "react"

interface Props {
  activeVolume: string
  setActiveVolume: (value: string) => void
}

const VolumePicker: FC<Props> = ({ activeVolume, setActiveVolume }) => {
  const isBreakpoint = useMediaQuery(720)
  const handleClick = (value: string): void => {
    setActiveVolume(value)
    localStorage.setItem("selectedVolume", value)
  }
  return (
    <Flex h="75px" direction="column" justifyContent="center">
      <Heading
        textAlign={isBreakpoint ? "center" : "left"}
        mb={3}
        fontWeight="medium"
        color="gray.500"
        size="sm"
      >
        Training volume:
      </Heading>
      <HStack w="full" justifyContent={isBreakpoint ? "center" : "flex-start"}>
        <Tag
          cursor="pointer"
          onClick={() => handleClick("none")}
          size="sm"
          colorScheme={activeVolume === "none" ? "gray" : "gray"}
          opacity={activeVolume === "none" ? 1 : 0.5}
        >
          NONE
        </Tag>
        <Tag
          cursor="pointer"
          onClick={() => handleClick("min")}
          size="sm"
          colorScheme={activeVolume === "min" ? "green" : "gray"}
          opacity={activeVolume === "min" ? 1 : 0.5}
        >
          MIN
        </Tag>
        <Tag
          cursor="pointer"
          onClick={() => handleClick("mid")}
          size="sm"
          colorScheme={activeVolume === "mid" ? "yellow" : "gray"}
          opacity={activeVolume === "mid" ? 1 : 0.5}
        >
          MID
        </Tag>
        <Tag
          cursor="pointer"
          onClick={() => handleClick("max")}
          size="sm"
          colorScheme={activeVolume === "max" ? "red" : "gray"}
          opacity={activeVolume === "max" ? 1 : 0.5}
        >
          MAX
        </Tag>
      </HStack>
    </Flex>
  )
}

export default VolumePicker
