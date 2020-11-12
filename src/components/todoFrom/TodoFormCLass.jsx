import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import Container from "../../layout/Container";
import Item from "../../layout/Item";
import Button from "../button/Button";

const StyledInput = styled.input`
  padding: 0 64px;
  background: unset;
  border: unset;
  outline: unset;
  border-bottom: 1px solid var(--main-red-color);
  font-family: "Homemade Apple", sans-serif;
  text-decoration: lowercase;
  font-size: 16px;
  width: 100%;
`;

class TodoForm extends React.Component {
  // membuat state
  state = {
    inputUser: ""
  };

  handleFormSubmit = (event) => {
    const { inputUser } = this.state;
    const { addTodo } = this.props;

    event.preventDefault();

    if (!inputUser) {
      return alert("Todo Tidak Boleh Kosong!!!!!");
    }

    if (inputUser.length > 40) {
      alert("Input Terlalu Panjang!!!!");
      this.setState({
        inputUser: ""
      });
      return;
    }

    // fungsi untuk add data ke database
    addTodo(inputUser);

    // membuat setinputUser
    this.setState({
      inputUser: ""
    });
  };

  handleOnChange = (e) => {
    this.setState({
      inputUser: e.target.value
    });
  };

  render() {
    const { showAdd } = this.props;
    if (showAdd) {
      return (
        <section className="todoform-component">
          <form onSubmit={this.handleFormSubmit}>
            <Container alignItem="center">
              <Item widht="100%" padding="0 0 0 16px">
                <StyledInput
                  type="text"
                  value={this.state.inputUser}
                  onChange={this.handleOnChange}
                ></StyledInput>
              </Item>
              <Item>
                <Button text="Add" />
              </Item>
            </Container>
          </form>
        </section>
      );
    } else {
      return null;
    }
  }

  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired
  };
}

export default TodoForm;
