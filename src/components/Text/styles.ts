import styled from "styled-components";

interface ITextStyleProps {
  fontSize: number;
  lineHeight: number;
  color: string;
  fontWeight: number | string;
  marginTop: number;
  marginBottom: number;
  marginLeft: number;
  marginRight: number;
  textAlign: string;
  slab: boolean;
}

export const TextContainer = styled.div<ITextStyleProps>`
  font-size: ${(props: ITextStyleProps) => props.fontSize}px;
  line-height: ${(props: ITextStyleProps) => props.lineHeight}px;
  color: ${(props: ITextStyleProps) => props.color};
  font-weight: ${(props: ITextStyleProps) => props.fontWeight};
  margin-top: ${(props: ITextStyleProps) => props.marginTop}px;
  margin-bottom: ${(props: ITextStyleProps) => props.marginBottom}px;
  margin-left: ${(props: ITextStyleProps) => props.marginLeft}px;
  margin-right: ${(props: ITextStyleProps) => props.marginRight}px;
  text-align: ${(props: ITextStyleProps) => props.textAlign};
  ${(props) => (props.slab ? "" : "font-family: 'Roboto'")}
`;
