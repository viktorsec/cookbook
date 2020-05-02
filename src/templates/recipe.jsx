import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

import "./recipe.scss"

const Recipe = ({ data }) => {
  const recipe = data.markdownRemark
  const { title, categories } = recipe.frontmatter
  const { fluid: fluidImage } = recipe.frontmatter.image.childImageSharp

  return (
    <Layout>
      <SEO title={title} />
      <div className="recipe-page">
        <Img className="hero" fluid={fluidImage} alt={title} />
        <div className="content">
          <h2>{title}</h2>
          <ul className="badges">
            {categories &&
              categories.map((category) => (
                <li className="badge">{category}</li>
              ))}
          </ul>
          <div dangerouslySetInnerHTML={{ __html: recipe.html }} />
        </div>
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
