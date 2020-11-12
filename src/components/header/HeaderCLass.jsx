import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import Container from "../../layout/Container";
import Item from "../../layout/Item";
import Button from "../button/ButtonClass";

const StyledH1 = styled.h1`
  font-family: "Homemade Apple", sans-serif;
  font-size: 3.6rem;
  text-transform: lowercase;
  align-items: "flex-start";
`;

class Header extends React.Component {
  render() {
    const { showAddTogle, showAdd, clearTodos, align } = this.props;
    return (
      <section className="container-header">
        <Container alignItem="flex-start">
          <Item>
            <Button
              text={showAdd ? "Finish" : "Add"}
              color="black"
              align="left"
              onClick={showAddTogle}
            />
          </Item>
          <Item textAlign="left">
            <StyledH1> Todo List </StyledH1>
          </Item>
          <Item>
            <Button
              text="Clear"
              color="red"
              align="left"
              onClick={clearTodos}
            />
          </Item>
        </Container>
      </section>
    );
  }

  static propTypes = {
    showAddTogle: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
    clearTodos: PropTypes.func.isRequired,
    align: PropTypes.string.isRequired
  };
}

export default Header;
