import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Achievements from './pages/Achievements';
import Certificates from './pages/Certificates';
import Footer from './components/Footer';
import './App.css'
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <section id='home'>
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="achievements">
        <Achievements />
      </section>
      <section id='certificates'>
        <Certificates />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <Footer />
      <BackToTop />
    </div>
  )
}
  

export default App
