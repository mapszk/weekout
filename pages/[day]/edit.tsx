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
import Timer from "components/module/Timer/Timer"
import ExerciseTableEdit from "components/module/Day/Tables/ExerciseTableEdit"
import Footer from "components/module/Day/Footer"

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
      <Box pb={4} minH="calc(100vh - 250px)">
        <Flex direction={isBreakpoint ? "column" : "row"}>
          <Box mb={isBreakpoint ? 4 : 0} flex="3 1 0">
            <ExerciseTableEdit
              dayName={dayName}
              restDay={dayData.restDay}
              activeVolume={activeVolume}
              noneVolume={dayData.noneVolume}
              minVolume={dayData.minVolume}
              midVolume={dayData.midVolume}
              maxVolume={dayData.maxVolume}
            />
          </Box>
          <Box
            position="sticky"
            alignSelf={isBreakpoint ? "stretch" : "flex-start"}
            top="4"
            ml={isBreakpoint ? 0 : 4}
            flex="2 1 0"
          >
            <Timer isEdit />
          </Box>
        </Flex>
      </Box>
      <Footer />
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
