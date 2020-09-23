import React from "react"
import Container from "./Skills.styles"
import Languages, { IStats } from "./Languages"

interface IProps {
  stats: IStats
}

const Skills: React.FC<IProps> = props => {
  return (
    <Container>
      <div className="container">
        <h2>Skills</h2>
        <div className="bar" />
        <p>
          Everyone just loves stats don't they. So here's some stats for you,
          straight from GitHub
        </p>
        <Languages stats={props.stats} />
        <p>
          And well you can't be a web developer without specializing in some
          frameworks and tools{" "}
        </p>
      </div>
    </Container>
  )
}

export default Skills
