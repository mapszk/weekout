import { GetServerSideProps } from "next"
import { FC } from "react"
import { adminAuth } from "util/firebaseServer"
import nookies from "nookies"

const index: FC = () => {
  return <div></div>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx)
  const getDestination = (): string => {
    const date = new Date(Date.now())
    switch (date.getDay()) {
      case 0:
        return "sunday"
      case 1:
        return "monday"
      case 2:
        return "tuesday"
      case 3:
        return "wednesday"
      case 4:
        return "thursday"
      case 5:
        return "friday"
      case 6:
        return "saturday"
      default:
        return "monday"
    }
  }
  return await adminAuth
    .verifyIdToken(cookies.token)
    .then(() => {
      return {
        redirect: {
          destination: `/${getDestination()}`,
          permanent: false,
        },
      }
    })
    .catch(() => {
      return {
        redirect: {
          destination: "/home",
          permanent: false,
        },
      }
    })
}
export default index
