/*채팅 목록의 원소 */
import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";

import Image from "./common/Image";

import palette from "../styles/palette";

type ChatListItem = {
  id: number;
  username: string;
  profile: string;
  message?: string;
  timestamp?: string;
  unread?: number;
};

function ChatListItem({
  id,
  username,
  profile,
  message,
  timestamp,
  unread,
}: ChatListItem) {
  return (
    <Link href="/room/[id]" as={`/room/${id}`}>
      <a>
        <Container>
          <Area>
            <motion.div
              initial={{ translateX: -100 }}
              animate={{
                translateX: 0,
              }}
              exit={{ translateX: -100 }}
              transition={{ ease: "easeOut", duration: 0.55 }}
            >
              <ProfileImage src={profile} />
            </motion.div>
            <div>
              <Name>{username}</Name>
              {/* 최근 전송한 메세지 */}
              <LastMessage>
                {message?.substring(0, 24)}
                {message && message.length > 24 && ".."}
              </LastMessage>
            </div>
          </Area>
          <Area column>
            {/* 마지막 메시지 전송 시간 */}
            <LastTime>{timestamp}</LastTime>
            {/* 읽지 않은 메세지 갯수 */}
            {unread && <Unread>{unread}</Unread>}
          </Area>
        </Container>
      </a>
    </Link>
  );
}

export default ChatListItem;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 4.8rem;
  padding: 0.563rem 1rem;
  background-color: ${palette.white};
`;

interface AreaProps {
  column?: boolean;
}

const Area = styled.div<AreaProps>`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  align-items: center;
`;

const ProfileImage = styled(Image)`
  width: 3.5rem;
  height: 3.5rem;
  margin-right: 0.938rem;
  border-radius: 28px;
`;

const Name = styled.p`
  height: 1.188rem;
  margin-bottom: 0.188rem;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: -0.2px;
  color: ${palette.charcoal_grey};
`;

const LastMessage = styled.p`
  height: 1rem;
  font-size: 0.813rem;
  font-weight: 500;
  letter-spacing: -0.1px;
  color: ${palette.cool_grey};
`;

const LastTime = styled.p`
  width: 1.813rem;
  height: 0.813rem;
  margin: 0.75rem 0 0.375rem 0.813rem;
  opacity: 0.4;
  font-size: 0.688rem;
  font-weight: 500;
  text-align: right;
  color: ${palette.charcoal_grey_two};
`;

const Unread = styled.div`
  width: 1.125rem;
  height: 1.125rem;
  margin: 0 0.063rem 0.438rem 1.438rem;
  padding-top: 0.2rem; // TODO : 모바일로 볼 때 / PC로 볼 때 다르게 보이는 문제
  border-radius: 10.5px;
  font-size: 0.625rem;
  font-weight: bold;
  letter-spacing: -0.08px;
  text-align: center;
  background-color: ${palette.maincolor};
  color: ${palette.white};
`;
