import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components';


const App = () => {
  return (
    <BrowserRouter>
      <section className="relative z-0 bg-primary">
      <section className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </section>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <section className="relative z-0">
        <Contact />
        <StarsCanvas />
      </section>
      </section>
      </BrowserRouter>
  )
}

export default App
