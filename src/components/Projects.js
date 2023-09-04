import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from '../assets/img/project-img4.png';
import projImg5 from '../assets/img/Captura de tela 2023-08-04 203919.png';
import projImg6 from '../assets/img/project_hero.png';
import projImg7 from '../assets/img/project_amazon_c2.png';
import projImg8 from '../assets/img/Intersept.png';
import projImg9 from '../assets/img/pokedex.png';

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const urlInstagram = "https://www.instagram.com/httpsluucas/";

  const projects = [

    {
      title: "Tasks",
      description: "This project to render just tasks for users. You can to change, delete and to add. ",
      imgUrl: projImg4,
      urls: [
        "https://notes-seven-omega.vercel.app/"
      ]
    },

    {
      title: "Tasks",
      description: "Made by me. This project render a form to clients in ReactDOM. Soon after capturaing the data and sends an email to the company containing all the informations",
      imgUrl: projImg8,
      urls: [
        "https://interseptform.vercel.app/"
      ]
    },

    {
      title: "Tasks",
      description: "This project to render a Pokedex-API creating in Angular.",
      imgUrl: projImg9,
      urls: [
        "https://pokedex-angular-phi-two.vercel.app/"
      ]
    },








    {
      title: "Pomodoro",
      description: "This project to render Pomodoro method. ",
      imgUrl: projImg5,
      urls: [
        "https://pomodoro-eight-delta.vercel.app/"
      ]
    },
    {
      title: "Pomodoro Amazon C2",
      description: "This project to render Pomodoro method on Amazon C2. ",
      imgUrl: projImg7,
      urls: [
        "http://54.152.117.167/"
      ]
    },
    {
      title: "Events API",
      description: "IN PROGRESS...",
      imgUrl: projImg6,
      urls: [
        "https://hero-tickets.vercel.app/"
      ]
    },
    {
      title: "Barber Shop",
      description: "This project consists in to render a site linkavel for sociais midias from barbar shop. ",
      imgUrl: projImg1,
      urls: [
        "https://felipao-barbearia.vercel.app/"
      ]
    },
    {
      title: "Pokemon",
      description: "This was my first project utilizing a serverless provider. In future, i pretend to change this aplication for other API. ",
      imgUrl: projImg3,
      urls: [
        "https://project-pokemon-bay.vercel.app/"
      ]
    },
   

    
    
    {
      title: "Scheduling Appointments",
      description: "IN PROGRESS...   This project consists in render to schedule booking for a beauty salon. Were using dataBase from prisma and mongodbServer. ",
      imgUrl: projImg2,
      urls: [
        "https://hero-node.vercel.app/"
      ]
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Some small projects made by me...</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {/* <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item> */}
                   
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  )
}
