import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wordpress from "../../Assets/Projects/wordPress.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/forecast.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import urbanmati from "../../Assets/Projects/urban.png";
import ITS from "../../Assets/Projects/ITC.png"

import SDGdevelopment from "../../Assets/Projects/sustainbleD.png";


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

              imgPath={SDGdevelopment}
              isBlog={false}
              title="Sustainable development maps (React)"
              description="The platform is designed to make SDG-related data accessible to a wide audience, including those without research experience. It features a visual map offering country-specific data at a click, and a research paper search engine tailored for students, streamlining access to academic resources and other useful tools.
              "
              ghLink="https://github.com/rajeshofficial/InteractiveMaps.git"
              demoLink="https://sustainabledevelopmentmap.netlify.app"

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ITS}
              isBlog={false}
              title="Indian Tech Solution  "
              description="Indian Tech Solutions has completely redesigned its website using cutting-edge technologies like React and Angular. Partnering with a leading web development agency, they have enhanced their design, improved functionality, and introduced mobile development capabilities to deliver a seamless user experience "
              ghLink="https://github.com/rajeshofficial/indiantechsolutions.git"
              demoLink="https://indiantechsolutions.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="RajStore (React) "
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
              title="CarRyRaj ((React))"
              description="CarByRaj is the go-to shopping page for luxury car enthusiasts. Discover a curated selection of high-end vehicles, choose colors, and explore various ranges from top companies. The seamless experience is powered by HTML, JavaScript, and jQuery."
              ghLink="https://github.com/rajeshofficial/RajCarShop"
              demoLink="https://rajcarfolio.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
  imgPath={urbanmati}
  isBlog={false}
  title="UrbnMati (Shopify)"
  description="Freelance job I got on Fiverr: Urbanmati is a Shopify-based e-commerce platform offering a curated selection of trendy, high-quality fashion and lifestyle products. The site features a sleek, modern design with intuitive navigation, providing a seamless shopping experience."
  demoLink="https://urbanmati.com" 
/>
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="JemCarpet(Shopify)"
              description="Contract Job  with Jem Carpets' Shopify page by seamlessly integrating APIs, customizing the Liquor Shop theme, incorporating additional apps, and implementing targeted SEO strategies, resulting in an impressive 40% surge in website traffic."
              demoLink="https://www.jemcarpets.co.uk/"              
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
  imgPath={wordpress}
  isWordpress={false}
  title="BrasHealthcare ( Wordpress )"
  description="I completed a freelance project for a pharmaceutical manufacturing company, delivering a fully responsive website using custom CSS, Elementor, and various plugins. The site is optimized for all devices, with content blocks tailored to display based on device and viewport, ensuring a seamless user experience"
  demoLink="https://brashealthcare.com"
/>

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="WeatherApp (React) "
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
