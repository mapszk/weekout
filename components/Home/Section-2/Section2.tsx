import {
  Box,
  Center,
  Heading,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react"
import SwiperCore, {
  EffectFlip,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/core"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { FC, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/swiper.min.css"
import "swiper/components/effect-flip/effect-flip.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

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
  const [isLargerThan720] = useMediaQuery("(min-width: 720px)")
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)
  return (
    <Center
      id="section2"
      flexDir={isLargerThan720 ? "row" : "column"}
      h="500px"
      w="full"
    >
      <Stack mb={!isLargerThan720 ? 10 : 0} pr={isLargerThan720 ? 32 : 0}>
        <Heading color="secondary.500">Organize your week</Heading>
        <Text
          position="relative"
          _after={{
            content: '""',
            position: "absolute",
            bottom: -4,
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
          navigation={{
            prevEl: prevRef.current ? prevRef.current : undefined,
            nextEl: nextRef.current ? nextRef.current : undefined,
          }}
          onInit={(swiper) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.prevEl = prevRef.current
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.nextEl = nextRef.current
            swiper.navigation.update()
          }}
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
                      Your excercises
                    </Box>
                    <Box
                      bgGradient="linear(to-r, transparent, third.100)"
                      rounded="md"
                      p={2}
                    >
                      Your excercises
                    </Box>
                    <Box
                      bgGradient="linear(to-r, transparent, third.100)"
                      rounded="md"
                      p={2}
                    >
                      Your excercises
                    </Box>
                    <Box
                      bgGradient="linear(to-r, transparent, third.100)"
                      rounded="md"
                      p={2}
                    >
                      Your excercises
                    </Box>
                    <Box
                      bgGradient="linear(to-r, transparent, third.100)"
                      rounded="md"
                      p={2}
                    >
                      Your excercises
                    </Box>
                  </Stack>
                </Box>
              </SwiperSlide>
            )
          })}
          <Box
            display={isLargerThan720 ? "block" : "none"}
            position="absolute"
            left={-10}
            cursor="pointer"
            top="50%"
            zIndex="10"
            fontSize="xl"
            color="third.500"
            ref={prevRef}
          >
            <FaChevronLeft />
          </Box>
          <Box
            display={isLargerThan720 ? "block" : "none"}
            position="absolute"
            right={-10}
            cursor="pointer"
            top="50%"
            zIndex="10"
            fontSize="xl"
            color="third.500"
            ref={nextRef}
          >
            <FaChevronRight />
          </Box>
        </Swiper>
      </Box>
    </Center>
  )
}

export default Section2
