import { FC, useState } from "react";
import { Waypoint } from "react-waypoint";

import Lottie from "react-lottie";
import DrawingLottie from "../../../assets/lottie/drawing.json";

import { Container } from "./styles";

export const StudioSection: FC = () => {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <Container>
      <Waypoint
        bottomOffset={200}
        onEnter={() => setHasEntered(true)}
        onLeave={() => setHasEntered(false)}
      >
        {/* <h1 style={{ background: "blue", height: 400 }}>
          {hasEntered ? "HELLO WORLD" : "GOODBYE WORLD"}
        </h1> */}
        {hasEntered && (
          <Lottie
            height={400}
            width={400}
            options={{
              autoplay: true,
              loop: false,
              animationData: DrawingLottie,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
          />
        )}
      </Waypoint>
    </Container>
  );
};
