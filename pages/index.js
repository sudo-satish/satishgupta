import Head from 'next/head'
import GetInTouchSection from '../components/GetInTouchSection/GetInTouchSection'
import HeaderSection from '../components/HeaderSection/HeaderSection'
import HeroSection from '../components/HeroSection/HeroSection'
import NavBar from '../components/NavBar/NavBar'
import SkillSection from '../components/SkillSection/SkillSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Satish Gupta</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <NavBar />
      <HeaderSection />
      <HeroSection />
      <SkillSection />
      <GetInTouchSection />

    </>
  )
}
