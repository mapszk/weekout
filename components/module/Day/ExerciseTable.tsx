import { Box, Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react"
import { useMediaQuery } from "hooks/useMediaQuery"
import { FC, useState } from "react"
import { Exercise } from "./dayTypes"
import ExerciseTableEdit from "./ExerciseTableEdit"
import ExerciseTableRow from "./ExerciseTableRow"

interface Props {
  isEdit?: boolean
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
  isEdit,
}) => {
  const isBreakpoint480 = useMediaQuery(480)
  const isBreakpoint720 = useMediaQuery(720)
  const [noneVolumeEdit, setNoneVolumeEdit] = useState<Exercise[]>(noneVolume)
  const [minVolumeEdit, setMinVolumeEdit] = useState<Exercise[]>(minVolume)
  const [maxVolumeEdit, setMaxVolumeEdit] = useState<Exercise[]>(maxVolume)
  const [plusMaxVolumeEdit, setPlusMaxVolume] =
    useState<Exercise[]>(plusMaxVolume)
  return (
    <Box overflowX="auto">
      <Table
        minW={isEdit ? "500px" : "0"}
        overflowY="auto"
        h={isBreakpoint720 ? "auto" : "450px"}
        size="sm"
      >
        <Thead>
          <Tr>
            <Th w="60%">Exercise</Th>
            <Th w="20%" isNumeric>
              {isBreakpoint480 ? "R" : "Reps"}
            </Th>
            <Th w="20%" isNumeric>
              {isBreakpoint480 ? "S" : "Series"}
            </Th>
          </Tr>
        </Thead>
        {!isEdit && (
          <Tbody verticalAlign="top">
            {activeVolume === "NONE" && (
              <ExerciseTableRow volume={noneVolume} />
            )}
            {activeVolume === "MIN" && <ExerciseTableRow volume={minVolume} />}
            {activeVolume === "MAX" && <ExerciseTableRow volume={maxVolume} />}
            {activeVolume === "+MAX" && (
              <ExerciseTableRow volume={plusMaxVolume} />
            )}
          </Tbody>
        )}
        {isEdit && (
          <Tbody overflowX="auto" verticalAlign="top">
            {activeVolume === "NONE" && (
              <ExerciseTableEdit
                editVolume={setNoneVolumeEdit}
                volumeToEdit={noneVolumeEdit}
              />
            )}
            {activeVolume === "MIN" && (
              <ExerciseTableEdit
                editVolume={setMinVolumeEdit}
                volumeToEdit={minVolumeEdit}
              />
            )}
            {activeVolume === "MAX" && (
              <ExerciseTableEdit
                editVolume={setMaxVolumeEdit}
                volumeToEdit={maxVolumeEdit}
              />
            )}
            {activeVolume === "+MAX" && (
              <ExerciseTableEdit
                editVolume={setPlusMaxVolume}
                volumeToEdit={plusMaxVolumeEdit}
              />
            )}
          </Tbody>
        )}
      </Table>
    </Box>
  )
}

export default ExerciseTable
