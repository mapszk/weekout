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
                timer: 0,
                sunday: {
                  noneVolume: [],
                  minVolume: [],
                  maxVolume: [],
                  plusMaxVolume: [],
                },
                monday: {
                  noneVolume: [],
                  minVolume: [],
                  maxVolume: [],
                  plusMaxVolume: [],
                },
                tuesday: {
                  noneVolume: [],
                  minVolume: [],
                  maxVolume: [],
                  plusMaxVolume: [],
                },
                wednesday: {
                  noneVolume: [],
                  minVolume: [],
                  maxVolume: [],
                  plusMaxVolume: [],
                },
                thursday: {
                  noneVolume: [],
                  minVolume: [],
                  maxVolume: [],
                  plusMaxVolume: [],
                },
                friday: {
                  noneVolume: [],
                  minVolume: [],
                  maxVolume: [],
                  plusMaxVolume: [],
                },
                saturday: {
                  noneVolume: [],
                  minVolume: [],
                  maxVolume: [],
                  plusMaxVolume: [],
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
