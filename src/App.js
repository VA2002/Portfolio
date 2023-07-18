//Imports

import logo from "./Logo.png";
import Amplify from "./Amplify.png";
import Deweblop from "./Deweblop.png";
import TwoDew from "./TwoDew.png";
import CardFlip from "./Cardflip.jpg";
import Apple from "./Apple.png";
import AmplifyVid from "./Amplify.mp4";
import CardflipVid from "./CardFlip.mp4";
import DeweblopVid from "./Deweblop.mp4";
import TwodewVid from "./TwoDew.mp4";
import AppleVid from "./VisionPro.mp4";
import bgmusic from "./InDreamland.mp3";
import workers from "./Workers.gif";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { useState, useEffect } from "react";
import { assertTypeParameter } from "@babel/types";


//Exporting background music function which returns audio/embed tag
export function bgMusic() {
  //defining a function variable for audio/embed tag
  const play = e => {
    var audio = document.getElementById("Bgmusic");
    audio.play();
  };
  //this function returns the following
  return (
    <div>
      <embed
        id="Bgmusic"
        autoplay="true"
        loop="true"
        src= {bgmusic}
        style={{visibility: "hidden"}}
        onload={() => play()}
      ></embed>
    </div>
  );
}

//Home function to define elements of the landing page
function Home() {
  //defining function variables for certain tags in return
  const formOpen = e => {
    var form = document.querySelector(".Form");
    form.style.animation = "appearone 1s";
    form.style.display = "block";
  };
  const formClose = e => {
    var form = document.querySelector(".Form");
    form.style.animation = "fadeout 1.2s";
    form.style.display = "none";
  };
  const submit = e => {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var msg = document.getElementById("message").value;
    var theForm = document.querySelector(".Form");
    theForm.style.display = "none";
    alert("Submitted! Thank you for your query, " + name);
    name = "";
    mail = "";
    msg = "";
  };
  //this function returns the following
  return (
    <div className="Home">
      <div className="Navigation">
        <img id="Logo" src={logo} />
        <div className="Thelinks">
          <Link
            id="Navlink"
            style={{ fontFamily: "Bahnschrift Extrabold" }}
            to="/"
          >
            Home
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link id="Navlink" to="/about">
            About
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link id="Navlink" to="/projects">
            Projects
          </Link>
        </div>
        <br />
      </div>
      */}
      <div className="Form">
        <img id="Workers" src={workers} />
        <form className="Theform" onSubmit={submit}>
          <i
            id="Back"
            onClick={() => formClose()}
            class="fa-solid fa-arrow-left"
          ></i>
          <h1 id="Prompt">ENTER YOUR DETAILS</h1>
          <br />
          <input id="name" type="text" placeholder="Client Name*" required />
          &nbsp;&nbsp;
          <input id="mail" type="email" placeholder="Email*" required />
          <textarea id="message" placeholder="Message*" required />
          <h5>*Required</h5>
          <input id="submitform" type="submit" value="Submit" />
        </form>
      </div>
      <div className="Footerhome">
        <br />
        &nbsp;&nbsp;&nbsp; Copyright © {new Date().getFullYear()} \//\ Dev
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i id="Socialmedia" className="fa-regular fa-envelope"></i>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i id="Socialmedia" className="fa-brands fa-github"></i>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i id="Socialmedia" className="fa-brands fa-twitter"></i>
      </div>
      <div className="Intro">
        Hi! I am Vishesh Arora
        <br /> <br />
        <p id="Profession">Professional Freelance Front End Developer;</p>
        <br />
        <button className="Formbutton" onClick={() => formOpen()}>
          <span id="Hireme">Hire Me</span>
        </button>
      </div>
    </div>
  );
}

//About function to define elements for about section
export function About() {
  //constants, variables and function variables defined below
  const appear = e => {
    console.log("Scrolled");
  };
  var reasonsArray = [
    "passionate",
    "determined",
    "adaptable",
    "analytical",
    "inquisitive",
    "up to date",
    "a critical thinker",
    "a problem solver",
    "a team player",
    "trustworthy"
  ];

  //use state for changing array index 
  const [index, setIndex] = useState(0);

  //use effect for above use state
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => {
        // reset index if current index is greater than array size
        return prevIndex + 1 < reasonsArray.length ? prevIndex + 1 : 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  });

  //this function returns the following
  return (
    <div class="About">
      <div class="Navigation">
        <img id="Logo" src={logo} />
        <div class="Thelinks">
          <Link id="Navlink" to="/">
            Home
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link
            id="Navlink"
            style={{ fontFamily: "Bahnschrift Extrabold" }}
            to="/about"
          >
            About
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link id="Navlink" to="/projects">
            Projects
          </Link>
        </div>
        <br />
      </div>
      <br />
      <div className="Aboutme">
        <span id="WhoAmI">
          So...
          <br />
          <br />
          Who am I?
        </span>
        <div id="Line">&nbsp;</div>
        <div id="Iam">
          I, Vishesh, am a front end web developer who graduated from <br />{" "}
          Middlesex University of London (Dubai Branch), where I studied
          <br /> Bachelor of Science in Information Technology.
          <br />
          <br />
          With every line of code, I strive to make the web a beautiful place{" "}
          <br />
          with countless possibilities
        </div>
      </div>
      <div className="Skills" onScroll={() => appear()}>
        <br />
        <br />
        <center>
          <h1 id="Offer">Skills I can offer</h1>
          <table cellPadding="40" cellSpacing="90">
            <tr className="Thelogos">
              <td id="htmllogo">
                <i class="fa-brands fa-html5"></i>
              </td>
              <td id="csslogo">
                <i class="fa-brands fa-css3-alt"></i>
              </td>
              <td id="jslogo">
                <i class="fa-brands fa-js"></i>
              </td>
              <td id="reactlogo">
                <i class="fa-brands fa-react"></i>
              </td>
            </tr>
          </table>
        </center>
        <table className="Logolabel" cellSpacing="32" cellPadding="60">
          <tr className="Thelabels">
            <td id="Label">&nbsp;&nbsp;HTML</td>
            <td id="Label">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CSS
            </td>
            <td id="Label">&nbsp;&nbsp;&nbsp; JAVASCRIPT</td>
            <td id="Label">&nbsp; REACT</td>
          </tr>
        </table>
      </div>
      <div className="Whyme">
        <br />
        <br />
        <center>
          <h1 id="Whyhireme">Why hire me?</h1>
          <br />
          Because I am{" "}
          <span id="Reasons" key={reasonsArray[index]}>
            {reasonsArray[index]}
          </span>
        </center>
      </div>
      <div className="Footerabout">
        <br />
        &nbsp;&nbsp;&nbsp; Copyright © {new Date().getFullYear()} \//\ Dev
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i id="Socialmedia" className="fa-regular fa-envelope"></i>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i id="Socialmedia" className="fa-brands fa-github"></i>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i id="Socialmedia" className="fa-brands fa-twitter"></i>
      </div>
    </div>
  );
}

//Projects function to define elements for projects section
export function Projects() {
  //objects being set up
  const amplify = {
    id: Math.random(),
    name: "Amplify",
    logo: Amplify,
    desc: "A website where you can upload or listen to music",
    video: AmplifyVid,
    bestbrowser: "Google Chrome",
    github: "https://github.com/VA2002/Amplify/tree/main"
  };
  const deweblop = {
    id: Math.random(),
    name: "Deweblop",
    logo: Deweblop,
    desc: "Website of web development teaching company",
    video: DeweblopVid,
    bestbrowser: "Google Chrome",
    github: "https://github.com/VA2002/Deweblop/tree/main"
  };
  const twoDew = {
    id: Math.random(),
    name: "Two Dew",
    logo: TwoDew,
    desc: "A to-do list web application made using React",
    video: TwodewVid,
    bestbrowser: "Google Chrome",
    github: "https://github.com/VA2002/TwoDew/tree/main"
  };
  const cardFlip = {
    id: Math.random(),
    name: "Card Flip",
    logo: CardFlip,
    desc: "A card game that tests your memory",
    video: CardflipVid,
    bestbrowser: "Microsoft Edge: Vertical Tabs Mode On",
    github: "https://github.com/VA2002/CardFlip/tree/main"
  };
  const appleVision = {
    id: Math.random(),
    name: "Apple Vision Pro",
    logo: Apple,
    desc: "A webpage that promotes the latest Apple Vision Pro VR Set",
    video: AppleVid,
    bestbrowser: "Google Chrome",
    github: "https://github.com/VA2002/AppleVisionPro/tree/main"
  };
  const myPortfolio = {
    id: Math.random(),
    name: "VA Dev",
    logo: logo,
    desc: "The Portfolio page you are on, made using ReactJS",
    video: null,
    bestbrowser: "Google Chrome",
    github: "https://github.com/VA2002/Portfolio/tree/main"
  };

  //All objects stored in an array
  const projectArray = [
    amplify,
    deweblop,
    twoDew,
    cardFlip,
    appleVision,
    myPortfolio
  ];
  //The above array divided into 2 parts
  const rowA = projectArray.slice(0, 3);
  const rowB = projectArray.slice(3, 6);

  //For testing purpose
  const showObj = e => {
    for (let i = 0; i < projectArray.length; i++) {
      console.log(projectArray[i]);
      console.log(projectArray[i].name);
      console.log(projectArray[i].desc);
    }
  };

  //Open preview box for all row A objects 
  const openPreviewA = e => {
    showObj();
    var black = document.querySelector(".Black");
    for (let i = 0; i < rowA.length; i++) {
      if (rowA[i].id === e.id) {
        black.style.display = "block";
        document.getElementById(`${rowA[i].name}`).style.display = "block";
        console.log(`${e.id} ` + `${rowA[i].name}`);
      } else {
        console.log("Nvm");
      }
    }
  };

  //Open preview box for all row B objects
  const openPreviewB = e => {
    showObj();
    var black = document.querySelector(".Black");
    for (let i = 0; i < rowB.length; i++) {
      if (rowB[i].id === e.id) {
        black.style.display = "block";
        document.getElementById(`${rowB[i].name}`).style.display = "block";
        console.log(`${e.id} ` + `${rowB[i].name}`);
      } else {
        console.log("Nvm");
      }
    }
  };

  const previewClose = e => {
    var previewBoxes = document.getElementsByClassName("Preview");
    for (var i = 0, len = previewBoxes.length; i < len; i++) {
      previewBoxes[i].style.display = "none";
    }
    document.querySelector(".Black").style.display = "none";
  };

  return (
    <div class="Projects">
      <div class="Navigation">
        <img id="Logo" src={logo} />
        <div class="Thelinks">
          <Link id="Navlink" to="/">
            Home
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link id="Navlink" to="/about">
            About
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link
            id="Navlink"
            style={{ fontFamily: "Bahnschrift Extrabold" }}
            to="/projects"
          >
            Projects
          </Link>
        </div>
        <br />
      </div>
      <br />
      <div className="Scrolldown">
        Scroll down to check out some of my <br /> past projects
      </div>
      <div className="Theprojects">
        <center>
          <br />
          <br />
          <h1 id="Myprojects">My Web Projects</h1>
          <br />
          <table className="Allprojects" cellSpacing="4" cellPadding="4">
            <tr>
              {rowA.map((project, index) => (
                <td key={index}>
                  <img
                    className="Projectlogos"
                    id={project.id}
                    onClick={() => openPreviewA(project)}
                    src={project.logo}
                  />
                </td>
              ))}
            </tr>
            <tr>
              {rowB.map((project, index) => (
                <td key={index}>
                  <img
                    className="Projectlogos"
                    id={project.id}
                    onClick={() => openPreviewB(project)}
                    src={project.logo}
                  />
                </td>
              ))}
            </tr>
          </table>
          <div className="Black">
            <i
              id="Backtwo"
              onClick={() => previewClose()}
              class="fa-solid fa-arrow-left"
            ></i>
          </div>
          {rowA.map((project, index) => (
            <div className="Preview" id={project.name} key={project.id}>
              <h1 className="Projectname">{project.name}</h1>
              <br />
              <p className="Projectdesc">{project.desc}</p>
              <video className="Projectvid" controls width="530" height="380">
                <source src={project.video} type="video/mp4" />
              </video>
              <a href={project.github} target="_blank">
                <button className="Projectgithub">
                  <i className="fa-brands fa-github"></i> Visit GitHub
                </button>
              </a>
            </div>
          ))}
          {rowB.map((project, index) => (
            <div className="Preview" id={project.name} key={project.id}>
              <h1 className="Projectname">{project.name}</h1>
              <br />
              <p className="Projectdesc">{project.desc}</p>
              <video className="Projectvid" controls width="530" height="380">
                <source src={project.video} type="video/mp4" />
              </video>
              <a href={project.github} target="_blank">
                <button className="Projectgithub">
                  <i className="fa-brands fa-github"></i> Visit GitHub
                </button>
              </a>
            </div>
          ))}
        </center>
      </div>
      <div className="Footerproject">
        <br />
        &nbsp;&nbsp;&nbsp; Copyright © {new Date().getFullYear()} \//\ Dev
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i id="Socialmedia" className="fa-regular fa-envelope"></i>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i id="Socialmedia" className="fa-brands fa-github"></i>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i id="Socialmedia" className="fa-brands fa-twitter"></i>
      </div>
    </div>
  );
}

//Exporting app function, which returns landing page
export function App() {
  return <Home />;
}

