import React from "react"
import Container from "./Projects.styles"
import Project, { IProps as IProject } from "./Project"

interface IProps {
  projects: IProject[]
}

const Projects: React.FC<IProps> = props => {
  return (
    <Container>
      <div className="container">
        <h2>Projects</h2>
        <div className="bar" />
        <div className="projects">
          {props.projects.map((project, i) => (
            <Project key={"[PROJECT]-" + i} {...project} />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Projects
