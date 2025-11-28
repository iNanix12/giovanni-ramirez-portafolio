import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import FeaturedProjects from "./components/FeaturedProjects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />

      <main>
        <Hero />
        <About />
        <WorkExperience />
        <FeaturedProjects />
        <Contact />
      </main>

      <footer className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Giovanni Ramírez. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
