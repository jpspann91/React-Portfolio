import React from "react";
import './About.css'
import GitHubCalendar from "react-github-calendar";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#db0faf",
    grade4: "#050187",
    grade3: "#0f0ad1",
    grade2: "#3632e6",
    grade1: "#5c59eb",
    grade0: "#7a78f0",
  };
  return (
    <div className='row' style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="tomato">Code</strong>
      </h1>
      <GitHubCalendar
        username="jpspann91"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={15}
      />
      <p style={{ color: 'white', textAlign: "center" }}>
        I currently work full time, so I have not had much to develop on my personal github account. I hope to be able to free up some time in the future to allow me to do this.
      </p>
    </div>
    
  );
}

export default Github;