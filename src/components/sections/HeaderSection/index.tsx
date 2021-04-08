import React from "react";
import { Parallax } from "react-scroll-parallax";
import {
  TentSVG,
  ForegroundSVG,
  MoonSVG,
  MountainsSVG,
  StarsSVG,
} from "../../../assets/svg";
import { Container } from "./styles";

export const HeaderSection = () => {
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
      <Parallax y={[-30, 30]} className="moon">
        <MoonSVG width="100vw" />
      </Parallax>
      <Parallax y={[-40, 40]} className="stars">
        <StarsSVG width="100vw" />
      </Parallax>
    </Container>
  );
};
