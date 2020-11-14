/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import Container from "../layout/Container";
import Item from "../layout/Item";
import { Link } from "react-router-dom";
import * as styles from "./aboutComponent.styles";

const AboutContent = function () {
  return (
    <Container flexDirection="column" alignItem="center">
      <Item>
        <h1 css={styles.header}>My Biodata</h1>
      </Item>
      <Item>
        <p css={styles.deskripsi}>
          Hello my name is Wiby Fabian Rianto, Im from Indonesia and here is my
          firt React project, i started learn React mounth a ago, and i hope i
          can be a master of React and make some Big project in the future.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolore
          laborum aspernatur delectus blanditiis. Quisquam fugiat deserunt,
          praesentium ipsa perspiciatis atque quis rem maxime accusantium.
          Eligendi ut omnis accusantium vel?Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Exercitationem quo, rerum aliquid
          cumque modi omnis aperiam cum in adipisci accusamus doloribus illo
          similique officia numquam aliquam deleniti. Animi, quam quae!
        </p>
      </Item>
      <Item>
        <Link css={styles.link} to="/">
          Kembali Ke Home
        </Link>
      </Item>
    </Container>
  );
};

export default AboutContent;
