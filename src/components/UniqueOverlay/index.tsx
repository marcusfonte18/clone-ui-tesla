/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTransform } from "framer-motion";
import React from "react";
import useWrapperScroll from "../../Model/useWrapperScroll";

import { Container, Header, Logo, Burger, Footer } from "./styles";

const UniqueOverlay3: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">made with 3</a>
          </li>
          <li>
            <a href="#">by Marcus Vinicius</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay3;
