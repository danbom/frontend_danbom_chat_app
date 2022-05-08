import styled from "styled-components";

type IconProps = {
  width: string;
  height: string;
  src: string;
};

const Icon = styled.div<IconProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

export default Icon;
