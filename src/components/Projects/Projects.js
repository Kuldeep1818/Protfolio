import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Blockchain base bidding system"
              description="This is a online bidding platform based on blockchain through which buyer can easily participate in bidding and put their bid for a particular thing.This bidding System provides the security of blockchain which make it more trustable software."
              ghLink="https://github.com/Kuldeep1818/blockchain-based-BIDDINg-system"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="StudyNotion Edutech website"
              description="EduTech is your gateway to a world of online education. In this webbsite i use react for frontend and mongodb for backend .Here student instructor and admin have diffrent diffrent routes with which they render to diffrent diffrent pages ."
              ghLink="https://github.com/Kuldeep1818/studynotion-edutech"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Create your memory"
              description="In this project is based on the idea of Keeps notes of google.In this software people add the photo and and write some description according to the photo which make it more sensable and for frntend i used react js and for backend use express js and mongodb "
              ghLink="https://github.com/Kuldeep1818/create_your_memory"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Metadoge-unity marketing website(as a freelancer) "
              description="This a totally static website in which i use react for frontend .this is fully mobile responsive website which makes it more attractive for user.This a marketing website developed by me for a firm name Eherverse. "
              ghLink="https://github.com/Kuldeep1818/metadoge-presale-website"
              demoLink="https://metadogeunity-presale.netlify.app//"              
            />
          </Col> 

         
        </Row> 
      </Container>
    </Container>
  );
}

export default Projects;
