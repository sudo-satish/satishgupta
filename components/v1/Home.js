
import GetInTouchSection from '../GetInTouchSection/GetInTouchSection'
import HeaderSection from '../HeaderSection/HeaderSection'
import HeadMeta from '../HeadMeta/HeadMeta'
import HeroSection from '../HeroSection/HeroSection'
import NavBar from '../NavBar/NavBar'
import Skills from '../Skills/Skills'
import SkillSection from '../SkillSection/SkillSection'

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
