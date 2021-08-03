import { authWithGoogle, clientDb } from "util/firebaseClient"
import { Alert, Status } from "./logInWithEmail"

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
              .set({
                sunday: {
                  noneVolume: [],
                  minVolume: [],
                  midVolume: [],
                  maxVolume: [],
                },
                monday: {
                  noneVolume: [],
                  minVolume: [],
                  midVolume: [],
                  maxVolume: [],
                },
                tuesday: {
                  noneVolume: [],
                  minVolume: [],
                  midVolume: [],
                  maxVolume: [],
                },
                wednesday: {
                  noneVolume: [],
                  minVolume: [],
                  midVolume: [],
                  maxVolume: [],
                },
                thursday: {
                  noneVolume: [],
                  minVolume: [],
                  midVolume: [],
                  maxVolume: [],
                },
                friday: {
                  noneVolume: [],
                  minVolume: [],
                  midVolume: [],
                  maxVolume: [],
                },
                saturday: {
                  noneVolume: [],
                  minVolume: [],
                  midVolume: [],
                  maxVolume: [],
                },
              })
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
