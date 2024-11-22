import Home from "./home/page"
import Projects from "./projects/page"
import About from "./about/page"
import Contact from "./contact/page"

export default function page() {
  return (
    <div>
     <Home />
     <Projects />
     <About />
     <Contact />
    </div>
  )
}

