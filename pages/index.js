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
        <meta name="description" content="Satish Gupta, Highly skilled developer with experience of more than 4.5 years."></meta>
        <meta property="og:title" content="Satish Gupta's portfolio" />
        <meta property="og:url" content="https://satishgupta.dev/" />
        <meta property="og:description" content="Satish Gupta, Highly skilled developer with experience of more than 4.5 years." />
        <meta property="og:image" content="https://satishgupta.dev/img/profile-image-reduced-quality.jpg" />
        <meta property="og:type" content="profile" />
        <meta property="og:profile:first_name" content="Satish" />
        <meta property="og:profile:last_name" content="Gupta" />
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
