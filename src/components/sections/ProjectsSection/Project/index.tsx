import React, { FC, useState } from "react";
import Lottie from "react-lottie";
import { Waypoint } from "react-waypoint";
import { Text } from "../../../index";
import DesktopDraw from "../../../../assets/lottie/desktopDraw.json";
import chess from "../../../../assets/images/chess.jpg";
import { useMediaQuery } from "@react-hook/media-query";

import { StudioItemContainer, MobileStudioItemContainer } from "./styles";

interface IStudioItem {
  title: string;
  description: string;
  image: {};
}

export const Project: FC<{ item: IStudioItem; index: number }> = ({
  item: { title, description, image },
  index,
}) => {
  const [hasEntered, setHasEntered] = useState(false);
  const matches = useMediaQuery("only screen and (max-width: 680px)");

  if (matches) {
    return (
      <Waypoint bottomOffset={200} onEnter={() => setHasEntered(true)}>
        <MobileStudioItemContainer>
          <div className="content">
            <Text
              variant="h3"
              align={matches ? "center" : "left"}
              mb={20}
              className="title"
            >
              {title}
            </Text>
            <Text
              variant="body1"
              align={matches ? "center" : "left"}
              lineHeight={true}
              className="description"
            >
              {description}
            </Text>
            <div className="btn">
              <Text variant="body1">View Project</Text>
            </div>
          </div>
          <div className="image">
            {hasEntered && <img src={chess} alt={chess} className="example" />}
            {hasEntered && (
              <Lottie
                height={222}
                width={320}
                options={{
                  autoplay: false,
                  loop: false,
                  animationData: DesktopDraw,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              />
            )}
          </div>
        </MobileStudioItemContainer>
      </Waypoint>
    );
  }

  return (
    <Waypoint bottomOffset={200} onEnter={() => setHasEntered(true)}>
      <StudioItemContainer>
        <div className="content">
          <Text variant="h3" mb={20} className="title">
            {title}
          </Text>
          <Text variant="body1" lineHeight={true} className="description">
            {description}
          </Text>
          <div className="btn">
            <Text variant="body1">View Project</Text>
          </div>
        </div>
        <div className="image">
          {hasEntered && <img src={chess} alt={chess} className="example" />}
          {hasEntered && (
            <Lottie
              // height={222}
              // width={320}
              height={300}
              width={430}
              options={{
                autoplay: false,
                loop: false,
                animationData: DesktopDraw,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
            />
          )}
        </div>
      </StudioItemContainer>
    </Waypoint>
  );
};
