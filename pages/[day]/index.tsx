import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react"
import ExerciseTable from "components/module/Day/Tables/ExerciseTable"
import VolumePicker from "components/module/Day/VolumePicker"
import Head from "next/head"
import { FC, useEffect, useState } from "react"
import { capitalize } from "util/capitalize"
import { adminAuth, adminDb } from "util/firebaseServer"
import nookies from "nookies"
import { DayData } from "components/module/Day/dayTypes"
import { useMediaQuery } from "hooks/useMediaQuery"
import Timer from "components/module/Timer/Timer"
import DayHeader from "components/module/Day/DayHeader"
import Footer from "components/module/Day/Footer"
import { GetServerSidePropsContext } from "next"

interface Props {
  dayName: string
  dayData: DayData
}

const day: FC<Props> = ({ dayName, dayData }) => {
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
      <DayHeader dayName={dayName} />

      {/* for training routine render this */}
      {!dayData.restDay && (
        <>
          <VolumePicker
            activeVolume={activeVolume}
            setActiveVolume={setActiveVolume}
          />
          <Flex
            minH="calc(100vh - 250px)"
            direction={isBreakpoint ? "column" : "row"}
          >
            <Box mb={isBreakpoint ? 4 : 0} flex="3 1 0">
              <ExerciseTable 
                dayName={dayName} 
                volume={dayData.exercises.filter(ex => ex.volume === activeVolume.toLocaleLowerCase())} 
              />
            </Box>
            <Box
              position="sticky"
              alignSelf={isBreakpoint ? "stretch" : "flex-start"}
              top="4"
              ml={isBreakpoint ? 0 : 4}
              flex="2 1 0"
            >
              <Timer />
            </Box>
          </Flex>
        </>
      )}

      {/* if it's rest day render this  */}
      {dayData.restDay && (
        <Center minH="calc(100vh - 75px - 100px)" flexDirection="column">
          <Heading
            bgGradient="linear(to-r, secondary.500, primary.500)"
            bgClip="text"
            mb={1}
            size="2xl"
          >
            Rest day!
          </Heading>
          <Text color="third.500" fontWeight="semibold">
            Enjoy it :)
          </Text>
          <LinkBox mt={4}>
            <LinkOverlay href={`/${dayName}/edit`}>
              <Button size="sm" colorScheme="primary">
                Edit day
              </Button>
            </LinkOverlay>
          </LinkBox>
        </Center>
      )}

      <Footer />
    </>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx)
    const user = await adminAuth.verifyIdToken(cookies.token)
    const doc = await adminDb.collection("users").doc(user.uid).get()
    const data = doc.data()
    const { day } = ctx.query
    if (data) {
      const dayData: DayData = data[day as string]
      if (dayData !== undefined) {
        return {
          props: {
            dayName: day,
            dayData,
          },
        }
      } else {
        return {
          notFound: true,
        }
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
export default day
