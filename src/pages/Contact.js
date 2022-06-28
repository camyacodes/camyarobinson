import React from "react";
import './Contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, fa } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
	return (
		<div className="contact-section">
			<h1 className="text-white display-1">Get In Touch</h1>
			<h2 className="mb-4 text-white">
				I'm currently looking for full-time Software Development opportunities!
				If you know of any positions available, if you have any questions, or if
				you just want to say hi, please feel free to reach out to me!
			</h2>
			<div class="contact-links">
				<ul className="contact-list">
					<li className="mb-1">
						<a className="h2" href="mailto: camyacodes@gmail.com">
							<FontAwesomeIcon
								className="contact-icon"
								icon={faEnvelope}
								size="1x"
							></FontAwesomeIcon>
							camyacodes@gmail.com
						</a>
					</li>
					<li className="mb-1">
						<a
							className="h2"
							href="https://github.com/camyacodes"
							target="_blank"
						>
							<FontAwesomeIcon
								className="contact-icon"
								icon={faGithub}
								size="1x"
							></FontAwesomeIcon>
							github.com/camyacodes
						</a>
					</li>
					<li>
						<a
							className="h2"
							href="https://www.linkedin.com/in/camya-r-b19ab1b3/"
							target="_blank"
						>
							<FontAwesomeIcon
								className="contact-icon"
								icon={faLinkedin}
								size="1x"
							></FontAwesomeIcon>
							linkedin.com/in/camya-r-b19ab1b3/
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
