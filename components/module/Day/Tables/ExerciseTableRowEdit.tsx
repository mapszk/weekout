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

interface Props {
  restDay: boolean
  volumeToEdit: Exercise[]
  activeVolume: string
  setVolume: any
}
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

const ExerciseTableRowEdit: FC<Props> = ({
  volumeToEdit,
  setVolume,
  restDay,
  activeVolume
}) => {
  const handleAddExercise = (newExercise: Exercise): void => {
    setVolume((volume: Exercise[]) => [...volume, newExercise])
  }
  const handleRemoveExercise = (id: string): void => {
    setVolume((volume: Exercise[]) => volume.filter(ex => ex.id !== id))
  }
  const handleChangeMuscle = (newMuscle: string, id: string): void => {
    setVolume((volume: Exercise[]) => volume.map(ex => ex.id === id ? {...ex, muscle: newMuscle} : ex))
  }
  const handleChangeName = (newName: string, id: string): void => {
    setVolume((volume: Exercise[]) => volume.map(ex => ex.id === id ? {...ex, name: newName} : ex))
  }
  const handleChangeReps = (newReps: number, id: string): void => {
    setVolume((volume: Exercise[]) => volume.map(ex => ex.id === id ? {...ex, reps: newReps} : ex))
  }
  const handleChangeSeries = (newSeries: number, id: string): void => {
    setVolume((volume: Exercise[]) => volume.map(ex => ex.id === id ? {...ex, series: newSeries} : ex))
  }

  return (
    <>
      {volumeToEdit.length > 0 &&
        volumeToEdit.map((exerciseToEdit: Exercise) => (
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
        activeVolume={activeVolume}
        restDay={restDay}
        muscleOptions={muscleOptions}
        addExercise={handleAddExercise}
      />
    </>
  )
}

export default ExerciseTableRowEdit