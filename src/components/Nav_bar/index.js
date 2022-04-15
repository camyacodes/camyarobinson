import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// import logo from "../../assets/CC_logo2.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";


export default function Nav_bar() {


	return (
    <nav className="navbar navbar-expand-md navbar-light">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse nav-fill w-100" id="navbarNav">
        <ul className="navbar-nav nav-fill w-100">
          <li className="nav-item">
          <Link to="/">
          <h3 id="nav-text">HOME</h3>
          </Link>
          </li>
          <li className="nav-item">
          <Link to="/about">
          <h3 id="nav-text">ABOUT</h3>
          </Link>
          </li>
          <li className="nav-item">      
          <a href="/projects">
          <h3 id="nav-text">PROJECTS</h3>
          </a>         
          </li>
          <li className="nav-item">
          <a href="/contact">         
          <h3 id="nav-text">CONTACT</h3>
          </a>
            </li>
            <li className="nav-item">
          <a href="/resume">         
          <h3 id="nav-text">RESUME</h3>
          </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
	);
}
