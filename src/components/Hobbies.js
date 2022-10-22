import React from "react";
import "./Hobbies.css";

function Hobbies({ image }) {
  return (
    <div className="hobbies">
      <h2>Music</h2>
      <div className="hobby-1">
        <div className="keys">
          <img src={image[0].keys} alt="Keys" />
        </div>
        <div className="guitar">
          <img src={image[0].guitar} alt="Guitar" />
        </div>
        <div className="bass">
          <img src={image[0].bass} alt="Bass" />
        </div>
        <div className="drums">
          <img src={image[0].drums} alt="Drums" />
        </div>
      </div>
      <h2>Coding</h2>
      <div className="hobby-2">
        <div className="javascript">
          <img src={image[0].javascript} alt="JavaScript" />
        </div>
        <div className="html">
          <img src={image[0].html} alt="Html" />
        </div>
        <div className="css">
          <img src={image[0].css} alt="Css" />
        </div>
        <div className="react">
          <img src={image[0].react} alt="React" />
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
