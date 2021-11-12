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
  try {
    await adminAuth.verifyIdToken(cookies.token)
    return {
      redirect: {
        destination: `/${getDestination()}`,
        permanent: false,
      },
    }
  } catch (err) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    }
  }
}
export default index
