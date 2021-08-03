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
import uniqid from "uniqid"
import { ChangeEvent, FC, useState } from "react"
import { capitalize } from "util/capitalize"
import { Exercise } from "./dayTypes"

interface Props {
  muscleOptions: string[]
  addExercise: (newExercise: Exercise) => void
}

const AddNewExercise: FC<Props> = ({ muscleOptions, addExercise }) => {
  const [newExName, setNewExName] = useState<string>("")
  const [newExMuscle, setNewExMuscle] = useState<string>("quadriceps")
  const [newExReps, setNewExReps] = useState<number>(1)
  const [newExSeries, setNewExSeries] = useState<number>(1)
  const clearAll = (): void => {
    setNewExName("")
    setNewExMuscle("quadriceps")
    setNewExReps(1)
    setNewExSeries(1)
  }
  return (
    <Tr minW="500px" _last={{ h: "100%" }}>
      <Td border="none" px={0.5}>
        <HStack>
          <Button
            onClick={() => {
              clearAll()
              addExercise({
                name: newExName,
                muscle: newExMuscle,
                reps: Number(newExReps),
                series: Number(newExSeries),
                id: uniqid(),
              })
            }}
            fontWeight="light"
            fontSize="lg"
            size="xs"
            colorScheme="secondary"
          >
            +
          </Button>
          <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNewExName(e.target.value)
            }
            size="sm"
            value={newExName}
          />
          <Select
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setNewExMuscle(e.target.value)
            }
            defaultValue={newExMuscle}
            w="60%"
            size="sm"
          >
            {muscleOptions.map((muscle: string, index) => (
              <option key={index} value={muscle}>
                {capitalize(muscle)}
              </option>
            ))}
          </Select>
        </HStack>
      </Td>
      <Td border="none" px={0} pl={6} isNumeric>
        <NumberInput
          defaultValue={newExReps}
          value={newExReps}
          onChange={(value: string) => setNewExReps(Number(value))}
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
          defaultValue={newExSeries}
          value={newExSeries}
          onChange={(value: string) => setNewExSeries(Number(value))}
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
  )
}

export default AddNewExercise
