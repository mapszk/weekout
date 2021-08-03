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
