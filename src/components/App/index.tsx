import { FC } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { HomePage } from "../../pages";

import { ScrollContext } from "../../context";
import { useScrollState } from "./hooks";

const App: FC = () => {
  const { ...scrollContextProps } = useScrollState();

  return (
    <ScrollContext.Provider value={scrollContextProps}>
      <ParallaxProvider>
        <HomePage />
      </ParallaxProvider>
    </ScrollContext.Provider>
  );
};

export default App;
