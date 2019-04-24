import React from "react";
import PropTypes from "prop-types";

function Label({ htmlFor, label, required }) {
  return (
    <label style={{ display: "block" }} htmlFor={htmlFor}>
      {label} {required && <span style={{ color: "red" }}> *</span>}
    </label>
  );
}

Label.propTypes = {
  // HTML ID for associated input
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // Display an asterisk after label if true
  required: PropTypes.bool
};

export default Label;
