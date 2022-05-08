import { useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";

import palette from "../styles/palette";

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    let timer = setTimeout(() => {
      router.push("/list");
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <Container>
      <Logo src="/static/image/icon/img-send@2x.png" />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${palette.maincolor};
`;

const Logo = styled.img`
  width: 1.625rem;
  height: 1.125rem;
`;
