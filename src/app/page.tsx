import { Header } from '@/components/Header'

import { Hero } from '@/components/Hero'
import { Stats } from '@/components/Stats'
import { CallToAction } from '@/components/CallToAction'
import { Map } from '@/components/Map'
import { Testimonials } from '@/components/Testimonials'
import { FarmWebPageOverview } from '@/components/FarmWebPageOverview'
import { Faqs } from '@/components/Faqs'

import { Footer } from '@/components/Footer'

const Home = () => {
  return (
    <>
      <Header/>

      <main>
        <Hero/>
        <Stats/>
        <CallToAction />
        <Map/>
        <Testimonials />
        <FarmWebPageOverview />
        <Faqs />
      </main>

      <Footer />
    </>
  );
}

export default Home;
