import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react"
import { IoMdSettings } from "react-icons/io"
import { FC, useEffect, useRef, useState } from "react"

interface Props {
  isEdit?: boolean
}

const Timer: FC<Props> = ({ isEdit }) => {
  const alarmRef = useRef<any>()
  const [editMode, setEditMode] = useState<boolean>(false)
  const [isActive, setIsActive] = useState<boolean>(false)
  const [minutesEdit, setMinutesEdit] = useState<number>(1)
  const [secondsEdit, setSecondsEdit] = useState<number>(1)
  const [minutes, setMinutes] = useState<number>(1)
  const [seconds, setSeconds] = useState<number>(0)

  const handleStopTimer = (): void => {
    setIsActive(false)
    if (localStorage.getItem("timer") !== null) {
      const timer = JSON.parse(localStorage.getItem("timer") as string)
      setMinutes(timer.minutes || 1)
      setSeconds(timer.seconds || 0)
    } else {
      setMinutes(1)
      setSeconds(0)
    }
  }
  const handleSaveTimer = (): void => {
    localStorage.setItem(
      "timer",
      JSON.stringify({ minutes: minutesEdit, seconds: secondsEdit })
    )
    setMinutes(minutesEdit)
    setSeconds(secondsEdit)
    setEditMode(false)
  }

  useEffect(() => {
    let interval: any
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0 && minutes === 0) {
          clearInterval(interval)
          setIsActive(false)
          alarmRef.current.play()
          if (localStorage.getItem("timer") !== null) {
            const timer = JSON.parse(localStorage.getItem("timer") as string)
            setMinutes(timer.minutes || 1)
            setSeconds(timer.seconds || 0)
          } else {
            setMinutes(1)
            setSeconds(0)
          }
        }
        if (seconds === 0 && minutes > 0) {
          setMinutes(minutes - 1)
          setSeconds(59)
        }
        if (seconds > 0) setSeconds(seconds - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isActive, seconds, minutes])

  useEffect(() => {
    if (localStorage.getItem("timer") !== null) {
      const timer = JSON.parse(localStorage.getItem("timer") as string)
      setMinutes(timer.minutes)
      setSeconds(timer.seconds)
    }
  }, [])

  return (
    <Box
      position="relative"
      w="full"
      p={4}
      rounded="lg"
      bgGradient={
        isEdit
          ? "linear(to-tl, third.500, secondary.500)"
          : "linear(to-tl, primary.500, secondary.500)"
      }
      textAlign="center"
      color="white"
    >
      <Heading fontWeight="medium" fontSize="lg">
        Rest time
      </Heading>
      {!editMode && (
        <>
          <Heading fontSize="6xl">{`${minutes}:${
            seconds < 10 ? `0${seconds}` : seconds
          }`}</Heading>
          <ButtonGroup mt={2}>
            <Button
              disabled={isActive}
              onClick={() => setIsActive(true)}
              bgColor="white"
              variant="outline"
              _hover={{ bgColor: "white" }}
              colorScheme="primary"
            >
              Start
            </Button>
            <Button
              onClick={() => setIsActive(false)}
              disabled={!isActive}
              bgColor="white"
              variant="outline"
              _hover={{ bgColor: "white" }}
              colorScheme="secondary"
            >
              Pause
            </Button>
            <Button
              onClick={handleStopTimer}
              disabled={!isActive}
              bgColor="white"
              variant="outline"
              _hover={{ bgColor: "white" }}
              colorScheme="secondary"
            >
              Stop
            </Button>
          </ButtonGroup>
          <audio ref={alarmRef} src="/alarm.wav"></audio>
        </>
      )}
      {editMode && (
        <>
          <Center>
            <NumberInput
              focusBorderColor="white"
              variant="outline"
              mr="2"
              mt="2"
              w="5rem"
              size="md"
              max={99}
              min={0}
              value={minutesEdit}
              onChange={(value: string) => setMinutesEdit(Number(value))}
            >
              <NumberInputField fontSize="xl" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Heading fontSize="6xl">:</Heading>
            <NumberInput
              focusBorderColor="white"
              ml="2"
              mt="2"
              w="5rem"
              size="md"
              max={59}
              min={0}
              value={secondsEdit}
              onChange={(value: string) => setSecondsEdit(Number(value))}
            >
              <NumberInputField fontSize="xl" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Center>
          <Button
            onClick={handleSaveTimer}
            mt={2}
            variant="outline"
            colorScheme="primary"
            bgColor="white"
            _hover={{ bgColor: "white" }}
          >
            Save
          </Button>
        </>
      )}
      <Button
        onClick={() => setEditMode(!editMode)}
        p={0}
        top="1"
        left="1"
        variant="ghost"
        color="white"
        boxShadow="none"
        fontSize="2xl"
        position="absolute"
      >
        <IoMdSettings />
      </Button>
    </Box>
  )
}

export default Timer
