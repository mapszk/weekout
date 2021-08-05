import {
  Box,
  Button,
  LinkBox,
  LinkOverlay,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react"
import { useMediaQuery } from "hooks/useMediaQuery"
import { FC } from "react"
import { Exercise } from "../dayTypes"
import ExerciseTableRow from "./ExerciseTableRow"

interface Props {
  dayName: string
  activeVolume: string
  noneVolume: Exercise[]
  minVolume: Exercise[]
  midVolume: Exercise[]
  maxVolume: Exercise[]
}

const ExerciseTable: FC<Props> = ({
  dayName,
  activeVolume,
  noneVolume,
  minVolume,
  midVolume,
  maxVolume,
}) => {
  const isBreakpoint = useMediaQuery(720)
  return (
    <>
      <Box overflowX="auto">
        <Table overflowY="auto" h="auto" size={isBreakpoint ? "sm" : "md"}>
          <Thead>
            <Tr>
              <Th
                borderBottom="1px"
                borderBottomColor="gray.100"
                px={0}
                w="60%"
              >
                Exercise
              </Th>
              <Th
                borderBottom="1px"
                borderBottomColor="gray.100"
                px={0}
                w="20%"
                isNumeric
              >
                Reps
              </Th>
              <Th
                borderBottom="1px"
                borderBottomColor="gray.100"
                px={0}
                pr={1}
                w="20%"
                isNumeric
              >
                Series
              </Th>
            </Tr>
          </Thead>
          <Tbody verticalAlign="top">
            {activeVolume === "NONE" && (
              <ExerciseTableRow volume={noneVolume} />
            )}
            {activeVolume === "MIN" && <ExerciseTableRow volume={minVolume} />}
            {activeVolume === "MID" && <ExerciseTableRow volume={midVolume} />}
            {activeVolume === "MAX" && <ExerciseTableRow volume={maxVolume} />}
          </Tbody>
        </Table>
      </Box>
      <LinkBox mt={4}>
        <LinkOverlay href={`/${dayName}/edit`}>
          <Button size="sm" colorScheme="primary">
            Edit day
          </Button>
        </LinkOverlay>
      </LinkBox>
    </>
  )
}

export default ExerciseTable
