import { GetServerSideProps } from "next"
import { FC } from "react"
import { adminAuth } from "util/firebaseServer"
import nookies from "nookies"

interface Props {
  data: string
}
const index: FC<Props> = ({ data }) => {
  return <div>{data}</div>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx)
  return await adminAuth
    .verifyIdToken(cookies.token)
    .then(() => {
      return {
        props: {
          data: "asd2asds",
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
