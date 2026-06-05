import { Hero } from '../components/sections/Hero'
import { Intro } from '../components/sections/Intro'
import { WeddingJourney } from '../components/sections/WeddingJourney'
import { ServicesPreview } from '../components/sections/ServicesPreview'
import { Stats } from '../components/sections/Stats'
import { Testimonials } from '../components/sections/Testimonials'
import { Destinations } from '../components/sections/Destinations'
import { PortfolioPreview } from '../components/sections/PortfolioPreview'
import { ContactCTA } from '../components/sections/ContactCTA'

export function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <WeddingJourney />
      <ServicesPreview />
      <Stats />
      <Testimonials />
      <Destinations />
      <PortfolioPreview />
      <ContactCTA />
    </>
  )
}
