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
}

const DayHeader: FC<Props> = ({ dayName }) => {
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
      mb={2}
      mt={3}
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
          colorScheme="primary"
          variant="outline"
        >
          Log out
        </Button>
        <LinkBox>
          <LinkOverlay href={`/${dayName}/edit`}>
            <Button isLoading={isLoading} size="sm" colorScheme="primary">
              Edit day
            </Button>
          </LinkOverlay>
        </LinkBox>
      </Flex>
      <HStack justifyContent={isBreakpoint ? "center" : "flex-start"}>
        <PrevDay dayName={dayName} />
        <Heading size="2xl" color="primary.500">
          {capitalize(dayName)}
        </Heading>
        <NextDay dayName={dayName} />
      </HStack>
      {!isBreakpoint && <Spacer />}
    </Flex>
  )
}

export default DayHeader
