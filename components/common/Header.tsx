import styled from "styled-components";

import palette from "../../styles/palette";

const Header = styled.div`
  z-index: 10;
  position: fixed;
  top: 1.25rem;
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.75rem;
  padding: 0.5rem 0.75rem 0.625rem;
  background-color: ${palette.maincolor};
`;

export default Header;
