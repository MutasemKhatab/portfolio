import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";
import Education from "./components/Education.tsx";
import Intro from "./components/Intro.tsx";
import Nav from "./components/Nav.tsx";
import Skills from "./components/Skills.tsx";
export default function App() {
  return (
    <div className="p-10">
      <Nav />
      <Intro />
      <About />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}
