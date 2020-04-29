import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import Layout from "../components/Layout"

const Recipe = ({ data }) => {
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

Recipe.propTypes = {
  data: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default Recipe

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
