import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { useMediaQuery } from "hooks/useMediaQuery"
import { FC } from "react"
import { Exercise } from "./dayTypes"

interface Props {
  activeVolume: string
  noneVolume: Exercise[]
  minVolume: Exercise[]
  maxVolume: Exercise[]
  plusMaxVolume: Exercise[]
}

const ExerciseTable: FC<Props> = ({
  activeVolume,
  noneVolume,
  minVolume,
  maxVolume,
  plusMaxVolume,
}) => {
  const isBreakpoint = useMediaQuery(480)
  const isBreakpoint720 = useMediaQuery(720)
  return (
    <Table overflowY="auto" h={isBreakpoint720 ? "350px" : "450px"} size="sm">
      <Thead>
        <Tr>
          <Th>Exercise</Th>
          <Th isNumeric>{isBreakpoint ? "R" : "Reps"}</Th>
          <Th isNumeric>{isBreakpoint ? "S" : "Series"}</Th>
        </Tr>
      </Thead>
      <Tbody verticalAlign="top">
        {activeVolume === "NONE" ? (
          noneVolume.length > 0 ? (
            noneVolume.map((exercise) => {
              return (
                <Tr key={exercise.name}>
                  <Td>{exercise.name}</Td>
                  <Td isNumeric>{exercise.reps}</Td>
                  <Td isNumeric>{exercise.series}</Td>
                </Tr>
              )
            })
          ) : (
            <Tr h="100px">
              <Td pt={20} textAlign="center" colSpan={3}>
                There are no exercises for this volume
              </Td>
            </Tr>
          )
        ) : null}
        {activeVolume === "MIN" ? (
          minVolume.length > 0 ? (
            minVolume.map((exercise) => {
              return (
                <Tr key={exercise.name}>
                  <Td>{exercise.name}</Td>
                  <Td isNumeric>{exercise.reps}</Td>
                  <Td isNumeric>{exercise.series}</Td>
                </Tr>
              )
            })
          ) : (
            <Tr h="100px">
              <Td pt={20} textAlign="center" colSpan={3}>
                There are no exercises for this volume
              </Td>
            </Tr>
          )
        ) : null}
        {activeVolume === "MAX" ? (
          maxVolume.length > 0 ? (
            maxVolume.map((exercise) => {
              return (
                <Tr key={exercise.name}>
                  <Td>{exercise.name}</Td>
                  <Td isNumeric>{exercise.reps}</Td>
                  <Td isNumeric>{exercise.series}</Td>
                </Tr>
              )
            })
          ) : (
            <Tr h="100px">
              <Td pt={20} textAlign="center" colSpan={3}>
                There are no exercises for this volume
              </Td>
            </Tr>
          )
        ) : null}
        {activeVolume === "+MAX" ? (
          plusMaxVolume.length > 0 ? (
            plusMaxVolume.map((exercise) => {
              return (
                <Tr key={exercise.name}>
                  <Td>{exercise.name}</Td>
                  <Td isNumeric>{exercise.reps}</Td>
                  <Td isNumeric>{exercise.series}</Td>
                </Tr>
              )
            })
          ) : (
            <Tr h="100px">
              <Td pt={20} textAlign="center" colSpan={3}>
                There are no exercises for this volume
              </Td>
            </Tr>
          )
        ) : null}
      </Tbody>
    </Table>
  )
}

export default ExerciseTable
