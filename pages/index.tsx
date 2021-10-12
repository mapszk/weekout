import { GetServerSideProps } from "next"
import { FC } from "react"
import { adminAuth } from "util/firebaseServer"
import nookies from "nookies"
import { getDestination } from "util/getDestination"

const index: FC = () => {
  return <div></div>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx)
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
