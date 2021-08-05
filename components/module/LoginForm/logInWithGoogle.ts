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
                  restDay: false,
                  noneVolume: [],
                  minVolume: [],
                  midVolume: [],
                  maxVolume: [],
                },
                monday: {
                  restDay: false,
                  noneVolume: [],
                  minVolume: [],
                  midVolume: [],
                  maxVolume: [],
                },
                tuesday: {
                  restDay: false,
                  noneVolume: [],
                  minVolume: [],
                  midVolume: [],
                  maxVolume: [],
                },
                wednesday: {
                  restDay: false,
                  noneVolume: [],
                  minVolume: [],
                  midVolume: [],
                  maxVolume: [],
                },
                thursday: {
                  restDay: false,
                  noneVolume: [],
                  minVolume: [],
                  midVolume: [],
                  maxVolume: [],
                },
                friday: {
                  restDay: false,
                  noneVolume: [],
                  minVolume: [],
                  midVolume: [],
                  maxVolume: [],
                },
                saturday: {
                  restDay: false,
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
