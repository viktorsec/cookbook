import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

export default ({ data }) => {
  const recipe = data.markdownRemark

  return (
    <Layout>
      <div>
        <Img
          fluid={recipe.frontmatter.image.childImageSharp.fluid}
          alt={recipe.frontmatter.title}
        />
        <h1>{recipe.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: recipe.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`