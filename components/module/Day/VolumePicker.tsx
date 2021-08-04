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
        Volume training:
      </Heading>
      <HStack w="full" justifyContent={isBreakpoint ? "center" : "flex-start"}>
        <Tag
          cursor="pointer"
          onClick={() => handleClick("NONE")}
          size="sm"
          colorScheme={activeVolume === "NONE" ? "gray" : "gray"}
          opacity={activeVolume === "NONE" ? 1 : 0.5}
        >
          NONE
        </Tag>
        <Tag
          cursor="pointer"
          onClick={() => handleClick("MIN")}
          size="sm"
          colorScheme={activeVolume === "MIN" ? "green" : "gray"}
          opacity={activeVolume === "MIN" ? 1 : 0.5}
        >
          MIN
        </Tag>
        <Tag
          cursor="pointer"
          onClick={() => handleClick("MID")}
          size="sm"
          colorScheme={activeVolume === "MID" ? "yellow" : "gray"}
          opacity={activeVolume === "MID" ? 1 : 0.5}
        >
          MID
        </Tag>
        <Tag
          cursor="pointer"
          onClick={() => handleClick("MAX")}
          size="sm"
          colorScheme={activeVolume === "MAX" ? "red" : "gray"}
          opacity={activeVolume === "MAX" ? 1 : 0.5}
        >
          MAX
        </Tag>
      </HStack>
    </Flex>
  )
}

export default VolumePicker
