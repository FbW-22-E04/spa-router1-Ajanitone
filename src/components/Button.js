import React from "react";
// import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
  return (
    <button
      className="btn"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

// Button.defaultprops = {
//   color: "steelblue",
//   text: "Add",
// };

//Button.PropTypes = {
// text: PropTypes.string,
//  color: PropTypes.string,
//};
export default Button;
