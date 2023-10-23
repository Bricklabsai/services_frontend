import Nav from '@/components/Nav'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Services from '@/components/services'
import AvailabilitySection from '@/components/availability'

export default function Home() {
  return (
    <div>
      <Nav />
      {/* <Footer/> */}
      <Hero />
      <Services />
      <AvailabilitySection />

    </div>
  )
}