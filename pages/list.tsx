/*
채팅목록 : 각 채팅목록에는 최근 전송한 메세지, 읽지 않은 메세지 갯수, 마지막 메시지 전송 시간을 표시해 주세요.
*/
import type { NextPage } from "next";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import chatData from "../data/chatData.json";
import chatListTimeStamp from "../function/setChatListTimeStamp";

import Header from "../components/common/Header";
import Icon from "../components/common/Icon";
import openErrorModal from "../components/common/ErrorModal";
import ChatListItem from "../components/ChatListItem";

import palette from "../styles/palette";

// import axios from "axios";

const List: NextPage = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Container>
        <ListHeader>
          <motion.div
            className="motion"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            <div onClick={openErrorModal}>
              <Icon
                width="1.5rem"
                height="1.5rem"
                src="/static/image/icon/menu_rectangle@2x.png"
              />
            </div>
          </motion.div>
          <motion.div
            className="motion"
            initial={{ translateX: -100 }}
            animate={{
              translateX: 0,
            }}
            exit={{ translateX: -100 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            <Title>채팅</Title>
          </motion.div>
          <motion.div
            className="motion"
            initial={{ translateX: -100 }}
            animate={{
              translateX: 0,
            }}
            exit={{ translateX: -100 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            <div onClick={openErrorModal}>
              <Icon
                width="1.5rem"
                height="1.5rem"
                src="/static/image/icon/user_rectangle@2x.png"
              />
            </div>
          </motion.div>
        </ListHeader>
        <motion.div
          initial={{ translateX: -100 }}
          animate={{
            translateX: 0,
          }}
          exit={{ translateX: -100 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          {chatData?.map((chat, index) => (
            <ChatListItem
              key={index}
              id={chat.id}
              username={chat.name}
              /* 최근 전송한 메세지 */
              message={chat.message[chat.message.length - 1].message}
              profile={chat.image}
              /* 마지막 메시지 전송 시간 */
              timestamp={chatListTimeStamp(
                chat.message[chat.message.length - 1].timestamp
              )}
              /* 읽지 않은 메세지 갯수 */
              unread={chat.unread !== 0 ? chat.unread : undefined}
            />
          ))}
        </motion.div>
      </Container>
    </AnimatePresence>
  );
};

export default List;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 4rem;
`;

const ListHeader = styled(Header)`
  justify-content: space-between;
`;

const Title = styled.div`
  height: 1.25rem;
  font-size: 1.063rem;
  font-weight: bold;
  line-height: normal;
  letter-spacing: -0.12px;
  text-align: center;
  color: ${palette.white};
  cursor: default;
`;

/* 가상 메소드 구현 */
// export const getServerSideProps = async () => {
//   try {
//     const res = await axios.get("서버주소");

//     if (res.status === 200) {
//       const chatData = res.data;
//       return { props: { chatData } };
//     }
//     return { props: {} };
//   } catch (error) {
//     console.log(error);
//     return { props: {} };
//   }
// };
