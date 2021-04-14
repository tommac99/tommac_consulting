/* eslint-disable react-hooks/rules-of-hooks */
import { ScrollContext } from "../context/index";
import React, { useContext } from "react";

const useContextFactory = <T extends unknown>(
  name: string,
  context: React.Context<T>
) => {
  return () => {
    const ctx = useContext(context);

    if (ctx === undefined)
      throw new Error(
        `use${name}Context must be used withing a ${name}ContextProvider.`
      );

    return ctx;
  };
};
export const useScrollContext = useContextFactory(
  "ScrollContext",
  ScrollContext
);
