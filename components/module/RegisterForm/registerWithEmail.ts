import { clientAuth, clientDb } from "util/firebaseClient"
import { defaultData } from "./defaultData"

export type Status = "error" | "success"
export interface Alert {
  alertMsg: string
  alertStatus: Status
}

export const registerWithEmail = async (
  email: string,
  password: string,
  setIsSubmitting: (value: boolean) => void
): Promise<Alert> => {
  setIsSubmitting(true)
  if (email === "" || password === "") {
    setIsSubmitting(false)
    return {
      alertMsg: "Please fill all the fields",
      alertStatus: "error" as Status,
    }
  } else {
    return await clientAuth
      .createUserWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        const { user } = userCredential
        /* check if user already exists in database,
          if it doesn't exists it will create default routine values */
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
          alertMsg: "Account created",
          alertStatus: "success" as Status,
        }
      })
      .catch((err) => {
        setIsSubmitting(false)
        return {
          alertMsg: err.message,
          alertStatus: "error" as Status,
        }
      })
  }
}
