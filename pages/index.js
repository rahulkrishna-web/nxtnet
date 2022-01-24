import Head from 'next/head'
import Image from 'next/image'
import MainAppbar from '../components/mainAppbar'
import WelcomeSlider from '../components/welcomeSlider'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NxtNet | A place for startups, code and Web3.</title>
        <meta name="description" content="Nxtnet is the home of world's best developers building better startups using code and w3." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainAppbar />
      <WelcomeSlider />
    </div>
  )
}
