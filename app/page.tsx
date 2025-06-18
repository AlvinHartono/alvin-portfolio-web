import { About } from './components/About';
import { Hero } from './components/Hero';
// import { LogoAnimation } from './components/LogoAnimation';
import { Portfolio } from './components/Portfolio';
import { Stack } from './components/Stack';
import { Education } from './components/Education';
// import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

export default function Home() {
  return (
    <div>
      <>
        <Navbar />
        <Hero />
        {/* <LogoAnimation /> */}
        <About />
        <Portfolio />
        <Stack />
        <Education />
        {/* <Services /> */}
        <Contact />
        <Footer />
      </>
    </div>
  );
}
