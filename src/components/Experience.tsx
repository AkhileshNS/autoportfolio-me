import React from "react"
import Container from "./Experience.styles"
import Job, { IProps as IJob } from "./Job"

interface IProps {
  jobs: IJob[]
}

const Experience: React.FC<IProps> = props => {
  return (
    <Container>
      <div className="container">
        <h2>Experience</h2>
        <div className="bar" />
        {props.jobs.map((job, i) => (
          <Job key={"[JOB]-" + i} {...job} />
        ))}
      </div>
    </Container>
  )
}

export default Experience
