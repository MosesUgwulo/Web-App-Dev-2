import React from "react";
import Course from "./components/courseMUI";
import witCrest from "./wit_crest.png";
import Box from "@mui/material/box"

const styles = {
    appHeader: {
        backgroundColor: "yellow",
        height: "200px",
        padding: "20px",
        color: "white",
    },
    course: {
        padding: "10px",
    },
};

const App = () => {
    const modules = [
      {
        name: "Web Dev",
        noLectures: 1,
        noPracticals: 2,
      },
      {
        name: "Programming",
        noLectures: 2,
        noPracticals: 3,
      },
      {
        name: "Database Systems",
        noLectures: 2,
        noPracticals: 2,
      },
      {
        name: "DevOps",
        noLectures: 2,
        noPracticals: 2,
      },
      {
        name: "Enterprise Web Dev",
        noLectures: 2,
        noPracticals: 3,
      },
    ];
  
    const name = "HDip Computer Systems";
  
    return (
      <>
        <header style={styles.appHeader}>
          <img src={witCrest} alt="logo" />
        </header>
        <Box sx={styles.course}>
          <Course title={name} modules={modules} />
        </Box>
      </>
    );
  };
  export default App;