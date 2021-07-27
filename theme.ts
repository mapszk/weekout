import { extendTheme } from "@chakra-ui/react"
import { Button } from "components/Button"
import { Input } from "components/Input"

export const customTheme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  colors: {
    primary: {
      50: "#99e6ff",
      100: "#85e0ff",
      200: "#70dbff",
      300: "#5cd6ff",
      400: "#47d1ff",
      500: "#32cbff",
      600: "#1fc7ff",
      700: "#0ac2ff",
      800: "#00b8f5",
      900: "#00a8e0",
    },
    secondary: {
      50: "#fcedf8",
      100: "#f9cdf2",
      200: "#f6caeb",
      300: "#f4b9e5",
      400: "#EF9CDA",
      500: "#ee96d8",
      600: "#eb84d1",
      700: "#e873cb",
      800: "#e561c4",
      900: "#e250be",
    },
    third: {
      50: "#edf1fd",
      100: "#dbe2fa",
      200: "#c9d4f8",
      300: "#b7c6f5",
      400: "#a5b7f3",
      500: "#89A1EF",
      600: "#819bee",
      700: "#6f8ceb",
      800: "#5d7ee9",
      900: "#4b70e7",
    },
  },
  components: {
    Button,
    Input,
  },
})
