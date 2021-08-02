import { GetServerSideProps } from "next"
import { adminAuth, adminDb } from "util/firebaseServer"
import nookies from "nookies"
import { FC, useEffect, useState } from "react"
import { DayData } from "components/module/Day/dayTypes"
import Head from "next/head"
import { capitalize } from "util/capitalize"
import DayHeader from "components/module/Day/DayHeader"
import { Box, Flex } from "@chakra-ui/react"
import VolumePicker from "components/module/Day/VolumePicker"
import { useMediaQuery } from "hooks/useMediaQuery"
import ExerciseTable from "components/module/Day/ExerciseTable"
import Timer from "components/module/Timer/Timer"

interface Props {
  dayName: string
  dayData: DayData
}

const edit: FC<Props> = ({ dayName, dayData }) => {
  const isBreakpoint = useMediaQuery(720)
  const [activeVolume, setActiveVolume] = useState<string>("NONE")
  useEffect(() => {
    if (localStorage.getItem("selectedVolume") !== null) {
      setActiveVolume(localStorage.getItem("selectedVolume") as string)
    }
  }, [])

  return (
    <>
      <Head>
        <title>{`Weekout - ${capitalize(dayName)}`}</title>
      </Head>
      <DayHeader isEdit dayName={dayName} />
      <VolumePicker
        activeVolume={activeVolume}
        setActiveVolume={setActiveVolume}
      />
      <Flex direction={isBreakpoint ? "column" : "row"}>
        <Box mb={isBreakpoint ? 4 : 0} flex="3 1 0">
          <ExerciseTable
            isEdit
            activeVolume={activeVolume}
            noneVolume={dayData.noneVolume}
            minVolume={dayData.minVolume}
            maxVolume={dayData.maxVolume}
            plusMaxVolume={dayData.plusMaxVolume}
          />
        </Box>
        <Box ml={isBreakpoint ? 0 : 4} flex="2 1 0">
          <Timer />
        </Box>
      </Flex>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const cookies = nookies.get(ctx)
    const user = await adminAuth.verifyIdToken(cookies.token)
    const doc = await adminDb.collection("users").doc(user.uid).get()
    const data = doc.data()
    console.log(data)
    const { day } = ctx.query
    if (data) {
      const dayData = data[day as string]
      return {
        props: {
          dayName: day,
          dayData,
        },
      }
    } else {
      return {
        redirect: {
          destination: "/404",
          permanent: false,
        },
      }
    }
  } catch (err) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    }
  }
}
export default edit
