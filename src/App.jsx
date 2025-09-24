import About from "./components/About";
import Contact from "./components/Contact";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="font-sans bg-gray-100 text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
     
    </div>
  );
}

export default App;
