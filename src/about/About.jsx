import React from "react";

import Container from "../layout/Container";
import Paper from "../components/paper/Paper";
import { Link } from "react-router-dom";

const About = function () {
  return (
    <Paper>
      <Container>
        <h1>This is about page</h1>
        <Link to="/">Ke halaman todolist</Link>
      </Container>
    </Paper>
  );
};

export default About;
