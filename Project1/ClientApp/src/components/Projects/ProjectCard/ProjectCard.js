import React from "react";
import "./ProjectCard.css"; // Assuming you have a CSS file for styles
//import ShahmirImage from "../../Assets/ShahmirWFCU.jfif";
import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  CardLink,
  ListGroupItem,
} from "reactstrap";

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

          

* */
function ProjectCard({ url, title, description, skills }) {
  return (
    <Card
      className="portfolio-image"
      style={{
        width: "18rem",
      }}
    >
      <img alt="Card" src={url} />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <ListGroup flush>
        <ListGroupItem>An item</ListGroupItem>
        <ListGroupItem>A second item</ListGroupItem>
        <ListGroupItem>And a third item</ListGroupItem>
      </ListGroup>
      <CardBody>
        <CardLink href="#">Card Link</CardLink>
        <CardLink href="#">Another Card Link</CardLink>
      </CardBody>
    </Card>
  );
}
ProjectCard.prototype = {
  url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  skills: PropTypes.array,
};

ProjectCard.defaultProps = {
  url: "https://picsum.photos/300/200",
  title: "No Name",
  description: "No Description",
  skills: [],
};

export default ProjectCard;
