// Projects.js
import React from "react";
import "./Projects.css"; // Assuming you have a CSS file for styles
//import ShahmirImage from "../../Assets/ShahmirWFCU.jfif";
import { Container, Col, Row } from "reactstrap";
import ProjectCard from "./ProjectCard/ProjectCard";
import projectsData from "Data/project.json";
import ImagesData from "Data/Images.json";
import { loadImage } from "Utility/imageLoader";

/*
          "id": 1,
          "companyId": "1",
          "name": "Admin Tracker",
          "componentName": "AdminTracker",
          "description": "Redesigning the corporate website for a modern look and feel.",
          "status": "Deployed",
          "startDate": "2023-01-15",
          "endDate": "2023-04-30",
          "skillsId": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          "YoutubeLink": "",
          "GithubLink": "",
          "ProjectLink": ""

                {
        "id": 1,
        "projectId": 1,
        "url": "Assets/AdminTracker/AdminTrackerProjectCard.png",
        "description": "Homepage of Admin Tracker"
      },

* */

function Projects() {
  console.log(loadImage);
  const IMG_PATH = "Assets/Projects/";
  const projects = projectsData.projects;
  const images = ImagesData.images;

  return (
    <Container>
      <h1>Projects</h1>
      {projects.map((project, index) => {
        let projectImages = images.filter(
          (image) => image.projectId === project.id
        );
        let cardImage = projectImages.find(
          (image) => image.name === `${project.componentName}CardImage`
        );
        return (
          <div id={index}>
            <ProjectCard
              url={cardImage?.url  loadImage(cardImage.url)}
              title={project.name}
              description={project.description}
              skills={project.skills}
            ></ProjectCard>
          </div>
        );
      })}
    </Container>
  );
}

export default Projects;
