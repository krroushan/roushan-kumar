import BackgroundEffect from "../components/BackgroundEffect";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import FeaturedProject from "../components/FeaturedProject";
import Skills from "../components/Skills";
import Stats from "../components/Stats";
import Blog from "../components/Blog";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import SpotifyWidget from "../components/SpotifyWidget";
import EasterEgg from "../components/EasterEgg";

export default function Home() {
  return (
    <main className="bg-dark-blue text-white">
      <BackgroundEffect />
      <Navbar />
      <Hero />
      <About />
      <FeaturedProject />
      <Projects />
      <Skills />
      <Stats />
      <Blog />
      <Testimonials />
      <Contact />
      <SpotifyWidget />
      <EasterEgg />
    </main>
  );
}
