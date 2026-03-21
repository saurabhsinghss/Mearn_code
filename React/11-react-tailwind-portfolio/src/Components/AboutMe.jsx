import Section from "./Section";
import { User } from "lucide-react";
const AboutMe = () => {
  return (
    <div className="mt-8">
      <Section icon={<User />} sectionTitle="About Me">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque
          illum minima tempora suscipit veritatis eum nobis unde accusantium
          facilis.
        </p>
      </Section>
    </div>
  );
};

export default AboutMe;
