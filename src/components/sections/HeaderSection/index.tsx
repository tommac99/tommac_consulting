import React from "react";
import { Parallax } from "react-scroll-parallax";
import {
  TentSVG,
  ForegroundSVG,
  MoonSVG,
  MountainsSVG,
  StarsSVG,
  MobileCampingSVG,
} from "../../../assets/svg";
import { Text } from "../../index";
import { useMediaQuery } from "@react-hook/media-query";

import { Container, MobileContainer } from "./styles";

export const HeaderSection = () => {
  const matches = useMediaQuery("only screen and (max-width: 680px)");

  if (matches) {
    return (
      <MobileContainer>
        <div className="title">
          <Text variant="h3" color="secondary">
            Tommac
          </Text>
          <Text variant="h3" color="secondary" ml={10}>
            Consulting
          </Text>
        </div>
        <Text className="subtitle" variant="h1">
          We create cool stuff.
        </Text>
        <MobileCampingSVG width="100vw" className="svg" />
      </MobileContainer>
    );
  }

  return (
    <Container>
      <Parallax y={[-10, 10]} className="foreground">
        <ForegroundSVG width="100vw" />
      </Parallax>
      <Parallax y={[-8, 8]} className="foreground">
        <TentSVG width="100vw" />
      </Parallax>
      <Parallax y={[-20, 20]} className="mountains">
        <MountainsSVG width="100vw" />
      </Parallax>
      <Parallax y={[-100, 100]} className="title">
        <div>
          <Text variant="h3" color="secondary">
            Tommac
          </Text>
          <Text variant="h3" color="secondary" ml={10}>
            Consulting
          </Text>
        </div>
      </Parallax>
      <Parallax y={[-200, 200]} className="subtitle">
        <div>
          <Text variant="h2">We create cool stuff.</Text>
        </div>
      </Parallax>
      <Parallax y={[-30, 30]} className="moon">
        <MoonSVG width="100vw" />
      </Parallax>
      <Parallax y={[-40, 40]} className="stars">
        <StarsSVG width="100vw" />
      </Parallax>
    </Container>
  );
};
