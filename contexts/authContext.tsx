import { createContext, FC, useEffect, useState } from "react"
import { clientAuth } from "util/firebaseClient"
import nookies from "nookies"

export const AuthContext = createContext<any>(null)

const AuthContextProvider: FC = ({ children }) => {
  const [user, setUser] = useState<any>(null)
  useEffect(() => {
    return clientAuth.onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null)
        nookies.set(undefined, "token", "", { path: "/" })
      } else {
        const token = await user.getIdToken()
        setUser(user)
        nookies.set(undefined, "token", token, { path: "/" })
      }
    })
  }, [])
  useEffect(() => {
    const handle = setInterval(async () => {
      const user = clientAuth.currentUser
      if (user) await user.getIdToken(true)
    }, 10 * 60 * 1000)
    return () => clearInterval(handle)
  }, [])
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider
