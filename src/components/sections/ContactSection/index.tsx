import { FC } from "react";
import { Text } from "../../index";

import { StudioItem } from "./StudioItem";
import cave from "../../../assets/images/cave.jpg";

import { Container, Studio } from "./styles";

export const ContactSection: FC = () => {
  return (
    <Container>
      <img src={cave} alt={cave} width="100%" />
      {/* <Studio>
        <Text variant="h1" align="center" mb={20}>
          {studioData.title}
        </Text>
        <div className="line" />
        <Text variant="body1" align="center" className="description">
          {studioData.description}
        </Text>
        <div className="line" />
        <Text variant="h2" align="center" mt={80} mb={80}>
          {studioData.subtitle}
        </Text>
      </Studio>
      {studioData.studioItems.map((item) => {
        return <StudioItem item={item} />;
      })} */}
    </Container>
  );
};
