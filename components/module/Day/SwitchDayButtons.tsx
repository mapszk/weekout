import { Button, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { FC } from "react"
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"

interface Props {
  dayName: string
}
const getLink = (dayName: string, where: string) => {
  if (where === "next") {
    switch (dayName) {
      case "sunday":
        return "/monday"
      case "monday":
        return "/tuesday"
      case "tuesday":
        return "/wednesday"
      case "wednesday":
        return "/thursday"
      case "thursday":
        return "/friday"
      case "friday":
        return "/saturday"
      case "saturday":
        return "/sunday"
    }
  } else {
    switch (dayName) {
      case "sunday":
        return "/saturday"
      case "monday":
        return "/sunday"
      case "tuesday":
        return "/monday"
      case "wednesday":
        return "/tuesday"
      case "thursday":
        return "/wednesday"
      case "friday":
        return "/thursday"
      case "saturday":
        return "/sunday"
    }
  }
}

export const NextDay: FC<Props> = ({ dayName }) => {
  return (
    <LinkBox>
      <LinkOverlay href={getLink(dayName, "next")}>
        <Button
          color="third.900"
          boxShadow="none"
          variant="ghost"
          fontSize="2xl"
          p={1}
        >
          <BsChevronRight />
        </Button>
      </LinkOverlay>
    </LinkBox>
  )
}

export const PrevDay: FC<Props> = ({ dayName }) => {
  return (
    <LinkBox>
      <LinkOverlay href={getLink(dayName, "prev")}>
        <Button
          color="third.900"
          boxShadow="none"
          variant="ghost"
          fontSize="2xl"
          p={1}
        >
          <BsChevronLeft />
        </Button>
      </LinkOverlay>
    </LinkBox>
  )
}
