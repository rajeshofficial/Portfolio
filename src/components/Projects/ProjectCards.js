import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ filter: "brightness(1.15)" }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        {/* GitHub button only appears if ghLink exists */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp; GitHub
          </Button>
        )}
        
        {/* Demo button only appears if demoLink exists */}
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}

        {/* WordPress Demo button only appears if wordpressLink exists */}
        {props.wordpressLink && (
          <Button
            variant="primary"
            href={props.wordpressLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; WordPress Demo
          </Button>
        )}

        {/* GetHub button only appears if getLink exists */}
        {props.getLink && (
          <Button
            variant="primary"
            href={props.getLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; GetHub
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
