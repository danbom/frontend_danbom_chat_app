import { useEffect, useState, useRef } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import chatData from "../../data/chatData.json";
import hhmm from "../../function/setHHMM";
import yyyymmdd from "../../function/setYYYYMMDD";

import Header from "../../components/common/Header";
import Icon from "../../components/common/Icon";
import Image from "../../components/common/Image";
import openErrorModal from "../../components/common/ErrorModal";
import ChatRoomMessage from "../../components/ChatRoomMessage";
import ChatRoomReply from "../../components/ChatRoomReply";
import ChatRoomImage from "../../components/ChatRoomImage";

import palette from "../../styles/palette";

// import axios from "axios";

const Room: NextPage = () => {
  const router = useRouter();
  const endRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const { room_id } = router.query;

  const [roomId, setRoomId] = useState<number>(0);
  const [uploadedImgArr, setUploadedImgArr] = useState<number[]>([]);
  const [imgbarHide, setImgbarHide] = useState<boolean>(true);

  const uploadImage = (index: number) => {
    setUploadedImgArr((uploadedImgArr) => [...uploadedImgArr, index]);
  };

  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  useEffect(() => {
    setRoomId(room_id ? parseInt(room_id?.toString()) : 0);
    scrollToBottom();
    return () => {};
  }, [room_id, uploadedImgArr]);

  return (
    <Wrapper imgbarHide={imgbarHide}>
      <RoomHeader>
        <Link href="/list">
          <a className="area left">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            >
              <Icon
                width="1.5rem"
                height="1.5rem"
                src="/static/image/icon/img-back@2x.png"
              />
            </motion.div>
          </a>
        </Link>
        <motion.div
          initial={{ translateX: 100 }}
          animate={{
            translateX: 0,
          }}
          exit={{ translateX: 100 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <div className="title">{chatData[roomId].name}</div>
        </motion.div>
        <motion.div
          className="area right"
          initial={{ translateX: 100 }}
          animate={{
            translateX: 0,
          }}
          exit={{ translateX: 100 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <div
            className="toggle__imgbar__visibility"
            onClick={() => setImgbarHide(!imgbarHide)}
          >
            <Icon
              width="1.5rem"
              height="1.5rem"
              src="/static/image/icon/img-upload@2x.png"
            />
          </div>
          <div onClick={openErrorModal}>
            <Icon
              width="1.5rem"
              height="1.5rem"
              src="/static/image/icon/img-search@2x.png"
            />
          </div>
        </motion.div>
      </RoomHeader>
      <AnimatePresence exitBeforeEnter>
        {/* 사진 전송 기능 */}
        <ImgBar imgbarHide={imgbarHide}>
          {Array.from(Array(6), (_, i) => String(i + 1))?.map((_, index) => (
            <motion.div
              className="img__item"
              whileTap={{ rotateZ: 10, scale: 1.1 }}
              transition={{ ease: "easeOut", duration: 0.1 }}
              key={index}
            >
              <ImageItem
                onClick={() => uploadImage(index)}
                src={`/static/image/shot/img-shot-${_}@2x.png`}
              />
            </motion.div>
          ))}
        </ImgBar>
      </AnimatePresence>
      <Container imgbarHide={imgbarHide} ref={endRef}>
        <motion.div
          initial={{ translateX: 100 }}
          animate={{
            translateX: 0,
          }}
          exit={{ translateX: 100 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          {chatData[roomId].message?.map((message, index) => (
            <div key={index}>
              <ChatRoomMessage
                message={message.message}
                /*
                메시지 전송 시간은 hh:mm 포맷으로,
                한 사람이 1분 동안 메시지를 연속해서 보낸다면, 마지막 메시지만 전송 시간을 표시
                */
                timeStamp={
                  index < chatData[roomId].message.length - 1 &&
                  message.send === chatData[roomId].message[index + 1].send &&
                  hhmm(message.timestamp) ===
                    hhmm(chatData[roomId].message[index + 1].timestamp)
                    ? ""
                    : hhmm(message.timestamp)
                }
                send={message.send}
              />
              {/* 날짜가 바뀌면 날짜 구분선을 표시 */}
              {index < chatData[roomId].message.length - 1 &&
              yyyymmdd(message.timestamp) !==
                yyyymmdd(chatData[roomId].message[index + 1].timestamp) ? (
                <Contour>
                  <div className="line">
                    <div>
                      <span>
                        {yyyymmdd(
                          chatData[roomId].message[index + 1].timestamp
                        )}
                      </span>
                    </div>
                  </div>
                </Contour>
              ) : null}
            </div>
          ))}
          {uploadedImgArr?.map((_, index) => (
            <ChatRoomImage
              key={index}
              id={_ + 1}
              timeStamp={hhmm(new Date().toString())}
            />
          ))}
        </motion.div>
        <div className="empty__bottom" />
      </Container>
      <ChatRoomReply />
    </Wrapper>
  );
};

export default Room;

const Wrapper = styled.div<ImgbarHideProps>`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  background-color: #f9f9fb;
`;

const RoomHeader = styled(Header)`
  justify-content: center;

  .title {
    position: relative;
    height: 1.25rem;
    font-size: 1.063rem;
    font-weight: bold;
    line-height: normal;
    letter-spacing: -0.12px;
    text-align: center;
    color: ${palette.white};
    cursor: default;
  }

  .area {
    display: flex;
    position: absolute;
  }

  .left {
    left: 0.75rem;
  }

  .right {
    right: 0.75rem;

    .toggle__imgbar__visibility {
      margin-right: 0.625rem;
    }
  }
`;

interface ImgbarHideProps {
  imgbarHide?: boolean;
}

const ImgBar = styled.div<ImgbarHideProps>`
  z-index: 5;
  position: fixed;
  margin-top: ${(props) => (props.imgbarHide ? "-5rem" : "0")};
  top: 4rem;
  transition: all 0.5s ease-in-out;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 4.25rem;
  padding: 0.688rem 1rem;
  background-color: ${palette.maincolor};
  white-space: nowrap;
  overflow: auto;

  .img__item {
    margin-right: 0.625rem;
  }
`;

const ImageItem = styled(Image)`
  width: 2.875rem;
  height: 2.85rem;
  transition: all 0.2s ease-in-out;
  transition-delay: 0.2s;
  border-radius: 5px;
`;

const Container = styled.div<ImgbarHideProps>`
  margin-top: ${(props) => (props.imgbarHide ? "4rem" : "8.25rem")};
  padding: 1rem;
  transition: all 0.5s ease-in-out;

  .empty__bottom {
    height: 4.375rem;
  }
`;

const Contour = styled.div`
  width: 100%;
  height: 0.938rem;
  margin: 0.625rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .line {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 0.063rem;
    background-color: ${palette.pale_lilac};

    div {
      margin: 0.625rem 0;
      font-size: 0.75rem;
      font-weight: 500;
      color: ${palette.charcoal_grey_two};
      padding: 0 0.625rem;
      background-color: #f9f9fb;

      span {
        opacity: 0.4;
      }
    }
  }
`;

/* 가상 메소드 구현 */
// export const getServerSideProps = async ({ query }: { query: any }) => {
//   const { room_id } = query;
//   try {
//     const res = await axios.get(`서버주소/${room_id}`);
//     if (res.status === 200) {
//       const room_id = res.data;
//       return {
//         props: { room_id },
//       };
//     }
//   } catch (err) {
//     console.log(err);
//     return {
//       props: {},
//     };
//   }
// };
