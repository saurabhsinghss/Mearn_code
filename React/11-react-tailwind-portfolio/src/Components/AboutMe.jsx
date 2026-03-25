import Section from "./Section";
import { User } from "lucide-react";
import DownloadResume from "./DownloadResume";
const AboutMe = () => {
  return (
    <div className="mt-8 ">
      
      <Section icon={<User />} sectionTitle="About Me">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque
          illum minima tempora suscipit veritatis eum nobis unde accusantium
          facilis.
        </p>
        
      </Section>
    
      <span className=" ml-4 bg-slate-50 rounded-full p-2 border-r-4 ">  <DownloadResume/></span>
    </div>

  );
};

export default AboutMe;
