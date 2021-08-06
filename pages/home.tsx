import { FC } from "react"
import Section1 from "components/module/Home/Section1"
import Section2 from "components/module/Home/Section2"
import Section3 from "components/module/Home/Section3"
import Section4 from "components/module/Home/Section4"
import Section5 from "components/module/Home/Section5"
import Head from "next/head"
import { GetServerSideProps } from "next"
import { adminAuth } from "util/firebaseServer"
import nookies from "nookies"

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Welcome to Weekout</title>
      </Head>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx)
  return await adminAuth
    .verifyIdToken(cookies.token)
    .then(() => {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      }
    })
    .catch(() => {
      return {
        props: {},
      }
    })
}
export default Home
