import Projects from "./Components/Project/Projects"
import AboutMe from "./Components/AboutMe"
import Header from "./Components/Header"
import Skills from "./Components/Skills"
import Education from "./Components/Educations"
import Hobbies from "./Components/Hobbies"
import Extracurricular from "./Components/Extracurricular"
import Contact from "./Components/Contact"


function App() {


  return (
  
    <div className="bg-slate-100 px-4 py-8">
      <div className="bg-white max-w-4xl mx-auto rounded-xl shadow-lg">
        <Header/>
        <AboutMe />
        <Projects />
        <Skills />
        <Education />
        <Hobbies />
        <Extracurricular />
        <Contact/>
      
      </div>
      
      </div>
    
  )
}

export default App
