

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { FarmWebPageOverview } from '@/components/FarmWebPageOverview'
import { Testimonials } from '@/components/Testimonials'
import { Stats } from '@/components/Stats'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats/>
        <CallToAction />
        <Testimonials />
        <FarmWebPageOverview />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
