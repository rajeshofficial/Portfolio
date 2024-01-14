import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rajesh Singh  </span>
            from <span className="purple"> Glasgow , Scotland , UK</span>
            <br />
            My last experice was a contact With JEM Carpets as a frontend web developer .
            <br />
            I have completed Masters in Advance Software Engineering . From University of Strathclyde 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Make Handmade Gifts 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "  Blending Creativity with Technology "{" "}
          </p>
          <footer className="blockquote-footer">Rajesh Singh </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
