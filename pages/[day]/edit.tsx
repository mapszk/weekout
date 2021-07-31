import { GetServerSideProps } from "next"
import { adminAuth, adminDb } from "util/firebaseServer"
import nookies from "nookies"
import { FC } from "react"
import { DayData } from "components/module/Day/dayTypes"

interface Props {
  dayName: string
  dayData: DayData
}

const edit: FC<Props> = ({ dayName, dayData }) => {
  return <div>editando</div>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const cookies = nookies.get(ctx)
    const user = await adminAuth.verifyIdToken(cookies.token)
    const doc = await adminDb.collection("users").doc(user.uid).get()
    const data = doc.data()
    console.log(data)
    const { day } = ctx.query
    if (data) {
      const dayData = data[day as string]
      return {
        props: {
          dayName: day,
          dayData,
        },
      }
    } else {
      return {
        redirect: {
          destination: "/404",
          permanent: false,
        },
      }
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
export default edit
