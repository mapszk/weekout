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
import AddNewExercise from "./AddNewExercise"
import { Exercise } from "./dayTypes"

interface Props {
  volumeToEdit: Exercise[]
  setVolume: (value: Exercise[]) => void
}
const muscleOptions = [
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

const ExerciseTableRowEdit: FC<Props> = ({ volumeToEdit, setVolume }) => {
  const handleAddExercise = (newExercise: Exercise): void => {
    const newVolume = [...volumeToEdit, newExercise]
    setVolume(newVolume)
  }
  const handleRemoveExercise = (id: string): void => {
    const newVolume = volumeToEdit.filter((ex: Exercise) => ex.id !== id)
    setVolume(newVolume)
  }
  const handleChangeMuscle = (newMuscle: string, id: string): void => {
    const newVolume = volumeToEdit.map((ex: Exercise) =>
      ex.id === id ? { ...ex, muscle: newMuscle } : ex
    )
    setVolume(newVolume)
  }
  const handleChangeName = (newName: string, id: string): void => {
    const newVolume = volumeToEdit.map((ex: Exercise) =>
      ex.id === id ? { ...ex, name: newName } : ex
    )
    setVolume(newVolume)
  }
  const handleChangeReps = (newReps: number, id: string): void => {
    const newVolume = volumeToEdit.map((ex: Exercise) =>
      ex.id === id ? { ...ex, reps: newReps } : ex
    )
    setVolume(newVolume)
  }
  const handleChangeSeries = (newSeries: number, id: string): void => {
    const newVolume = volumeToEdit.map((ex: Exercise) =>
      ex.id === id ? { ...ex, series: newSeries } : ex
    )
    setVolume(newVolume)
  }

  return (
    <>
      {volumeToEdit.length > 0 &&
        volumeToEdit.map((exerciseToEdit: Exercise) => (
          <Tr minW="500px" _last={{ h: "100%" }} key={exerciseToEdit.id}>
            <Td px={0}>
              <HStack>
                <Button
                  onClick={() => handleRemoveExercise(exerciseToEdit.id)}
                  fontWeight="light"
                  size="xs"
                  colorScheme="third"
                >
                  X
                </Button>
                <Input
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleChangeName(e.target.value, exerciseToEdit.id)
                  }
                  size="sm"
                  value={exerciseToEdit.name}
                />
                <Select
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
            <Td px={0} pl={6} isNumeric>
              <NumberInput
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
            <Td px={0} pl={6} isNumeric>
              <NumberInput
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
        muscleOptions={muscleOptions}
        addExercise={handleAddExercise}
      />
    </>
  )
}

export default ExerciseTableRowEdit
