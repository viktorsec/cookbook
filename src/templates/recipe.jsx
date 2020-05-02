import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import Layout from "../components/Layout"

import "./recipe.scss"

const Recipe = ({ data }) => {
  const recipe = data.markdownRemark
  const { title, categories } = recipe.frontmatter
  const { fluid: fluidImage } = recipe.frontmatter.image.childImageSharp

  return (
    <Layout>
      <div className="recipe-page">
        <Img className="hero" fluid={fluidImage} alt={title} />
        <h1>{title}</h1>
        {categories && categories.map((category) => <p>{category}</p>)}
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
        categories
      }
    }
  }
`
