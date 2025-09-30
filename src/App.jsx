import { useRef } from "react"
import About from "./components/About"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Intro from "./components/Intro"
import Nav from "./components/Nav"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import { myData } from "./data"


function App() {
  const introRef = useRef(null)
  const aboutRef = useRef(null)
  const eduRef = useRef(null)
  const skillRef = useRef(null)
  const projectRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (componentRef) => {
    if (componentRef && componentRef.current) {
      componentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  }

  return (
    <>
      <Nav
        introRef={introRef}
        aboutRef={aboutRef}
        eduRef={eduRef}
        skillRef={skillRef}
        projectRef={projectRef}
        contactRef={contactRef}
        scrollToSection={scrollToSection}
      />
      <div className="container">
        <Intro 
          introRef={introRef}
          className="scroll-target-intro"
          projectRef={projectRef}
          scrollToSection={scrollToSection}
        />
        <About
          aboutRef={aboutRef}
          className="scroll-target"
        />
        <Education
          eduRef={eduRef}
          className="scroll-target-edu"
          education_items={myData.education_items}
        />
        <Skills
          skillRef={skillRef}
          className="scroll-target"
          skills={myData.skills}
        />
        <Projects
          projectRef={projectRef}
          className="scroll-target"
          myProjects= {myData.projects}
        />
        <Contact
          contactRef={contactRef}
          className="scroll-target"
        />
      </div>
      <footer>
        © 2025 May Myat Mon. 
         <span>Made with ⸜(｡˃ ᵕ ˂ )⸝♡ & React.js </span>
      </footer>
    </>
  )
}

export default App
