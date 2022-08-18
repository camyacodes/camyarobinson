import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
	return (
		<div className="homebox">
			<h1 className="title">Hi there, I'm Camya!</h1>
			<h2 className="description">
				A Full Stack Developer passionate about creating 
				applications.
      </h2>
      <h4>HTML | CSS | JAVASCRIPT | NODE.JS | EXPRESS.JS | REACT | MONGODB | GRAPHQL | SQL/MySQL </h4>
			<div>
				<a href="https://www.linkedin.com/in/camya-r-b19ab1b3/" target="_blank">
					<FontAwesomeIcon
						className="icon"
						icon={faLinkedin}
						size="3x"
					></FontAwesomeIcon>
				</a>
				<a href="https://github.com/camyacodes" target="_blank">
					<FontAwesomeIcon
						className="icon"
						icon={faGithub}
						size="3x"
					></FontAwesomeIcon>
				</a>
			</div>
		</div>
	);
}
