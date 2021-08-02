import {
  Button,
  Flex,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  Spacer,
} from "@chakra-ui/react"
import { useMediaQuery } from "hooks/useMediaQuery"
import { FC, useState } from "react"
import { capitalize } from "util/capitalize"
import { clientAuth } from "util/firebaseClient"
import { NextDay, PrevDay } from "./SwitchDayButtons"

interface Props {
  dayName: string
  isEdit?: boolean
}

const DayHeader: FC<Props> = ({ dayName, isEdit }) => {
  const isBreakpoint = useMediaQuery(720)
  const [isLoading, setIsLoading] = useState(false)
  const handleLogOut = async () => {
    setIsLoading(true)
    await clientAuth
      .signOut()
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false))
  }
  return (
    <Flex
      my={4}
      w="full"
      spacing={4}
      justfiyContent={isBreakpoint ? "center" : "initial"}
      direction={isBreakpoint ? "column" : "row"}
    >
      <Flex
        direction={isBreakpoint ? "row" : "column"}
        order={isBreakpoint ? 0 : 1}
        mb={isBreakpoint ? 2 : 0}
        justifyContent={isBreakpoint ? "space-between" : "flex-start"}
      >
        <Button
          isLoading={isLoading}
          onClick={handleLogOut}
          mb={isBreakpoint ? 0 : 2}
          size="sm"
          colorScheme={isEdit ? "secondary" : "primary"}
          variant="outline"
        >
          Log out
        </Button>
        <LinkBox>
          <LinkOverlay href={isEdit ? `/${dayName}` : `/${dayName}/edit`}>
            <Button
              isLoading={isLoading}
              size="sm"
              colorScheme={isEdit ? "secondary" : "primary"}
            >
              {isEdit ? "Exit edit mode" : "Edit day"}
            </Button>
          </LinkOverlay>
        </LinkBox>
      </Flex>
      <HStack
        mt={isBreakpoint ? 2 : 0}
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
      {!isBreakpoint && <Spacer />}
    </Flex>
  )
}

export default DayHeader
