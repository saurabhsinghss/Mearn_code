import { Award} from "lucide-react";
import Section from "./Section";
import List from "./List";

const Extracurricular = () => {
  const activities = ["Volunteer at local coding bootcamp for underprivileged youth","Organizer of city-wide hackathon event","Member fo the University Chess Club"];
  return (
    <Section icon={<Award />} sectionTitle="Extracuricular Activities">
      <List items={activities} />
    </Section>
  );
};

export default Extracurricular;
