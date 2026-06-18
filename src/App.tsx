import { About } from "./components/About"
import { BlurBackground } from "./components/BlurBackground"
import { Contacts } from "./components/Contacts"
import { Experience } from "./components/Experience"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Projects } from "./components/Projects"
import { TechStacks } from "./components/TechStack"


export const App = () => {
  return (
    <div>
      <BlurBackground />
      <Navbar />
      <main className="antialiased max-w-7xl mx-auto relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Experience />
        <TechStacks />
        <Contacts />
      </main>
    </div>
  )
}
