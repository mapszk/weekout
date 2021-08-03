import { Box, Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react"
import { useMediaQuery } from "hooks/useMediaQuery"
import { FC } from "react"
import { Exercise } from "../dayTypes"
import ExerciseTableRow from "./ExerciseTableRow"

interface Props {
  activeVolume: string
  noneVolume: Exercise[]
  minVolume: Exercise[]
  midVolume: Exercise[]
  maxVolume: Exercise[]
}

const ExerciseTable: FC<Props> = ({
  activeVolume,
  noneVolume,
  minVolume,
  midVolume,
  maxVolume,
}) => {
  const isBreakpoint = useMediaQuery(720)
  return (
    <Box overflowX="auto">
      <Table overflowY="auto" h="auto" size={isBreakpoint ? "sm" : "md"}>
        <Thead>
          <Tr>
            <Th px={0} w="60%">
              Exercise
            </Th>
            <Th px={0} w="20%" isNumeric>
              Reps
            </Th>
            <Th px={0} pr={1} w="20%" isNumeric>
              Series
            </Th>
          </Tr>
        </Thead>
        <Tbody verticalAlign="top">
          {activeVolume === "NONE" && <ExerciseTableRow volume={noneVolume} />}
          {activeVolume === "MIN" && <ExerciseTableRow volume={minVolume} />}
          {activeVolume === "MAX" && <ExerciseTableRow volume={midVolume} />}
          {activeVolume === "+MAX" && <ExerciseTableRow volume={maxVolume} />}
        </Tbody>
      </Table>
    </Box>
  )
}

export default ExerciseTable
