import { Alert, Status } from "components/module/LoginForm/logInWithEmail"
import { clientDb } from "util/firebaseClient"
import { DayData } from "../dayTypes"

export const saveDay = async (
  userUid: string,
  dayData: DayData,
  dayName: string,
  setIsSubmitting: (value: boolean) => void
): Promise<Alert> => {
  return await clientDb
    .collection("users")
    .doc(userUid)
    .update({
      [dayName as string]: dayData,
    })
    .then(() => {
      setIsSubmitting(false)
      return {
        alertMsg: "Saved!",
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
