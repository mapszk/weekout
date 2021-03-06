export const Button = {
  variants: {
    gradientPrimary: {
      bgGradient: "linear(to-r, primary.500, third.500)",
      color: "white",
      boxShadow: "base",
      _hover: {
        opacity: "0.8",
        boxShadow: "lg",
      },
    },
    gradientSecondary: {
      bgGradient: "linear(to-r, third.500, secondary.500)",
      color: "white",
      boxShadow: "base",
      _hover: {
        opacity: "0.8",
        boxShadow: "lg",
      },
    },
    outline: {
      border: "1px solid",
      boxShadow: "base",
      _hover: {
        bgColor: "transparent",
        opacity: "0.8",
      },
    },
    ghost: {
      boxShadow: "base",
      _hover: {
        bgColor: "transparent",
        opacity: "0.8",
      },
    },
  },
  baseStyle: {
    boxShadow: "base",
  },
}
