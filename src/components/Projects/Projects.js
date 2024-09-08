import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wordpress from "../../Assets/Projects/wordPress.png";
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
              title="RajStore"
              description="The shopping page frontend for buying various products. It's fully responsive, allowing easy navigation. Add products to your cart, explore more items, and use a simple navigation bar. Built with HTML, JavaScript, React, JSX, and CSS.
              "
              ghLink="https://github.com/rajeshofficial/RajStore"
              demoLink="https://rajeshstore.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="CarRyRaj"
              description="CarByRaj is the go-to shopping page for luxury car enthusiasts. Discover a curated selection of high-end vehicles, choose colors, and explore various ranges from top companies. The seamless experience is powered by HTML, JavaScript, and jQuery."
              ghLink="https://github.com/rajeshofficial/RajCarShop"
              demoLink="https://rajcarfolio.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="JemCarpet"
              description="Contract Job  with Jem Carpets' Shopify page by seamlessly integrating APIs, customizing the Liquor Shop theme, incorporating additional apps, and implementing targeted SEO strategies, resulting in an impressive 40% surge in website traffic."
              demoLink="https://www.jemcarpets.co.uk/"              
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
  imgPath={wordpress}
  isWordpress={false}
  title="WordPress"
  description="I'm currently engaged in freelance work for a client whom I connected with via Fiverr. In order to ensure the fulfillment of the client's expectations, I've employed a combination of custom CSS, Elementor, and several other plugins. The website I'm developing is designed to be fully responsive across all devices. Moreover, specific content blocks are strategically set to be visible based on the device and viewport, enhancing the user experience across various platforms."
  wordpressLink="https://brashealthcare.com"
/>

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="WeatherApp"
              description=" 
              I designed a streamlined weather app using Weather API integration ( open weather Free Api )and React JS, Html ,JSx  and CSS . This application provides real-time weather updates in a user-friendly interface, ensuring a seamless experience. The integration of Weather API with React JS enhances functionality, making it a dynamic and interactive tool for users seeking accurate and accessible weather information.  " 
              ghLink="https://github.com/rajeshofficial/weatherAPi "
              demoLink="https://weatherinforbycity.netlify.app/"
         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isCode={false}
              isLink={false}
              title="blog"
              description=" Unveiling a versatile blog platform, meticulously designed for daily expressions. This user-friendly space encourages writers to effortlessly compose and share thoughts, experiences, and insights. The minimalist design ensures a focused writing environment, promoting consistent engagement. With intuitive features and a sleek aesthetic, the blog page offers a dynamic outlet for daily reflections and meaningful connections between authors and readers"
              getLink="https://github.com/rajeshofficial"
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
