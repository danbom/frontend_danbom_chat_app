import styled from "styled-components";

type ImageProps = {
  src: string;
};

const Image = styled.div<ImageProps>`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

export default Image;
