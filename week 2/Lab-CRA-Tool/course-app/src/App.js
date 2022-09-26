import React from "react";
import Course from "./components/course";
import "./App.css";
import witCrest from "./wit_crest.png";

const App = () => {
  const modules = [
    {
      name: "Web App Development 2",
      noLectures: 1,
      noPracticals: 2,
    },
    {
      name: "Intro to C++",
      noLectures: 3,
      noPracticals: 4,
    },
    {
      name: "Game Development Practicum",
      noLectures: 5,
      noPracticals: 6,
    },
    {
      name: "Dev Ops",
      noLectures: 7,
      noPracticals: 8,
    },
    {
      name: "NoSQL Database",
      noLectures: 9,
      noPracticals: 10,
    },
    {
      name: "Professional Practice",
      noLectures: 11,
      noPracticals: 12,
    }
  ];

  const name = "Applied Computing";

  return (
    <>
      <header className="App-header">
        <img className="center" src={witCrest} alt="logo" />
      </header>

      <div className="course">
        <Course title={name} modules={modules} />
      </div>
    </>
  );
};

export default App;
