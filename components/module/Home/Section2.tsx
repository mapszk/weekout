import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react"
import SwiperCore, {
  EffectFlip,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/core"
import { FC } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/swiper.min.css"
import "swiper/components/effect-flip/effect-flip.min.css"
import "swiper/components/pagination/pagination.min.css"
import { useMediaQuery } from "hooks/useMediaQuery"

SwiperCore.use([EffectFlip, Pagination, Navigation, Autoplay])
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]

const Section2: FC = () => {
  const isBreakpoint = useMediaQuery(720)
  return (
    <Center
      id="section2"
      w="full"
      py={12}
      flexDirection={!isBreakpoint ? "row" : "column"}
    >
      <Stack mr={!isBreakpoint ? 24 : 0} mb={!isBreakpoint ? 0 : 12}>
        <Heading color="secondary.500">Organize your week</Heading>
        <Text
          position="relative"
          _after={{
            content: '""',
            position: "absolute",
            bottom: -3,
            right: 0,
            w: "10rem",
            h: "2px",
            bgGradient: "linear(to-r, transparent, primary.100)",
          }}
        >
          Organize your training routine for every day of the week
        </Text>
      </Stack>
      <Box w="full" maxW="350px" position="relative">
        <Swiper
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          effect={"flip"}
          grabCursor={true}
          pagination={true}
          loop={true}
        >
          {days.map((day, index) => {
            return (
              <SwiperSlide key={index}>
                <Box
                  color="black"
                  rounded="lg"
                  bgColor="gray.100"
                  p={6}
                  w="full"
                  h="450px"
                >
                  <Heading mb={2} fontSize="2xl" color="primary.500">
                    {day}
                  </Heading>
                  <Text mb={4} fontSize="sm">
                    (Swipe me!)
                  </Text>
                  <Text fontWeight="semibold" fontSize="lg" color="primary.500">
                    Your routine:
                  </Text>
                  <Stack mt={2}>
                    <Box
                      bgGradient="linear(to-r, transparent, third.100)"
                      rounded="md"
                      p={2}
                    >
                      Your exercises
                    </Box>
                    <Box
                      bgGradient="linear(to-r, transparent, third.100)"
                      rounded="md"
                      p={2}
                    >
                      Your exercises
                    </Box>
                    <Box
                      bgGradient="linear(to-r, transparent, third.100)"
                      rounded="md"
                      p={2}
                    >
                      Your exercises
                    </Box>
                    <Box
                      bgGradient="linear(to-r, transparent, third.100)"
                      rounded="md"
                      p={2}
                    >
                      Your exercises
                    </Box>
                    <Box
                      bgGradient="linear(to-r, transparent, third.100)"
                      rounded="md"
                      p={2}
                    >
                      Your exercises
                    </Box>
                  </Stack>
                </Box>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Box>
    </Center>
  )
}

export default Section2
