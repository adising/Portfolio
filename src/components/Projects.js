// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';
// import { Link } from 'react-router-dom';

// export const Projects = () => {

//   const projects = [
//     {
//       title: "To-do list",
//       description: "A python and flask application",
//       imgUrl: projImg1,
//       githubLink: "https://github.com/adising/Todo"
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg2,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg3,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg1,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg2,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg3,
//     },
//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
//                 <h2>Projects</h2>
//                 <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                   <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
//                     <Tab.Pane eventKey="first">
//                       <Row>
//                         {
//                           projects.map((project, index) => {
//                             return (
//                               <ProjectCard
//                                 key={index}
//                                 {...project}
//                                 />
//                             )
//                           })
//                         }
//                       </Row>
//                     </Tab.Pane>
//                   </Tab.Content>
//                 </Tab.Container>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2}></img>
//     </section>
//   )
// }




// import React from 'react';

// const projectData = [
//   {
//     title: "Project 1",
//     image: 'projImg1',
//     link: 'https://github.com/adising/Todo',
//   },
//   {
//     title: "Project 2",
//     image: 'projImg2',
//     link: 'https://github.com/yourusername/project2',
//   },
//   {
//     title: "Project 3",
//     image: 'projImg3',
//     link: 'https://github.com/yourusername/project3',
//   },
//   // Add more project objects as needed
// ];

// const Project = ({ title, image, link }) => {
//   return (
//     <a href={link} target="_blank" rel="noopener noreferrer">
//       <div className="project-card">
//         <img src={image} alt={title} />
//         <div className="project-title">{title}</div>
//       </div>
//     </a>
//   );
// };

// const Projects = () => {
//   return (
//     <div className="projects-container">
//       {projectData.map((project, index) => (
//         <Project key={index} {...project} />
//       ))}
//     </div>
//   );
// };

// export default Projects;


import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import React from "react";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "To-do list",
      description: "A python and flask application",
      imgUrl: projImg1,
      projectLink: "https://github.com/adising/Todo"
    },
    {
      title: "Word Counter",
      description: "Design & Development",
      imgUrl: projImg2,
      projectLink: "https://github.com/adising/React-WordCounter",
    },
    {
      title: "Responsive Calculator",
      description: "Design & Development",
      imgUrl: projImg3,
      projectLink: "https://github.com/adising/React-Calculator",
    },
    {
      title: "Colour Picker",
      description: "Design & Development",
      imgUrl: projImg4,
      projectLink: "https://github.com/adising/React-ColorPicker",
    },
    
  ]
 

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <Col key={index} xs={12} sm={6} md={4} lg={3}>
                                <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                                  <div className="project-card">
                                    <img src={project.imgUrl} alt={project.title} />
                                    <p>{project.title}</p>
                                  </div>
                                </a>
                              </Col>
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Image" />
    </section>
  );
};
