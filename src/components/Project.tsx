import React from "react"
import Container from "./Project.styles"
import Languages, { IStats } from "./Languages"
import ClampLines from "react-clamp-lines"

export interface IProps {
  title: string
  description: string
  stars: number
  forks: number
  link: string
  stats: IStats
}

const Project: React.FC<IProps> = props => {
  return (
    <Container>
      <h3
        className="project-title"
        onClick={() => window.open(props.link, "_target")}>
        {props.title}
      </h3>
      <div className="info">
        <p>{props.stars} Stars</p>
        <p>{props.forks} Forks</p>
      </div>
      <ClampLines
        text={props.description}
        id={props.title}
        lines={3}
        ellipsis="..."
        buttons={false}
        className="desc"
        innerElement="p"
      />
      <Languages card={true} stats={props.stats} />
    </Container>
  )
}

export default Project
