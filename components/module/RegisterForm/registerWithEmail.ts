import { clientAuth, clientDb } from "util/firebaseClient"

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
