import React from "react"
import Container from "./Footer.styles"
import Social, { IProps as ISocial } from "./Social"

interface IProps {
  social: ISocial
  name: string
}

const Footer: React.FC<IProps> = props => {
  return (
    <Container>
      <div className="container">
        <Social {...props.social} />
        <p>
          Copyright {new Date().getFullYear()} | {props.name} | Built using
          Gatsby | Hosted on Netlify
        </p>
      </div>
    </Container>
  )
}

export default Footer
