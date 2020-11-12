import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledPaper = styled.div`
  width: 600px;
  height: 800px;
  background-color: #f2eecb;

  border-radius: 5px;
  padding: 16px;
`;

const StyledFrame = styled.div`
  border: 1px solid #2d2d2d;
  height: 100%;
`;

class Paper extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <StyledPaper>
        <StyledFrame> {children}</StyledFrame>
      </StyledPaper>
    );
  }

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };
}

export default Paper;
