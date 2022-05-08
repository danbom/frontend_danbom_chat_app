import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Icon from "./common/Icon";
import Image from "./common/Image";

import palette from "../styles/palette";

type ImageProps = {
  id: number;
  timeStamp: string;
};

function ChatRoomImage({ id, timeStamp }: ImageProps) {
  const [uploaded, setUploaded] = useState<boolean>(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setUploaded(true);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Wrapper>
      <motion.div
        initial={{ opacity: 0, scale: 0, translateY: -1200 }}
        animate={{ opacity: 1, scale: 1, translateY: 0 }}
        transition={{ ease: "easeOut", duration: 0.3 }}
      >
        <div className="upload__bubble">
          <StyledImage src={`/static/image/shot/img-shot-${id}@2x.png`}>
            {!uploaded && (
              <div className="upload__cancel">
                <Icon
                  width="1rem"
                  height="1rem"
                  src="/static/image/icon/img-close@2x.png"
                />
              </div>
            )}
          </StyledImage>
          {!uploaded && (
            <div className="upload__progress">
              <div />
            </div>
          )}
        </div>
      </motion.div>
      <div className="message__time">{timeStamp}</div>
    </Wrapper>
  );
}

export default ChatRoomImage;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.625rem;
  flex-direction: row-reverse;

  .upload__cancel {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    opacity: 0.8;
    border-radius: 26.5px;
    background-color: ${palette.black};
    cursor: pointer;
  }
  .upload__progress {
    width: 12.5rem;
    height: 0.375rem;
    margin-top: 0.375rem;
    border-radius: 3px;
    background-color: #e5e5e7;
    div {
      height: 0.375rem;
      border-radius: 3px;
      background-color: ${palette.maincolor};
      animation-duration: 3s;
      animation-name: extend;
    }
    @keyframes extend {
      from {
        width: 0%;
        opacity: 0;
      }
      to {
        width: 100%;
        opacity: 1;
      }
    }
  }
  .message__time {
    margin: 0 0.25rem;
    opacity: 0.4;
    font-size: 0.75rem;
    font-weight: 500;
  }
`;

const StyledImage = styled(Image)`
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;
