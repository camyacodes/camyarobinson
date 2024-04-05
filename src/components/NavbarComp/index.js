import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function NavbarComp() {
	return (
		<nav className="navbar">
			<div className="logo">
				<Link id="logo" to="/"> &lt;/&gt; | Camya Robinson </Link>
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
						<a href="https://docs.google.com/document/d/1irbUSUZPB9ZacsrwmDJX8uHK4liw9ke1dDQygXiDwsw/edit?usp=sharing" target="_blank">Resume</a>
						
					</li>
					<li>
						<Link to="/contact">Contact Me</Link>
					</li>
				</div>
			</ul>
		</nav>
	);
}



