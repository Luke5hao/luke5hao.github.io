"use strict";

const skillsList = [
  { name: "Python" },
  { name: "Java" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "React" },
  { name: "C" },
  { name: "SQL" },
  { name: "OCaml" },
  { name: "pandas" },
  { name: "NumPy" },
  { name: "Docker" },
  { name: "Github" },
  { name: "VS Code" },
  { name: "Jupyter" },
  { name: "MS Excel" },
];

// FROM RESUME
// Programming Languages: Python, Java, C, SQL, HTML, CSS, JavaScript, OCaml
// Frameworks & Tools: pandas, NumPy, PyTorch, MySQL, React, Docker, Gym, Github, Visual Studio Code, Jupyter
// Other: Microsoft Office (Excel, Powerpoint, Word), Google Workspace, Tableau, Figma, Canva

const skillsContainer = document.getElementById("skills-container");
skillsList.forEach((skill) => {
  // Create the skill element and append to container
  const element = document.createElement("div");
  element.textContent = skill.name; 

  skillsContainer.appendChild(element);
});
