import { authWithGoogle, clientDb } from "util/firebaseClient"
import { Alert, Status } from "./logInWithEmail"
import { defaultData } from "./defaultData"

export const logInWithGoogle = async (
  setIsSubmitting: (value: boolean) => void
): Promise<Alert> => {
  return await authWithGoogle()
    .then(async (result) => {
      const user = result.user
      await clientDb
        .collection("users")
        .doc(user?.uid)
        .get()
        .then(async (doc) => {
          if (!doc.exists) {
            await clientDb
              .collection("users")
              .doc(user?.uid)
              .set(defaultData)
          }
        })
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
