import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import '../styles/header.scss'
const Counter = () => {
  return( 
  <nav>
      <h1>E-commerce</h1>
      <main>
        <HashLink to={'/#home'}>Home</HashLink>
        <HashLink to='/contact'>Contact</HashLink>
        <HashLink to='/#about'>About</HashLink>
        <HashLink to='/#brands'>Brands</HashLink>
        <Link to='/services'>Services</Link>

      </main>
  </nav>
  )
};

export default Counter;
