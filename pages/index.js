
import GetInTouchSection from '../components/GetInTouchSection/GetInTouchSection'
import HeaderSection from '../components/HeaderSection/HeaderSection'
import HeadMeta from '../components/HeadMeta/HeadMeta'
import HeroSection from '../components/HeroSection/HeroSection'
import NavBar from '../components/NavBar/NavBar'
import Skills from '../components/Skills/Skills'
import SkillSection from '../components/SkillSection/SkillSection'

export default function Home() {
  return (
    <>
      <HeadMeta />
      <NavBar />
      <HeaderSection />
      <HeroSection />
      <SkillSection />
      <GetInTouchSection />
      <Skills />
    </>
  )
}
