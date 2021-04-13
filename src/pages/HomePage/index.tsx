import React from "react";
import { Navigation } from "../../components";
import { HeaderSection, StudioSection } from "../../components/sections";
import { Element, Link } from "react-scroll";
import { Container } from "./styles";
import { ProjectsSection } from "../../components/sections/ProjectsSection";
import { ContactSection } from "../../components/sections/ContactSection";

import scrollDown from "../../assets/lottie/scrollDown.json";
import Lottie from "react-lottie";

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
      <Link
        className="scrollDown"
        to="studio"
        spy={true}
        smooth={true}
        offset={-40}
        duration={1500}
        // onSetActive={handleSetActive}
      >
        <Lottie
          height={120}
          width={50}
          options={{
            autoplay: true,
            loop: true,
            animationData: scrollDown,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
        />
      </Link>
    </Container>
  );
};
