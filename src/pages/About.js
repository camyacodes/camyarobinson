import React from "react";
import "./About.css";
import about_pic from "../assets/turtle_about_pic.jpg";

export default function About() {
	return (
		<div className="box">
			<section class="py-5 text-white">
				<div class="container px-4 px-lg-5 my-5">
					<div class="row gx-4 gx-lg-5 align-items-center">
						<div class="col-md-6">
							<img
								class="card-img-top mb-5 mb-md-0"
								src={about_pic}
								alt="cat"
							/>
						</div>
						<div class="col-md-6">
							<h1 class="display-5 fw-bolder">About Me</h1>
							<p class="lead bg-black">
								I'm Mya, a Full Stack Developer from Jacksonville, Florida. My
								coding journey started in college when I took Quantitative
								Population Ecology, a course required for my major in Wildlife
								Ecology and Conservation. It was there that I learned my first
								programming language, R, and from then on I was hooked!{" "}
								<br></br> <br></br> I am passionate about coding because I enjoy
								solving real world problems and having the solution right at my
								fingertips, waiting to be written. I am a full stack developer,
								but I gravitate more towards the front-end. Front-end
								development challenges me creatively to style applications that
								are not only aesthetically pleasing, but functional and
								efficient. My desire to create the best user experience coupled
								with my back-end skills means I can fully actualize any vision
								for any project that I may have. I am committed to constantly
								learning and excited to continue refining my skills with the
								right company.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
