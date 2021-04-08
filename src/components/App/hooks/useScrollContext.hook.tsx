import { ScrollContextProps } from "../../../interfaces";
import { useState, useMemo } from "react";

export const useScrollState = (): ScrollContextProps => {
  const [scrollYPosition, setScrollYPosition] = useState(0);

  document.addEventListener("scroll", () => {
    setScrollYPosition(window.scrollY);
  });

  const onSetScrollYPosition = (newScrollYPosition: number) => {
    setScrollYPosition(newScrollYPosition);
  };

  const memoizedValues = useMemo(
    () => ({
      scrollYPosition,
      onSetScrollYPosition,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [scrollYPosition]
  );

  return memoizedValues;
};
