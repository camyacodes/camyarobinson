import React from "react";
import niques from "../../assets/niques-eats.herokuapp.com_.png";
// import weather from "../../assets/camyacodes.github.io_weather-dashboard_test.png";
// import quiz from "../../assets/camyacodes.github.io_code-quiz1.png";
import fitness from "../../assets/no-gear-fitness.herokuapp.com_.png";
import employee from "../../assets/employee-tracker-screenshot.png";
import portfolio from "../../assets/portfoliositescreenshot.png"

import "./style.css";

export default function ProjectCards() {
	return (
		<div class="card-deck row">
			<div class="card col-sm-6 p-0 project-card">
				<img class="card-img-top eats" src={niques} alt="Card image cap" />
				<div class="card-body">
					<h5 class="card-title">Nique's Eats</h5>
					<p class="card-text">
						Nique's Eats is a meal delivery service that delivers homemade meals
						to customers on their date of choice. This ecommerce full-stack
						application utilizes the MERN stack.
					</p>
					<p class="card-text">
					<a class="btn btn-secondary" href="https://drive.google.com/file/d/1dPq8m-y_NC9txXZplgzXhDgAqoAihkxo/view?usp=sharing" role="button" target="_blank">Live Demo</a> <a class="btn btn-secondary" href="https://github.com/camyacodes/niques_eats" role="button" target="_blank">GitHub Repo</a>
					</p>
				</div>
			</div>
			<div class="card col-sm-6 p-0 project-card">
				<img class="card-img-top" src={portfolio} alt="Card image cap" />
				<div class="card-body">
					<h5 class="card-title">Portfolio Website</h5>
					<p class="card-text">
					A live site displaying my coding portfolio. 

					</p>
					<p class="card-text">
					<a class="btn btn-secondary" href="https://camyacodes.github.io/camyarobinson/" role="button" target="_blank">Visit Site</a> <a class="btn btn-secondary" href="https://github.com/camyacodes/camyarobinson" role="button" target="_blank">GitHub Repo</a>
					</p>
				</div>
			</div>
			<div class="card col-sm-6 p-0 project-card">
				<img
					class="card-img-top employee"
					src={employee}
					alt="Card image cap"
				/>
				<div class="card-body">
					<h5 class="card-title">Employee Tracker Application</h5>
					<p class="card-text">
					A command-line application used to manage a company's employee database.
					</p>
					<p class="card-text">
					<a class="btn btn-secondary" href="https://drive.google.com/file/d/1EbPelo9oTSIc4W9YH0quBUAriEszRTmy/view?usp=sharing" role="button" target="_blank">Live Demo</a> <a class="btn btn-secondary" href="https://github.com/camyacodes/employee-tracker-app" role="button" target="_blank">GitHub Repo</a>
					</p>
				</div>
			</div>
			<div class="card col-sm-6 p-0 project-card">
				<img
					class="card-img-top"
					src="https://user-images.githubusercontent.com/87587644/152725373-71860537-a185-44f6-98cc-b08feaa4bb0b.png"
					alt="Card image cap"
				/>
				<div class="card-body">
					<h5 class="card-title">Team Profile Generator</h5>
					<p class="card-text">
					A Node.js command-line application that takes in information about employees on a software engineering team and generates a webpage that displays summaries for each person.
					</p>
					<p class="card-text">
					<a class="btn btn-secondary" href="https://drive.google.com/file/d/1T5EJF5ZMHfdiYBuwffOat1nw5WzF-oLp/view?usp=sharing" role="button" target="_blank">Live Demo</a> <a class="btn btn-secondary" href="https://github.com/camyacodes/team-profile-generator" role="button" target="_blank">GitHub Repo</a>
					</p>
				</div>
			</div>
		</div>
	);
}

/* <div className="container">
			<div className="row d-flex justify-content-between">
				<div class="card" style={{ width: "20rem" }}>
					<img src={niques} class="card-img-top" alt="test pic" />
					<div class="card-body">
						<h5 class="card-title">Nique's Eats</h5>
						<p class="card-text">
							Nique's Eats is a meal delivery service that delivers homemade
							meals to customers any day of the week. There are dozens of dishes
							to choose from as well as sides and desserts. This ecommerce
							full-stack application utilizes the MERN stack.
						</p>
						<a href="https//www.google.com" class="btn btn-light">
							Live Site
						</a>
						<a href="https//www.google.com" class="btn btn-light">
							GIThub{" "}
						</a>
					</div>
				</div>
				<div class="card" style={{ width: "20rem" }}>
					<img
						src="https://user-images.githubusercontent.com/87587644/148778910-2a940e8f-9c98-4d88-812b-d49bc127ad71.png"
						class="card-img-top"
						alt="test pic"
					/>
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</p>
						<a href="https//www.google.com" class="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
				<div class="card" style={{ width: "20rem" }}>
					<img src={niques} class="card-img-top" alt="test pic" />
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</p>
						<a href="https//www.google.com" class="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>

			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-4">
						<img
							src={niques}
							className="img-fluid rounded-start"
							alt="cute cat"
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h1 className="card-title">Nique's Eats</h1>
							<p className="card-text">
								Nique's Eats is a meal delivery service that delivers homemade
								meals to customers any day of the week. There are dozens of
								dishes to choose from as well as sides and desserts. Customers
								can navigate to this site, choose what meals they want, choose
								what day they would like their meals, and have them delivered
								right to their doorstep.
							</p>
							<button type="button" className="btn btn-light">
								Live Site
							</button>
							<button type="button" className="btn btn-light">
								Github
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-4">
						<img
							src={niques}
							className="img-fluid rounded-start"
							alt="cute cat"
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</p>
							<p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div> */

// <div className="container">
// 	<div className="row">
// 		<div className="col-sm-6">
// 			<div class="card bg-dark text-white">

// 				<img class="card-img eats" src={niques} alt="Card image" />
// 				<div class="card-img-overlay">
// 					<h5 class="card-title">Nique's Eats</h5>
// 					<p class="card-text">
// 					Nique's Eats is a meal delivery service that delivers homemade meals to customers on their date of choice. This ecommerce full-stack application utilizes the MERN stack.
// 					</p>
// 					<p class="card-text">Last updated 3 mins ago</p>
// 				</div>
// 			</div>
// 		</div>
// 		<div className="col-sm-6">
// 			<div class="card bg-dark text-white">
// 				<img class="card-img eats" src={weather} alt="Card image" />
// 				<div class="card-img-overlay">
// 					<h5 class="card-title">Nique's Eats</h5>
// 					<p class="card-text">
// 						This web application allows users to see the weather outlook for multiple cities. It provides the current weather and a 5 day forecast.
// 					</p>
// 					<p class="card-text">Last updated 3 mins ago</p>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </div>
