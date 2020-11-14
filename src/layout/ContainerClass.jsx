import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const StyledContainer = styled.div`
  display: ${(props) => props.flex};
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItem};
  align-content: ${(props) => props.alignContent};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
`;

class Container extends React.Component {
  render() {
    const {
      children,
      flexDirection,
      flexWrap,
      justifyContent,
      alignItem,
      alignContent,
      height,
      minHeight
    } = this.props;
    return (
      <StyledContainer
        flexDirection={flexDirection}
        flexWrap={flexWrap}
        justifyContent={justifyContent}
        alignItem={alignItem}
        alignContent={alignContent}
        height={height}
        minHeight={minHeight}
      >
        {children}
      </StyledContainer>
    );
  }

  static defaultProps = {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItem: "stretch",
    alignContent: "flex-start",
    height: "auto"
  };

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    flexDirection: PropTypes.oneOf([
      "row",
      "row-reverse",
      "column",
      "column-reverse"
    ]),
    flexWrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
    justifyContent: PropTypes.oneOf([
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
      "start",
      "end",
      "left",
      "right"
    ]),
    alignItem: PropTypes.oneOf([
      "stretch",
      "flex-start",
      "flex-end",
      "center",
      "baseline",
      "first baseline",
      "last baseline",
      "start",
      "end",
      "self-start",
      "self-end"
    ]),
    alignContent: PropTypes.oneOf([
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
      "stretch",
      "start",
      "end",
      "baseline",
      "first baseline",
      "last baseline"
    ]),
    height: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    minHeight: PropTypes.string
  };
}
export default Container;
