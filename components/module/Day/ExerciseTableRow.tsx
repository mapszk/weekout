import { Td, Tr } from "@chakra-ui/react"
import { FC } from "react"
import { capitalize } from "util/capitalize"
import { Exercise } from "./dayTypes"

interface Props {
  volume: any
}

const sameMuscle = (
  volume: Exercise[],
  exercise: Exercise,
  index: number
): boolean | void => {
  if (index !== 0) {
    const actualMuscle = exercise.muscle
    const musclePrevExercise = volume[index - 1].muscle
    if (actualMuscle === musclePrevExercise) return true
    else return false
  }
}

const ExerciseTableRow: FC<Props> = ({ volume }) => {
  if (volume.length) {
    return volume.map((exercise: Exercise, index: number) => (
      <>
        {!sameMuscle(volume, exercise, index) && (
          <Tr>
            <Td
              py={3}
              fontSize="md"
              color="third.700"
              fontWeight="semibold"
              colSpan={3}
            >
              {capitalize(exercise.muscle)}
            </Td>
          </Tr>
        )}
        <Tr _last={{ h: "100%" }}>
          <Td>{exercise.name}</Td>
          <Td isNumeric>{exercise.reps}</Td>
          <Td isNumeric>{exercise.series}</Td>
        </Tr>
      </>
    ))
  } else
    return (
      <Tr h="100px">
        <Td pt={20} textAlign="center" colSpan={3}>
          There are no exercises for this volume
        </Td>
      </Tr>
    )
}

export default ExerciseTableRow
