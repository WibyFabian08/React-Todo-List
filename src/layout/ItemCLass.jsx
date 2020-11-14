import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const StyledItem = styled.div`
  flex: ${(props) => props.flex};
  width: ${(props) => props.widht};
  padding: ${(props) => props.padding};
`;

class Item extends React.Component {
  render() {
    const { children, flex, widht, padding } = this.props;
    return (
      <StyledItem flex={flex} widht={widht} padding={padding}>
        {children}
      </StyledItem>
    );
  }

  static propsTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    flex: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
    padding: PropTypes.oneOf([PropTypes.number, PropTypes.string])
  };
}

export default Item;
