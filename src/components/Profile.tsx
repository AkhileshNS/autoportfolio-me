import React from "react"
import Container from "./Profile.styles"
import { useScrollSection } from "react-scroll-section"

interface IProps {
  name: string
  position: string
  image: string
  location: string
}

const Profile: React.FC<IProps> = props => {
  const { onClick } = useScrollSection("projects")

  return (
    <Container>
      <div className="container">
        <img src={props.image} alt="Profile Pic" className="avatar" />
        <h1>Hi, I'm {props.name}</h1>
        <h3>{props.position}</h3>
        <h3>from {props.location}</h3>
        <button onClick={onClick}>Portfolio</button>
      </div>
    </Container>
  )
}

export default Profile
