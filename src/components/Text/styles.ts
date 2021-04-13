import styled from "styled-components";

interface ITextStyleProps {
  fontSize: number;
  lineHeight: number;
  color: string;
  fontWeight: number | string;
  marginTop: number;
  marginBottom: number;
  textAlign: string;
}

export const TextContainer = styled.div<ITextStyleProps>`
  font-size: ${(props: ITextStyleProps) => props.fontSize}px;
  line-height: ${(props: ITextStyleProps) => props.lineHeight}px;
  color: ${(props: ITextStyleProps) => props.color};
  font-weight: ${(props: ITextStyleProps) => props.fontWeight};
  margin-top: ${(props: ITextStyleProps) => props.marginTop}px;
  margin-bottom: ${(props: ITextStyleProps) => props.marginBottom}px;
  text-align: ${(props: ITextStyleProps) => props.textAlign};
`;
