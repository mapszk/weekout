import { Heading, HStack } from "@chakra-ui/react"
import { useMediaQuery } from "hooks/useMediaQuery"
import { FC } from "react"
import { capitalize } from "util/capitalize"
import { NextDay, PrevDay } from "./SwitchDayButtons"

interface Props {
  dayName: string
  isEdit?: boolean
}

const DayHeader: FC<Props> = ({ dayName, isEdit }) => {
  const isBreakpoint = useMediaQuery(720)
  return (
    <HStack
      h="75px"
      w="full"
      justifyContent={isBreakpoint ? "center" : "flex-start"}
    >
      <PrevDay dayName={dayName} isEdit={isEdit} />
      <Heading
        position="relative"
        _after={
          isEdit
            ? {
                content: "'edit mode'",
                fontSize: "sm",
                fontWeight: "medium",
                position: "absolute",
                bottom: -3,
                left: 0,
                color: "secondary.500",
              }
            : {}
        }
        size="2xl"
        color={isEdit ? "third.500" : "primary.500"}
      >
        {capitalize(dayName)}
      </Heading>
      <NextDay dayName={dayName} isEdit={isEdit} />
    </HStack>
  )
}

export default DayHeader
