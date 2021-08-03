import {
  Box,
  Button,
  Flex,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react"
import { useAuth } from "hooks/useAuth"
import { useMediaQuery } from "hooks/useMediaQuery"
import { FC, useState } from "react"
import { DayData, Exercise } from "../dayTypes"
import ExerciseTableRowEdit from "./ExerciseTableRowEdit"
import { saveDay } from "./saveDay"

interface Props {
  dayName: string
  activeVolume: string
  noneVolume: Exercise[]
  minVolume: Exercise[]
  midVolume: Exercise[]
  maxVolume: Exercise[]
}

const ExerciseTableEdit: FC<Props> = ({
  activeVolume,
  noneVolume,
  minVolume,
  midVolume,
  maxVolume,
  dayName,
}) => {
  const isBreakpoint = useMediaQuery(720)
  const [noneVolumeEdit, setNoneVolumeEdit] = useState<Exercise[]>(noneVolume)
  const [minVolumeEdit, setMinVolumeEdit] = useState<Exercise[]>(minVolume)
  const [midVolumeEdit, setMidVolumeEdit] = useState<Exercise[]>(midVolume)
  const [maxVolumeEdit, setMaxVolumeEdit] = useState<Exercise[]>(maxVolume)

  const { user } = useAuth()
  const toast = useToast()
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const handleClickSave = async (dayData: DayData) => {
    const { alertStatus, alertMsg } = await saveDay(
      user.uid,
      dayData,
      dayName,
      setIsSubmitting
    )
    if (alertStatus === "success") {
      return toast({
        position: "top",
        status: alertStatus,
        description: alertMsg,
      })
    } else {
      return toast({
        position: "top",
        status: alertStatus,
        description: alertMsg,
      })
    }
  }

  return (
    <Flex direction="column">
      <Box overflow="auto">
        <Table h="auto" minW="500px" size="sm">
          <Thead>
            <Tr>
              <Th border="none" px={0.5} w="60%">
                Exercise
              </Th>
              <Th border="none" px={0.5} w="20%" isNumeric>
                Reps
              </Th>
              <Th border="none" px={0.5} pr={1} w="20%" isNumeric>
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
                setVolume={setMidVolumeEdit}
                volumeToEdit={midVolumeEdit}
              />
            )}
            {activeVolume === "+MAX" && (
              <ExerciseTableRowEdit
                setVolume={setMaxVolumeEdit}
                volumeToEdit={maxVolumeEdit}
              />
            )}
          </Tbody>
        </Table>
      </Box>
      <Button
        isLoading={isSubmitting}
        onClick={() =>
          handleClickSave({
            noneVolume: noneVolumeEdit,
            minVolume: minVolumeEdit,
            midVolume: midVolumeEdit,
            maxVolume: maxVolumeEdit,
          })
        }
        alignSelf="flex-end"
        isFullWidth={isBreakpoint}
        mt="2"
        colorScheme="secondary"
      >
        Save
      </Button>
    </Flex>
  )
}

export default ExerciseTableEdit
