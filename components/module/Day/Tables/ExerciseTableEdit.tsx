import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  LinkBox,
  LinkOverlay,
  Switch,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react"
import { useAuth } from "hooks/useAuth"
import { ChangeEvent, FC, useState } from "react"
import { DayData, Exercise } from "../dayTypes"
import ExerciseTableRowEdit from "./ExerciseTableRowEdit"
import { saveDay } from "./saveDay"

interface Props {
  restDay: boolean
  dayName: string
  activeVolume: string
  exercises: Exercise[]
  setExercises: any
}

const ExerciseTableEdit: FC<Props> = ({
  restDay,
  activeVolume,
  dayName,
  exercises,
  setExercises
}) => {
  const [isRestDay, setIsRestDay] = useState(restDay)
  const { user } = useAuth()
  const toast = useToast()
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleClickSave = async (dayData: DayData) => {
    const { alertStatus, alertMsg } = await saveDay(
      user.uid,
      dayData,
      dayName,
      setIsSubmitting
    )
    if (alertStatus === "success") {
      return toast({
        position: "top",
        status: alertStatus,
        description: alertMsg,
      })
    } else {
      return toast({
        position: "top",
        status: alertStatus,
        description: alertMsg,
      })
    }
  }

  return (
    <>
      <Box py={2} overflow="auto">
        <Table h="auto" minW="500px" size="sm">
          <Thead>
            <Tr>
              <Th border="none" px={0.5} w="60%">
                Exercise
              </Th>
              <Th border="none" px={0.5} w="20%" isNumeric>
                Reps
              </Th>
              <Th border="none" px={0.5} pr={1} w="20%" isNumeric>
                Series
              </Th>
            </Tr>
          </Thead>
          <Tbody overflowX="auto" verticalAlign="top">
            {activeVolume === "NONE" && (
              <ExerciseTableRowEdit
                restDay={isRestDay}
                exercises={exercises.filter(ex => ex.volume === "none")}
                setExercises={setExercises}
                volume="none"
              />
            )}
            {activeVolume === "MIN" && (
              <ExerciseTableRowEdit
                restDay={isRestDay}
                exercises={exercises.filter(ex => ex.volume === "min")}
                setExercises={setExercises}
                volume="min"
              />
            )}
            {activeVolume === "MID" && (
              <ExerciseTableRowEdit
                restDay={isRestDay}
                exercises={exercises.filter(ex => ex.volume === "mid")}
                setExercises={setExercises}
                volume="mid"
              />
            )}
            {activeVolume === "MAX" && (
              <ExerciseTableRowEdit
                restDay={isRestDay}
                exercises={exercises.filter(ex => ex.volume === "max")}
                setExercises={setExercises}
                volume="max"
              />
            )}
          </Tbody>
        </Table>
      </Box>
      <FormControl py={2} display="flex" alignItems="center">
        <FormLabel mb="0">Is rest day?</FormLabel>
        <Switch
          colorScheme="third"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setIsRestDay(e.target.checked)
          }
          checked={isRestDay}
          defaultChecked={isRestDay}
        />
      </FormControl>
      <Flex mt={2} justifyContent="space-between">
        <LinkBox alignSelf="flex-start">
          <LinkOverlay href={`/${dayName}`}>
            <Button
              isLoading={isSubmitting}
              size="sm"
              colorScheme="secondary"
              variant="outline"
            >
              Exit edit mode
            </Button>
          </LinkOverlay>
        </LinkBox>
        <Button
          size="sm"
          isLoading={isSubmitting}
          onClick={() =>
            handleClickSave({
              restDay: isRestDay,
              exercises,
            })
          }
          alignSelf="flex-end"
          colorScheme="secondary"
        >
          Save
        </Button>
      </Flex>
    </>
  )
}

export default ExerciseTableEdit
