import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";
import Education from "./components/Education.tsx";
import Footer from "./components/Footer.tsx";
import Intro from "./components/Intro.tsx";
import Nav from "./components/Nav.tsx";
import ParticleBackground from "./components/ParticleBackground.tsx";
import Skills from "./components/Skills.tsx";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 relative">
      <ParticleBackground />
      <Nav />
      <main className="relative z-10">
        <Intro />
        <About />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
