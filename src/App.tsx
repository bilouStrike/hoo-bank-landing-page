import Billing from "./components/billing";
import Business from "./components/businnes";
import CardDeal from "./components/cartDeal";
import Clients from "./components/clients";
import CTA from "./components/cta/CTA";
import Footer from "./components/footer";
import Hero from "./components/hero";
import NavBar from "./components/navbar";
import State from "./components/state";
import Testimonials from "./components/testimonials";
import styles from "./style";

function App() {

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
        <Hero />
        <State />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
    </div>
  )
}

export default App
