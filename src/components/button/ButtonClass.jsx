import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  width: 24%;
  background: unset;
  border: unset;
  outline: unset;
  font-size: 1.8rem;
  font-family: "Bungee", sans-serif;
  padding: 24px;
  cursor: pointer;
  color: ${(props) => props.textColor};
  text-align: ${(props) => props.align};
  &:active {
    text-shadow: 1px 1px 2px ${(props) => props.textColor};
  }
`;

class Button extends React.Component {
  render() {
    // tempat menyimpan props
    const { text, onClick, color, align } = this.props;

    let textColor;

    switch (color) {
      case "black":
        textColor = "#2d2d2d";
        break;
      case "red":
        textColor = "#e06262";
        break;
      default:
        textColor = "#2d2d2d";
    }

    return (
      <StyledButton onClick={onClick} textColor={textColor} align={align}>
        {text}
      </StyledButton>
    );
  }

  static defaultProps = {
    text: "Button",
    color: "black",
    align: "left"
  };

  static proptypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(["black", "red"]),
    align: PropTypes.oneOf(["left", "right"])
  };
}

export default Button;
