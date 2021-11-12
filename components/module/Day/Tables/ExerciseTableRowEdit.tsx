import {
  Button,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Td,
  Tr,
} from "@chakra-ui/react"
import { ChangeEvent, FC } from "react"
import { capitalize } from "util/capitalize"
import AddNewExercise from "../AddNewExercise"
import { Exercise } from "../dayTypes"

export const muscleOptions = [
  "quadriceps",
  "hamstrings",
  "buttocks",
  "chest",
  "back",
  "deltoid",
  "biceps",
  "triceps",
  "trapezius",
  "soleus",
  "core",
]
interface Props {
  restDay: boolean
  exercises: Exercise[]
  setExercises: any
  volume: "none" | "min" | "mid" | "max"
}

const ExerciseTableRowEdit: FC<Props> = ({
  setExercises,
  exercises,
  restDay,
  volume
}) => {

  const handleAddExercise = (newExercise: Exercise): void => {
    setExercises((exercises: Exercise[]) => ([...exercises, newExercise]))
  }
  const handleRemoveExercise = (id: string): void => {
    setExercises((exercises: Exercise[]) => exercises.filter(ex => ex.id !== id))
  }
  const handleChangeMuscle = (newMuscle: string, id: string): void => {
    setExercises((exercises: Exercise[]) => exercises.map(ex => ex.id === id ? { ...ex, muscle: newMuscle } : ex))
  }
  const handleChangeName = (newName: string, id: string): void => {
    setExercises((exercises: Exercise[]) => exercises.map(ex => ex.id === id ? { ...ex, name: newName } : ex))
  }
  const handleChangeReps = (newReps: number, id: string): void => {
    setExercises((exercises: Exercise[]) => exercises.map(ex => ex.id === id ? { ...ex, reps: newReps } : ex))
  }
  const handleChangeSeries = (newSeries: number, id: string): void => {
    setExercises((exercises: Exercise[]) => exercises.map(ex => ex.id === id ? { ...ex, series: newSeries } : ex))
  }

  return (
    <>
      {exercises.length > 0 &&
        exercises.map(exerciseToEdit => (
          <Tr minW="500px" _last={{ h: "100%" }} key={exerciseToEdit.id}>
            <Td border="none" px={0.5}>
              <HStack>
                <Button
                  disabled={restDay}
                  onClick={() => handleRemoveExercise(exerciseToEdit.id)}
                  fontWeight="light"
                  size="xs"
                  colorScheme="third"
                >
                  X
                </Button>
                <Input
                  disabled={restDay}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleChangeName(e.target.value, exerciseToEdit.id)
                  }
                  size="sm"
                  value={exerciseToEdit.name}
                />
                <Select
                  disabled={restDay}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    handleChangeMuscle(e.target.value, exerciseToEdit.id)
                  }
                  defaultValue={exerciseToEdit.muscle}
                  w="60%"
                  size="sm"
                >
                  {muscleOptions.map((muscle: string) => (
                    <option key={exerciseToEdit.id} value={muscle}>
                      {capitalize(muscle)}
                    </option>
                  ))}
                </Select>
              </HStack>
            </Td>
            <Td border="none" px={0} pl={6} isNumeric>
              <NumberInput
                disabled={restDay}
                defaultValue={exerciseToEdit.reps}
                value={exerciseToEdit.reps}
                onChange={(value: string) =>
                  handleChangeReps(Number(value), exerciseToEdit.id)
                }
                max={999}
                min={1}
                size="sm"
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Td>
            <Td border="none" px={0} pl={6} pr={1} isNumeric>
              <NumberInput
                disabled={restDay}
                defaultValue={exerciseToEdit.series}
                value={exerciseToEdit.series}
                onChange={(value: string) =>
                  handleChangeSeries(Number(value), exerciseToEdit.id)
                }
                max={999}
                min={1}
                size="sm"
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Td>
          </Tr>
        ))}
      <AddNewExercise
        restDay={restDay}
        muscleOptions={muscleOptions}
        addExercise={handleAddExercise}
        volume={volume}
      />
    </>
  )
}

export default ExerciseTableRowEdit
