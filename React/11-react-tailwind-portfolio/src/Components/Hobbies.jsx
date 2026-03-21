import { Heart } from "lucide-react";
import Section from "./Section";
import List from "./List";

const Hobbies = () => {
  const hobbies = ["Photography","Playing guitar","Reading","novels"];
  return (
    <Section icon={<Heart />} sectionTitle="Hobbies & Interest">
     <List items={hobbies}/>
    </Section>
  );
};

export default Hobbies;
