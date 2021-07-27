import { Box, Center, Heading, useMediaQuery } from "@chakra-ui/react"
import { FC } from "react"

const Section3: FC = () => {
  const [isLargerThan720] = useMediaQuery("(min-width: 720px)")
  return (
    <Center>
      <Box>
        <Heading></Heading>
      </Box>
    </Center>
  )
}

export default Section3
