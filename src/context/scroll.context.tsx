import { createContext } from "react";
import { ScrollContextProps } from "../interfaces";

export const ScrollContext = createContext<ScrollContextProps>({
  scrollYPosition: 0,
  onSetScrollYPosition: () => {},
});
