import React from "react";
import niques from "../../assets/niques-eats.herokuapp.com_.png";
// import weather from "../../assets/camyacodes.github.io_weather-dashboard_test.png";
// import quiz from "../../assets/camyacodes.github.io_code-quiz1.png";
import fitness from "../../assets/no-gear-fitness.herokuapp.com_.png";
import employee from "../../assets/employee-tracker-screenshot.png";
import portfolio from "../../assets/portfoliositescreenshot.png";
import movieapp from "../../assets/what2watchscreenshot.png";
import templifypic from "../../assets/screenshot.png"

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
            <a
              class="btn btn-secondary"
              href="https://niqueseats-8c1c3659f187.herokuapp.com/"
              role="button"
              target="_blank"
            >
              Visit Site
            </a>{" "}
            <a
              class="btn btn-secondary"
              href="https://github.com/camyacodes/niques-eats"
              role="button"
              target="_blank"
            >
              GitHub Repo
            </a>
          </p>
        </div>
      </div>
      <div class="card col-sm-6 p-0 project-card">
        <img class="card-img-top" src={templifypic} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Templify</h5>
          <p class="card-text">
            An application that allows users to select from a variety of
            pre-designed templates, customize them to their liking, and generate
            an email with a subject line ready for use.
          </p>
          <p class="card-text">
            <a
              class="btn btn-secondary"
              href="https://camyacodes.github.io/templify/"
              role="button"
              target="_blank"
            >
              Visit Site
            </a>{" "}
            <a
              class="btn btn-secondary"
              href="https://github.com/camyacodes/templify"
              role="button"
              target="_blank"
            >
              GitHub Repo
            </a>
          </p>
        </div>
      </div>
      <div class="card col-sm-6 p-0 project-card">
        <img class="card-img-top" src={portfolio} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Portfolio Website</h5>
          <p class="card-text">A live site displaying my coding portfolio.</p>
          <p class="card-text">
            <a
              class="btn btn-secondary"
              href="https://camyacodes.github.io/camyarobinson/"
              role="button"
              target="_blank"
            >
              Visit Site
            </a>{" "}
            <a
              class="btn btn-secondary"
              href="https://github.com/camyacodes/camyarobinson"
              role="button"
              target="_blank"
            >
              GitHub Repo
            </a>
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
            A command-line application used to manage a company's employee
            database.
          </p>
          <p class="card-text">
            <a
              class="btn btn-secondary"
              href="https://drive.google.com/file/d/1EbPelo9oTSIc4W9YH0quBUAriEszRTmy/view?usp=sharing"
              role="button"
              target="_blank"
            >
              Live Demo
            </a>{" "}
            <a
              class="btn btn-secondary"
              href="https://github.com/camyacodes/employee-tracker-app"
              role="button"
              target="_blank"
            >
              GitHub Repo
            </a>
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
            A Node.js command-line application that takes in information about
            employees on a software engineering team and generates a webpage
            that displays summaries for each person.
          </p>
          <p class="card-text">
            <a
              class="btn btn-secondary"
              href="https://drive.google.com/file/d/1T5EJF5ZMHfdiYBuwffOat1nw5WzF-oLp/view?usp=sharing"
              role="button"
              target="_blank"
            >
              Live Demo
            </a>{" "}
            <a
              class="btn btn-secondary"
              href="https://github.com/camyacodes/team-profile-generator"
              role="button"
              target="_blank"
            >
              GitHub Repo
            </a>
          </p>
        </div>
      </div>
      {/* <div class="card col-sm-6 p-0 project-card">
        <img class="card-img-top" src={movieapp} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">What 2 Watch</h5>
          <p class="card-text">
            An application that provides users the experience of finding movies
            in a more convenient way, by providing popular movie titles sorted
            by genre all on one site.
          </p>
          <p class="card-text">
            <a
              class="btn btn-secondary"
              href="https://camyacodes.github.io/what-to-watch-1/"
              role="button"
              target="_blank"
            >
              Visit Site
            </a>{" "}
            <a
              class="btn btn-secondary"
              href="https://github.com/camyacodes/what-to-watch-1"
              role="button"
              target="_blank"
            >
              GitHub Repo
            </a>
          </p>
        </div>
      </div> */}
    </div>
  );
}
