import { ChangeEvent, FC, FormEvent, useState } from "react"
import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  useToast,
} from "@chakra-ui/react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import { logInWithEmail } from "./logInWithEmail"
import { useRouter } from "next/dist/client/router"
import { logInWithGoogle } from "./logInWithGoogle"

const LoginForm: FC = () => {
  const toast = useToast()
  const router = useRouter()
  const [showPass, setShowPass] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleWithGoogle = async () => {
    const { alertMsg, alertStatus } = await logInWithGoogle(setIsSubmitting)
    if (alertStatus === "success") {
      setTimeout(() => {
        router.push("/")
      }, 1500)
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
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const { alertMsg, alertStatus } = await logInWithEmail(
      email,
      password,
      setIsSubmitting
    )
    if (alertStatus === "success") {
      setTimeout(() => {
        router.push("/")
      }, 1500)
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
    <Stack mt={24} textAlign="center" w="full" maxW="450px">
      <Heading color="primary.500">Log in</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel fontWeight="normal">Email</FormLabel>
          <Input
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </FormControl>
        <FormControl mb={6}>
          <FormLabel fontWeight="normal">Password</FormLabel>
          <InputGroup>
            <Input
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            <InputRightElement
              onClick={() => setShowPass(!showPass)}
              cursor="pointer"
              fontSize="2xl"
              mr={1}
              color="third.700"
            >
              {showPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <ButtonGroup w="full" mb={4}>
          <Button
            onClick={handleWithGoogle}
            isLoading={isSubmitting}
            variant="outline"
            colorScheme="primary"
            isFullWidth
          >
            <FcGoogle /> With Google
          </Button>
          <Button
            isLoading={isSubmitting}
            type="submit"
            isFullWidth
            variant="gradientPrimary"
          >
            Log in
          </Button>
        </ButtonGroup>
      </form>
      <Link href="/register">{"I don't have an account"}</Link>
    </Stack>
  )
}

export default LoginForm
