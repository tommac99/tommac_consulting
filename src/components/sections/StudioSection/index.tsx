import { FC } from "react";
import { Text } from "../../index";

import drawingDraw from "../../../assets/lottie/drawingDraw.json";
import devicesDraw from "../../../assets/lottie/devicesDraw.json";
import ecomDraw from "../../../assets/lottie/ecomDraw.json";
import appsDraw from "../../../assets/lottie/appsDraw.json";

import { StudioItem } from "./StudioItem";

import { Container, Studio } from "./styles";

const studioData = {
  title: "The Studio",
  description:
    "We are Tommac Consulting, an almost-award-winning studio focused on creating digital experiences. We employ all our knowledge to help our clients build their brands through interactivity.",
  subtitle: "What We Do",
  studioItems: [
    {
      title: "Custom Websites",
      description:
        "Everything we make is unique. Every project is made according to the needs of the customer.",
      image: drawingDraw,
      width: 286,
      height: 200,
    },
    {
      title: "Mobile Designs",
      description:
        "Responsive design aimed for good readability and navigation on tablets and smartphones.",
      image: devicesDraw,
      width: 286,
      height: 200,
    },
    {
      title: "Ecommerce",
      description: "Intuitive and easy to manage online stores.",
      image: ecomDraw,
      width: 286,
      height: 200,
    },
    {
      title: "Apps",
      description: "App development for iOS and Android platforms.",
      image: appsDraw,
      width: 275,
      height: 200,
    },
  ],
};

export const StudioSection: FC = () => {
  return (
    <Container>
      <Studio>
        <Text variant="h1" align="center" mb={20}>
          {studioData.title}
        </Text>
        <div className="line" />
        <Text
          variant="body1"
          align="center"
          lineHeight={true}
          className="description"
          slab={false}
        >
          {studioData.description}
        </Text>
        <div className="line" />
        <Text variant="h2" align="center" mt={80}>
          {studioData.subtitle}
        </Text>
      </Studio>
      {studioData.studioItems.map((item, index) => {
        return <StudioItem item={item} index={index} />;
      })}
    </Container>
  );
};
