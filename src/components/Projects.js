import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import pro1 from "../assets/img/wander.png";
import pro2 from "../assets/img/project2.png";
import pro3 from "../assets/img/project3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "WanderLust",
      description: "Travel Website",
      imgUrl: pro1,
    },
    {
      title: "SecureVisage",
      description: "Finance and Transactions",
      imgUrl: pro2,
    },
    {
      title: "Gaming Website",
      description: "Design & Development",
      imgUrl: pro3,
    },
  ];
  //{
  //  title: "Business Startup",
  //  description: "Design & Development",
  //  imgUrl: projImg1,
  //},
  //{
  //  title: "Business Startup",
  //  description: "Design & Development",
  //  imgUrl: projImg2,
  //},
  //{
  //  title: "Business Startup",
  //  description: "Design & Development",
  //  imgUrl: projImg3,
  //},

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Created a Travel Website using MERN Stack, Gaming Webiste
                    and another one which caters to finances
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                imgClass={
                                  index === 0 || 1 ? "first-project-img" : ""
                                }
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p></p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p> </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
