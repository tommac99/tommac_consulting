import React, { FC, useState } from "react";
import Lottie from "react-lottie";
import { Waypoint } from "react-waypoint";
import { Text } from "../../../index";

import { StudioItemContainer } from "./styles";

interface IStudioItem {
  title: string;
  description: string;
  image: {};
  width: number;
}

export const StudioItem: FC<{ item: IStudioItem; index: number }> = ({
  item: { title, description, image, width },
  index,
}) => {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <Waypoint bottomOffset={200} onEnter={() => setHasEntered(true)}>
      <StudioItemContainer index={index}>
        <div className="content">
          <Text variant="h3" color="secondary" mb={20} className="title">
            {title}
          </Text>
          <Text variant="body1" lineHeight={true} className="description">
            {description}
          </Text>
        </div>
        <div className="image" style={{ width: width }}>
          {hasEntered && (
            <Lottie
              height={200}
              width={width}
              options={{
                autoplay: false,
                loop: false,
                animationData: image,
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
