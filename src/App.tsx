import styles from './style'
// import {Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer} from './components'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stast from './components/Stast'
import Business from './components/Business'
import Height from './components/Height'
import Billing from './components/Billing'
import CardDeal from './components/CardDeal'
import Testimonials from './components/Testimonials'
import Clients from './components/Clients'
import CTA from './components/CTA'
import Footer from './components/Footer'

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}` }>
        <Navbar /> 
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stast />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
        <Height />
      </div>
    </div>
    

  </div>
  )

export default App