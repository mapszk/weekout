import { Box, Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react"
import { FC, useState } from "react"
import { Exercise } from "../dayTypes"
import ExerciseTableRowEdit from "./ExerciseTableRowEdit"

interface Props {
  activeVolume: string
  noneVolume: Exercise[]
  minVolume: Exercise[]
  maxVolume: Exercise[]
  plusMaxVolume: Exercise[]
}

const ExerciseTableEdit: FC<Props> = ({
  activeVolume,
  noneVolume,
  minVolume,
  maxVolume,
  plusMaxVolume,
}) => {
  const [noneVolumeEdit, setNoneVolumeEdit] = useState<Exercise[]>(noneVolume)
  const [minVolumeEdit, setMinVolumeEdit] = useState<Exercise[]>(minVolume)
  const [maxVolumeEdit, setMaxVolumeEdit] = useState<Exercise[]>(maxVolume)
  const [plusMaxVolumeEdit, setPlusMaxVolume] =
    useState<Exercise[]>(plusMaxVolume)

  return (
    <Box overflowX="auto">
      <Table h="auto" size="sm">
        <Thead>
          <Tr>
            <Th px={0} w="60%">
              Exercise
            </Th>
            <Th px={0} w="20%" isNumeric>
              Reps
            </Th>
            <Th px={0} w="20%" isNumeric>
              Series
            </Th>
          </Tr>
        </Thead>
        <Tbody overflowX="auto" verticalAlign="top">
          {activeVolume === "NONE" && (
            <ExerciseTableRowEdit
              setVolume={setNoneVolumeEdit}
              volumeToEdit={noneVolumeEdit}
            />
          )}
          {activeVolume === "MIN" && (
            <ExerciseTableRowEdit
              setVolume={setMinVolumeEdit}
              volumeToEdit={minVolumeEdit}
            />
          )}
          {activeVolume === "MAX" && (
            <ExerciseTableRowEdit
              setVolume={setMaxVolumeEdit}
              volumeToEdit={maxVolumeEdit}
            />
          )}
          {activeVolume === "+MAX" && (
            <ExerciseTableRowEdit
              setVolume={setPlusMaxVolume}
              volumeToEdit={plusMaxVolumeEdit}
            />
          )}
        </Tbody>
      </Table>
    </Box>
  )
}

export default ExerciseTableEdit
