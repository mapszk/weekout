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
              px={0}
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
          <Td px={0}>{exercise.name}</Td>
          <Td isNumeric px={0} pl={6}>
            {exercise.reps}
          </Td>
          <Td isNumeric px={0} pl={6}>
            {exercise.series}
          </Td>
        </Tr>
      </>
    ))
  } else
    return (
      <Tr>
        <Td py={4} textAlign="center" colSpan={3}>
          There are no exercises for this volume
        </Td>
      </Tr>
    )
}

export default ExerciseTableRow
