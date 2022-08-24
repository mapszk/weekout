import { Td, Tr } from "@chakra-ui/react"
import { FC } from "react"
import { capitalize } from "util/capitalize"
import { sameMuscle } from "util/sameMuscle"
import { Exercise } from "../dayTypes"

interface Props {
  exercises: any
}

const ExerciseTableRow: FC<Props> = ({ exercises }) => {
  if (exercises.length) {
    return exercises
      .sort((a: Exercise, b: Exercise) => a.muscle.localeCompare(b.muscle))
      .map((ex: Exercise, index: number) => (
        <>
          {!sameMuscle(exercises, ex, index) && (
            <Tr>
              <Td
                borderBottom="1px"
                borderBottomColor="third.200"
                px={0}
                py={3}
                fontSize="md"
                color="third.700"
                fontWeight="semibold"
                colSpan={3}
              >
                {capitalize(ex.muscle)}
              </Td>
            </Tr>
          )}
          <Tr _last={{ h: "100%" }}>
            <Td borderBottom="1px" borderBottomColor="gray.100" px={0.5}>
              {ex.name}
            </Td>
            <Td
              borderBottom="1px"
              borderBottomColor="gray.100"
              isNumeric
              px={0}
              pl={6}
            >
              {ex.reps}
            </Td>
            <Td
              borderBottom="1px"
              borderBottomColor="gray.100"
              isNumeric
              px={0}
              pl={6}
              pr={1}
            >
              {ex.series}
            </Td>
          </Tr>
        </>
      ))
  } else
    return (
      <Tr>
        <Td border="none" py={32} textAlign="center" colSpan={3}>
          There are no exercises for this volume
        </Td>
      </Tr>
    )
}

export default ExerciseTableRow
