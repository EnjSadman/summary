import React from "react";
import { Link } from "react-router-dom";

export const Heading = () => {
  return(
    <div className="heading">
      <nav className="heading__navigation">
        <Link className="heading__navigation--link" to="/">
          Home
        </Link>
        <Link className="heading__navigation--link" to="/portfolio">
          Portfolio
        </Link>
        <a className="heading__navigation--link linkedin" href="https://www.linkedin.com/in/roman-pavlenko-664674242/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="heading__navigation--link github" href="https://github.com/EnjSadman" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </nav>
    </div>
  )
}


