import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Image from "./image";
import "./main.css";

function Main() {
  const [reactActive, setReactActive] = useState(false);
  const [css3Active, setCSS3Active] = useState(false);
  const [html5Active, setHtml5Active] = useState(false);
  const [javascriptActive, setJavascriptActive] = useState(false);
  const [jqueryActive, setJqueryActive] = useState(false);
  const [bootstrapActive, setBootstrapActive] = useState(false);
  const [expressActive, setExpressActive] = useState(false);
  const [nodeActive, setNodeActive] = useState(false);
  const [mongoActive, setMongoActive] = useState(false);
  const [mysqlActive, setMysqlActive] = useState(false);
  const [gitActive, setGitActive] = useState(false);
  const [githubActive, setGithubActive] = useState(false);
  const [sequelizeActive, setSequelizeActive] = useState(false);

  function setAllFalse() {
    setReactActive(false);
    setCSS3Active(false);
    setHtml5Active(false);
    setJavascriptActive(false);
    setJqueryActive(false);
    setBootstrapActive(false);
    setExpressActive(false);
    setNodeActive(false);
    setMongoActive(false);
    setMysqlActive(false);
    setGitActive(false);
    setGithubActive(false);
    setSequelizeActive(false);
  }

  async function changeSlide(e) {
    switch (e) {
      case 0:
        setAllFalse();
        setTimeout(() => {
          setReactActive(true);
          setGithubActive(true);
          setBootstrapActive(true);
          setJavascriptActive(true);
          setExpressActive(true);
          setNodeActive(true);
          setMysqlActive(true);
          setSequelizeActive(true);
        }, 1000);
        break;
      case 1:
        setAllFalse();
        setTimeout(() => {
          setJavascriptActive(true);
          setExpressActive(true);
          setNodeActive(true);
          setMysqlActive(true);
          setSequelizeActive(true);
        }, 1000);
        break;
      case 2:
        setAllFalse();
        setTimeout(() => {
          setCSS3Active(true);
          setJavascriptActive(true);
          setGitActive(true);
          setMongoActive(true);
          setExpressActive(true);
        }, 1000);
        break;
      case 3:
        setAllFalse();
        setTimeout(() => {
          setCSS3Active(true);
          setJavascriptActive(true);
          setJqueryActive(true);
          setGitActive(true);
        }, 1000);
        break;
      case 4:
        setAllFalse();
        setTimeout(() => {
          setJavascriptActive(true);
          setHtml5Active(true);
          setGithubActive(true);
          setCSS3Active(true);
        }, 1000);
        break;
      case 5:
        setAllFalse();
        setTimeout(() => {
          setJavascriptActive(true);
          setHtml5Active(true);
          setCSS3Active(true);
        }, 1000);
        break;
      case 6:
        setAllFalse();
        setTimeout(() => {
          setJavascriptActive(true);
          setHtml5Active(true);
          setCSS3Active(true);
        }, 1000);
        break;
      default:
        break;
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-8">
          <div className="mx-auto text-center wings">
            <Image/>
            <img
              className={reactActive ? "zoom" : "zoomback"}
              id="react"
              src="https://img.shields.io/badge/-ReactJs-61DAFB?style=plastic&logo=react"
              alt="reactjs badge"
            />
            <img
              className={css3Active ? "zoom" : "zoomback"}
              id="css3"
              src="https://img.shields.io/badge/-CSS3-1572B6?style=plastic&logo=css3"
              alt="css3 badge"
            />
            <img
              className={html5Active ? "zoom" : "zoomback"}
              id="html5"
              src="https://img.shields.io/badge/-HTML5-E34F26?style=plastic&logo=html5"
              alt="html5 badge"
            />
            <img
              className={javascriptActive ? "zoom" : "zoomback"}
              id="javascript"
              src="https://img.shields.io/badge/-Javascript-F7DF1E?style=plastic&logo=javascript"
              alt="javascript badge"
            />
            <img
              className={jqueryActive ? "zoom" : "zoomback"}
              id="jquery"
              src="https://img.shields.io/badge/-jQuery-0769AD?style=plastic&logo=jquery"
              alt="jquery badge"
            />
            <img
              className={bootstrapActive ? "zoom" : "zoomback"}
              id="bootstrap"
              src="https://img.shields.io/badge/-Bootstrap-7952B3?style=plastic&logo=bootstrap"
              alt="bootstrap badge"
            />
            <img
              className={expressActive ? "zoom" : "zoomback"}
              id="express"
              src="https://img.shields.io/badge/-Express.js-000000?style=plastic&logo=express"
              alt="expressjs badge"
            />
            <img
              className={nodeActive ? "zoom" : "zoomback"}
              id="node"
              src="https://img.shields.io/badge/-Node.js-339933?style=plastic&logo=node.js"
              alt="nodejs badge"
            />
            <img
              className={mongoActive ? "zoom" : "zoomback"}
              id="mongodb"
              src="https://img.shields.io/badge/-MongoDB-47A248?style=plastic&logo=mongodb"
              alt="mongodb badge"
            />
            <img
              className={mysqlActive ? "zoom" : "zoomback"}
              id="mysql"
              src="https://img.shields.io/badge/-MySQL-4479A1?style=plastic&logo=mysql"
              alt="mysql badge"
            />
            <img
              className={gitActive ? "zoom" : "zoomback"}
              id="git"
              src="https://img.shields.io/badge/-GIT-F05032?style=plastic&logo=git"
              alt="git badge"
            />
            <img
              className={githubActive ? "zoom" : "zoomback"}
              id="github"
              src="https://img.shields.io/badge/-GitHub-181717?style=plastic&logo=github"
              alt="github badge"
            />
            <img
              className={sequelizeActive ? "zoom" : "zoomback"}
              id="sequelize"
              src="https://img.shields.io/badge/-Sequelize-52B0E7?style=plastic&logo=sequelize"
              alt="sequelize badge"
            />
          </div>
          <Carousel fade onSelect={changeSlide}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/tabletop-screenshot-min.png"
                alt="TableTop"
              />
              <Carousel.Caption>
                <p>
                  We created a dungeons and dragons style organizer/real time
                  game board for users to be able to excel at DND adventures
                </p>
                <p>
                  <a
                    href="https://github.com/Mark-LohseMiranda/TableTop-FrontEnd"
                    rel="noreferrer"
                    target="_blank"
                  >
                    GitHub
                  </a>{" "}
                  |{" "}
                  <a
                    href="http://markl-m.me/TableTop"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Deployed
                  </a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/bulletjournal.png"
                alt="Bullet Journal"
              />

              <Carousel.Caption>
                <p>
                  We created a bullet journal allowing users to create and
                  customize daily journals with modular components
                </p>
                <p>
                  <a
                    href="https://github.com/Mark-LohseMiranda/bulletjournal"
                    rel="noreferrer"
                    target="_blank"
                  >
                    GitHub
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://markl-m.me/bulletjournal2"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Deployed
                  </a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/trackiest-budget-screenshot.png"
                alt="Budget Tracker"
              />

              <Carousel.Caption>
                <p>
                  Demo app to showcase offline/online data storage and
                  progressive web app abilities.
                </p>
                <p>
                  <a
                    href="https://github.com/Mark-LohseMiranda/trackiest-budget-tracker"
                    rel="noreferrer"
                    target="_blank"
                  >
                    GitHub
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://markl-m.me/budget"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Deployed
                  </a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/workout-planner.png"
                alt="Workout Planner"
              />

              <Carousel.Caption>
                <p>
                  A versatile, clean, and helpful website where you can choose
                  from a large selection of area-specific exercises to make your
                  best daily workout.
                </p>
                <p>
                  <a
                    href="https://github.com/Mark-LohseMiranda/ExerciseIsFun"
                    rel="noreferrer"
                    target="_blank"
                  >
                    GitHub
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://markl-m.me/exerciseisfun"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Deployed
                  </a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/weather-dashboard.png"
                alt="Weather Dashboard"
              />

              <Carousel.Caption>
                <p>
                  Utilizing javascript/html/css and OpenWeather One Call API a
                  user is able to search, by city, for the current weather and 5
                  day forecast.
                </p>
                <p>
                  <a
                    href="https://github.com/Mark-LohseMiranda/weather-dashboard"
                    rel="noreferrer"
                    target="_blank"
                  >
                    GitHub
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://markl-m.me/weather"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Deployed
                  </a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/password-generator-screenshot.png"
                alt="Password Generator"
              />

              <Carousel.Caption>
                <p>Password generator using Javascript/HTML/CSS</p>
                <p>
                  <a
                    href="https://github.com/Mark-LohseMiranda/password-generator"
                    rel="noreferrer"
                    target="_blank"
                  >
                    GitHub
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://mark-lohsemiranda.github.io/password-generator/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Deployed
                  </a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/code-quiz.png"
                alt="Code Quiz"
              />

              <Carousel.Caption>
                <p>
                  A small project showcasing Javascript/HTML/CSS to run a small
                  quiz game with scoreboard.
                </p>
                <p>
                  <a
                    href="https://github.com/Mark-LohseMiranda/code-quiz"
                    rel="noreferrer"
                    target="_blank"
                  >
                    GitHub
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://mark-lohsemiranda.github.io/code-quiz/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Deployed
                  </a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-md-12 col-lg-4">
          <div className="bio mx-auto">
            <p>
              I have dabbled with web development since the late 90s. Having
              worked in various government jobs for 20 years, I recently decided
              to turn my coding passion into full time job.
            </p>

            <p>
              I reside with my spouse and two children outside of Tacoma,
              Washington. I obtained a certificate in Full Stack Web Development
              from the University of Washington. I am currently volunteering my
              time with{" "}
              <a href="https://catchafire.org" rel="noreferrer" target="_blank">
                catchafire.org
              </a>{" "}
              building applications for non-profits.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div id="bottom" className="container">
          <div className="col-sm-4">
            <a href="http://www.scouting.org/" target="_blank" rel="noreferrer">
              <div>
                <img alt="boy scouts of america" src="./images/bsa.png"></img>
              </div>
              <div>Estote parati</div>
            </a>
          </div>
          <div className="col-sm-4">
            <a href="http://www.marines.com/" target="_blank" rel="noreferrer">
              <div>
                <img alt="usmc" src="./images/usmc.png"></img>
              </div>
              <div>Semper Fidelis</div>
            </a>
          </div>
          <div className="col-sm-4">
            <a
              href="http://www.gocoastguard.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <img alt="uscg" src="./images/uscg.png"></img>
              </div>
              <div>Semper Paratus</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
