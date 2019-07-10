import React from "react";
import "./wrapper.css";
import PropTypes from "prop-types";

const ContentWrapper = ({ children }) => (
  <div className="container">{children}</div>
);

export default ContentWrapper;

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired
};
