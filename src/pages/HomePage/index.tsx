import React from "react";
import { Navigation } from "../../components";
import { HeaderSection, StudioSection } from "../../components/sections";
import { Element } from "react-scroll";
import { Container } from "./styles";
import { ProjectsSection } from "../../components/sections/ProjectsSection";
import { ContactSection } from "../../components/sections/ContactSection";

export const HomePage = () => {
  return (
    <Container>
      <Navigation />
      <HeaderSection />
      <Element name="studio" className="element">
        <StudioSection />
      </Element>
      <Element name="projects" className="element">
        <ProjectsSection />
      </Element>
      <Element name="contact" className="element">
        <ContactSection />
      </Element>
    </Container>
  );
};
