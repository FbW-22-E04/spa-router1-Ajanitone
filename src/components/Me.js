import React from "react";
import "./Me.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { VscGithubAlt } from "react-icons/vsc";
function Me({ person }) {
  return (
    <div className="container">
      <div className="intro">
        <img
          src="http://www.safeandsoundbelize.de/blog/wp-content/uploads/2009/12/7-Kirk-Ajani-McDowell.jpg"
          alt="Kirk"
        />
        <div>
          <h2 className="name">Hi I am {person[0].name}</h2>
          <p>
            I was born in {person[0].city}, {person[0].land}. <br /> I am a{" "}
            {person[0].job1} and {person[0].job2}.
          </p>
        </div>
        <div className="links">
          <h3 className="websites"> Some websites I frequently visit</h3>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {<AiOutlineYoutube />} YouTube
          </a>
          <a
            href="https://www.w3schools.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {<BsCodeSlash />} w3schools
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {<VscGithubAlt />} Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Me;
