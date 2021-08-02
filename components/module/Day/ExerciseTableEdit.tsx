import {
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
import { FC } from "react"
import { capitalize } from "util/capitalize"
import { Exercise } from "./dayTypes"

interface Props {
  volumeToEdit: any
  editVolume: (value: Exercise[]) => void
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

const ExerciseTableEdit: FC<Props> = ({ volumeToEdit, editVolume }) => {
  return volumeToEdit.map((exerciseToEdit: Exercise, index: number) => (
    <Tr minW="500px" _last={{ h: "100%" }} key={index}>
      <Td>
        <HStack>
          <Input aria-colspan={1} size="sm" value={exerciseToEdit.name} />
          <Select w="60%" size="sm">
            {muscleOptions.map((muscle, index) => (
              <option key={index} value={muscle}>
                {capitalize(muscle)}
              </option>
            ))}
          </Select>
        </HStack>
      </Td>
      <Td isNumeric>
        <NumberInput value={exerciseToEdit.reps} size="sm">
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Td>
      <Td isNumeric>
        <NumberInput value={exerciseToEdit.series} size="sm">
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Td>
    </Tr>
  ))
}

export default ExerciseTableEdit
