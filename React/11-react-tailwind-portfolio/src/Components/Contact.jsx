import { Github, Globe, Linkedin, Twitter } from "lucide-react";
import Section from "./Section";
import {MessageCircleHeart,GitBranch } from "lucide-react"
import SocialMedia from "./SocialMedia";

const Contact = () => {
  const socialLinks = [{ icon: <Linkedin />, title: "Linkedin", url: "https://in.linkedin.com/" }, { icon: <Github />, title: "Github", url: "https://github.com/saurabhsinghss" }, { icon: <Twitter />, title: "Twitter", url: "https://x.com/" }];
  
  return (
  <div className="pb-6">
    <Section icon={<Globe />} sectionTitle="Contact & Social Media">
        <p className="text-gray-700 text-sm mb-4"> Email:johndoe@gmail.com <br />Phone:(123)456-7890 </p>

        {socialLinks.map(social => <SocialMedia icon={social.icon} title={social.title} url={social.url} key={social.title}/>)}
 
    </Section>
  </div>
  );
};

export default Contact;
