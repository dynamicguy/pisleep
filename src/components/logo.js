import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 55) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  `)

  return <Img fixed={data.file.childImageSharp.fixed} alt="logo"/>
}

export default Logo
