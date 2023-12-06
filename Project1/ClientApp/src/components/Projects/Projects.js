// Projects.js
import React from "react";
import "./Projects.css"; // Assuming you have a CSS file for styles
//import ShahmirImage from "../../Assets/ShahmirWFCU.jfif";
import { Container, Col, Row } from "reactstrap";
import ProjectCard from "./ProjectCard/ProjectCard";
import projectsData from "../../Data/project.json";
import ImagesData from "../../Data/Images.json";

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
    const IMG_PATH = './Assets/Projects/'
    const projects = projectsData.projects;
    const images = ImagesData.images;
    console.log(projects);
    console.log(images);
    return (

    <Container>
        <h1>Projects</h1>
        {
                projects.map((project,index) => {
                    console.log(project);
                    let projectImages = images.filter(image =>image.projectId === project.id);
                    let cardImage = projectImages.find(image => image.name === `${project.componentName}CardImage`);
                    console.log(projectImages);
                    console.log(`${project.name}CardImage`);
                    console.log(cardImage);
                    return (
                        <div id={index} className="projects-container">
                        <Container>
                            <Row>
                            <Col className="col-6">
                                <h1>{project.name}</h1>
                                <p>{project.description}</p>
                            </Col>
                            <Col className="col-6">
                                <img
                                src={require(`${IMG_PATH}${cardImage.url}`)}
                                alt="Portfolio"
                                className="portfolio-image"
                                />
                            </Col>
                            </Row>
                        </Container>
                        </div>
                    );
                })
        }
        <ProjectCard></ProjectCard>
    </Container>
  );
}

export default Projects;
