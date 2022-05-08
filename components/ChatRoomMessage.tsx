/* 채팅방의 메세지 */
import styled from "styled-components";

import palette from "../styles/palette";

type MessageProps = {
  send?: boolean;
  message: string;
  timeStamp?: string;
};

function ChatRoomMessage({ message, send, timeStamp }: MessageProps) {
  return (
    <Container send={send}>
      <div className="message__bubble">{message}</div>
      <div className="message__time">{timeStamp}</div>
    </Container>
  );
}

export default ChatRoomMessage;

interface IsSender {
  send?: boolean;
}

const Container = styled.div<IsSender>`
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.625rem;
  flex-direction: ${(props) => (props.send ? "row-reverse" : "row")};

  .message__bubble {
    width: fit-content;
    height: fit-content;
    padding: 0.75rem;
    border-radius: 12px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    background-color: ${(props) =>
      props.send ? `${palette.maincolor}` : `${palette.white}`};
    color: ${(props) =>
      props.send ? `${palette.white}` : `${palette.charcoal_grey_two}`};
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: -0.1px;
  }

  .message__time {
    margin: 0 0.25rem;
    opacity: 0.4;
    font-size: 0.75rem;
    font-weight: 500;
    color: ${palette.charcoal_grey_two};
  }
`;
