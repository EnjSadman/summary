import React from "react";
import './Heading.scss';
import { Link } from "react-router-dom";

export const Heading = () => {
  return(
    <div className="heading">
      <nav className="heading__navigation">
        <Link className="heading__navigation--link" to="/">Home</Link>
        <Link className="heading__navigation--link" to="/123">123</Link>
      </nav>
    </div>
  )
}


