// Projects.js
import React from "react";
import "./Projects.css"; // Assuming you have a CSS file for styles
//import ShahmirImage from "../../Assets/ShahmirWFCU.jfif";
import { Container, Col, Row } from "reactstrap";
import ProjectCard from "./ProjectCard/ProjectCard";
function Projects() {
  return (
    <Container>
      <h1>Projects</h1>
      <ProjectCard></ProjectCard>
    </Container>
  );
}

export default Projects;
