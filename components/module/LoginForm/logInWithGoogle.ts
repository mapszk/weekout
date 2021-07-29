import { authWithGoogle } from "util/firebaseClient"
import { Alert, Status } from "./logInWithEmail"

export const logInWithGoogle = async (
  setIsSubmitting: (value: boolean) => void
): Promise<Alert> => {
  return await authWithGoogle()
    .then(() => {
      setIsSubmitting(false)
      return {
        alertMsg: "Logged!",
        alertStatus: "success" as Status,
      }
    })
    .catch((err) => {
      setIsSubmitting(false)
      return {
        alertMsg: err.msg,
        alertStatus: "error" as Status,
      }
    })
}
