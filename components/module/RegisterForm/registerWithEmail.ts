import { clientAuth } from "util/firebaseClient"

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
      .then(() => {
        setIsSubmitting(false)
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
