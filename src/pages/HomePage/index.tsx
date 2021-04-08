import React from "react";
import { Navigation } from "../../components";
import { HeaderSection, StudioSection } from "../../components/sections";
import { Container } from "./styles";

export const HomePage = () => {
  return (
    <Container>
      <HeaderSection />
      <Navigation />
      <StudioSection />
    </Container>
  );
};
