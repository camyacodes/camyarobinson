import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// import logo from "../../assets/CC_logo2.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

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
						<a href="https://docs.google.com/document/d/1E_8EfWvmSEhAuKhG10p--NLZXQPikqxXa-l4CzsUcg8/edit?usp=sharing" target="_blank">Resume</a>
						
					</li>
					<li>
						<Link to="/contact">Contact Me</Link>
					</li>
				</div>
			</ul>
		</nav>
	);
}



