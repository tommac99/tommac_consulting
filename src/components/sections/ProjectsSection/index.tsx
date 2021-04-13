import { FC } from "react";
import { Text } from "../../index";

import { Project } from "./Project";
import roots from "../../../assets/images/roots.jpg";

import { Container, Projects } from "./styles";

const projectsData = {
  title: "Projects",
  projects: [
    {
      title: "XO Game",
      description:
        "Everything we make is unique. Every project is made according to the needs of the customer.",
      image: "chess",
      link: "https://x-vs-o.netlify.app/",
    },
    {
      title: "XO Game",
      description:
        "Everything we make is unique. Every project is made according to the needs of the customer.",
      image: "chess",
      link: "https://x-vs-o.netlify.app/",
    },
  ],
};

export const ProjectsSection: FC = () => {
  return (
    <Container>
      <img src={roots} alt={roots} width="100%" />
      <Projects>
        <Text variant="h1" align="center" mb={20}>
          {projectsData.title}
        </Text>
        <div className="line" />
      </Projects>
      {projectsData.projects.map((item, index) => {
        return <Project item={item} index={index} />;
      })}
    </Container>
  );
};
