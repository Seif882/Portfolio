import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import CV from "./assets/CV.pdf";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

function App() {
  let [mood, setMood] = useState("dark");
  let [info, setInfo] = useState("hidden");
  let [projects, setProjects] = useState("hidden");

  function showProjects() {
    setInfo("hidden");
    setProjects("block");
  }

  function showInfo() {
    setInfo("block");
    setProjects("hidden");
  }

  return (
    <>
      <div
        className={
          mood === "dark"
            ? `w-full h-screen flex justify-center p-5 relative bg-gray-500 text-gray-200`
            : `w-full h-screen flex justify-center p-5 relative bg-gray-100 text-gray-700`
        }
      >
        <div className={`relative w-full h-full border-2`}>
          <button
            type="button"
            onClick={() => {
              mood === "dark" ? setMood("light") : setMood("dark");
            }}
            className={
              mood === "dark"
                ? `cursor-pointer fixed top-[5%] right-[5%] focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-black bg-gray-300 hover:bg-gray-200 focus:ring-gray-200 border-gray-200 `
                : `cursor-pointer fixed top-[5%] right-[5%] text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 `
            }
          >
            {mood === "dark" ? "Light" : "Dark"}
          </button>

          <div className={`fixed top-[10%] left-[5%]`}>
            <p className="text-4xl font-extrabold">Seif E. Ahmed</p>
            <p className="text-2xl font-bold">Front-End Developer</p>

            <ul className="mt-16 text-xl">
              <li className={`cursor-pointer w-fit`} onClick={showProjects}>
                Projects
              </li>

              <li className={`cursor-pointer w-fit mt-2`} onClick={showInfo}>
                Info
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div
            className={`fixed bottom-[15%] right-[5%] w-1/6 text-xl ${projects}`}
          >
            <p>Native JS Projects:</p>
            <ul>
              <li className="mb-2">
                <a
                  target="_blank"
                  className="hover:underline text-black "
                  href="https://seif882.github.io/Yummy/"
                >
                  Yummy (A Cooking Site)
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  className="hover:underline text-black"
                  href="https://seif882.github.io/Games-Review/"
                >
                  Games Review Site
                </a>
              </li>
            </ul>

            <p className="mt-5">React.js Projects:</p>

            <ul>
              <li>
                <a
                  target="_blank"
                  className="hover:underline text-black"
                  href="https://seif882.github.io/Ezzsensors/"
                >
                  A Site Made For A Mater's Student
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div
            className={`fixed bottom-[15%] right-[5%] w-1/6 text-xl ${info}`}
          >
            <p>
              Born in 2000 in Alexandria, Egypt I'm a junior Front-End Developer
              with React who worked on a few personal projects to sharpen my
              skills and be ready for the next step
            </p>
          </div>
          {/* Contact */}
          <div className={`fixed bottom-[15%] left-[5%] flex gap-2`}>
            {/* Whatsapp */}
            <a href="https://wa.me/+201220398033" target="_blank">
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="2xl"
                className="cursor-pointer"
              />
            </a>

            {/* Github */}
            <a
              href="https://github.com/Seif882?tab=repositories"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2xl"
                className="cursor-pointer"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/seif-elshrkawe-656a431b7"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2xl"
                className="cursor-pointer"
              />
            </a>

            {/* Download C.V. */}
            <a href={CV} download="MyCV" target="_blank">
              <FontAwesomeIcon icon={faFileArrowDown} size="2xl" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
