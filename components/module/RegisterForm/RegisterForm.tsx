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
import { logInWithGoogle } from "components/module/LoginForm/logInWithGoogle"
import { useRouter } from "next/dist/client/router"
import { ChangeEvent, FC, FormEvent, useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import { registerWithEmail } from "./registerWithEmail"

const RegisterForm: FC = () => {
  const toast = useToast()
  const router = useRouter()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [showPass, setShowPass] = useState<boolean>(false)

  const handleWithGoogle = async () => {
    const { alertMsg, alertStatus } = await logInWithGoogle(setIsSubmitting)
    if (alertStatus === "success") {
      router.push("/")
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
    const { alertMsg, alertStatus } = await registerWithEmail(
      email,
      password,
      setIsSubmitting
    )
    if (alertStatus === "success") {
      router.push("/login")
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
      <Heading color="primary.500">Create an account</Heading>
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
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              type={showPass ? "text" : "password"}
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
            <FcGoogle /> With google
          </Button>
          <Button
            isLoading={isSubmitting}
            type="submit"
            isFullWidth
            variant="gradientPrimary"
          >
            Create
          </Button>
        </ButtonGroup>
      </form>
      <Link href="/login">{"I have an account"}</Link>
    </Stack>
  )
}

export default RegisterForm
