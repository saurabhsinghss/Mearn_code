import { Briefcase } from "lucide-react";
import Section from "../Section";
import Project from "./Project";

const Projects = () => {
  const projectList = [
    {
      title: "E-Commerce Platform",
      desc: "Developed a fully-functional e-commerce platform with user authentication,product mangement and payment intergratiion.",
      techUsed: ["React", "Nodejs", "MongoDB", "Spring"],
    },
    {
      title: "Social Media Dashboard",
      desc: "Created a responsive dashboard for social media analytics, featuring real time data visualization and responding.",
      techUsed: ["Vuejs", "Expressjs", "PostgreSQL", "OJjs"],
    },
  ];

  return <Section icon={<Briefcase />} sectionTitle="Projects">
    {projectList.map(project => <Project title={project.title} desc={project.desc} techUsed={project.techUsed}/>)}
  </Section>;
};

export default Projects;
