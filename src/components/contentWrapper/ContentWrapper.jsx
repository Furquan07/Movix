//import React from "react";
import PropTypes from 'prop-types'
import "./style.scss";

const ContentWrapper = ({ children }) => {
    return <div className="contentWrapper">{children}</div>;
};

ContentWrapper.propTypes = {
    children: PropTypes.any,
  };
  
export default ContentWrapper;