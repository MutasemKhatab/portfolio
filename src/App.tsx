import About from "./components/About.tsx";
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
    </div>
  );
}
