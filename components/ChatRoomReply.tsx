/* 채팅방의 입력 영역 */
import styled from "styled-components";

import Icon from "./common/Icon";
import openErrorModal from "./common/ErrorModal";

import palette from "../styles/palette";

function ChatRoomReply() {
  return (
    <Container>
      <input type="text" placeholder="메시지를 입력하세요.." />
      <button type="button" className="reply__button" onClick={openErrorModal}>
        <Icon
          width="1.625rem"
          height="1.125rem"
          src="/static/image/icon/img-send@2x.png"
        />
      </button>
    </Container>
  );
}

export default ChatRoomReply;

const Container = styled.form`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 3.125rem;
  padding: 0 1rem;
  margin: 1.25rem 0;

  input {
    width: 86%;
    height: 3.125rem;
    padding: 1rem;
    border-radius: 25px;
    border: none;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    background-color: ${palette.white};
    &:focus-visible {
      outline: none;
    }
    &::placeholder {
      opacity: 0.6;
      font-size: 0.875rem;
      font-weight: 500;
      letter-spacing: -0.12px;
      color: ${palette.battleship_grey};
    }
  }

  .reply__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.125rem;
    height: 3.125rem;
    margin-left: 0.75rem;
    border-radius: 25px;
    background-color: ${palette.maincolor};
    border: none;
  }
`;
