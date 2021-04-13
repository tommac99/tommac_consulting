import React, { FC, ReactChild } from "react";
import { ThemeColor } from "../../constants";
import { TextContainer } from "./styles";

interface ITextProps {
  children: string | ReactChild;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "body1" | "body2";
  color?: "primary" | "secondary";
  weight?: "light" | "normal" | "bold";
  align?: "left" | "center" | "right";
  mt?: number;
  mb?: number;
  className?: string;
  lineHeight?: boolean;
}

const variants = {
  h1: 64,
  h2: 40,
  h3: 32,
  h4: 24,
  h5: 20,
  body1: 16,
  body2: 12,
};

const fontWeights = {
  light: "400",
  normal: "normal",
  bold: "bold",
};

export const Text: FC<ITextProps> = ({
  children,
  variant = "body1",
  color = "primary",
  weight = "bold",
  align = "left",
  mt = 0,
  mb = 0,
  className,
  lineHeight,
}) => {
  return (
    <TextContainer
      className={className}
      fontSize={variants[variant]}
      lineHeight={lineHeight ? variants[variant] * 1.2 : variants[variant]}
      color={ThemeColor.text[color]}
      fontWeight={fontWeights[weight]}
      marginTop={mt}
      marginBottom={mb}
      textAlign={align}
    >
      {children}
    </TextContainer>
  );
};
