import { Hero } from '../components/sections/Hero'
import { Intro } from '../components/sections/Intro'
import { EliteBanner } from '../components/sections/EliteBanner'
import { ServicesPreview } from '../components/sections/ServicesPreview'
import { HowItWorks } from '../components/sections/HowItWorks'
import { Stats } from '../components/sections/Stats'
import { Testimonials } from '../components/sections/Testimonials'
import { ContactCTA } from '../components/sections/ContactCTA'

export function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <EliteBanner />
      <ServicesPreview />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <ContactCTA />
    </>
  )
}
