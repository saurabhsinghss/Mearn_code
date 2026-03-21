import { BookOpenText } from "lucide-react";
import Section from "./Section";
import Graduation from "./Graduation";

const Education = () => {
  return (
    <Section icon={<BookOpenText />} sectionTitle="Education">
      <Graduation title="Bachelor of Computer Science and Engineering" school="IIIT Kalyani" year="2023-2027" />
      
      <Graduation title="Full Stack Web Development Bootcamp" school="IIIT Kalyani" year="2023-2027"/>
    </Section>
  );
};

export default Education;
