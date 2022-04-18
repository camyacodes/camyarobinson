import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// import logo from "../../assets/CC_logo2.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Nav_bar() {
	return (
		<nav className="navbar">
			<div className="logo">
				<Link to="/"> &lt;/&gt; | CamyaCodes </Link>
			</div>

			<ul className="nav-links">
				<input type="checkbox" id="checkbox_toggle" />
				<label htmlFor="checkbox_toggle" className="hamburger">
					&#9776;
				</label>
				<div className="menu">
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/projects">Projects</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<Link to="/resume">Resume</Link>
					</li>
				</div>
			</ul>
		</nav>
	);
}



