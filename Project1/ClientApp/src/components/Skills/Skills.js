import React from "react";
import { Container, Col, Row } from "reactstrap";
import skillsData from "Data/skills.json";
import SkillForm from "./SkillForm/SkillForm";
import "./Skills.css";
function Skills() {
  console.log(skillsData);
  return (
    <div>
      <h1>Skills</h1>
      <SkillForm></SkillForm>
    </div>
  );
}

export default Skills;
