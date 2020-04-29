import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/Layout"
import RecipeCard from "../components/RecipeCard"
import SEO from "../components/Seo"

import "./index.scss"

const Index = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <ul className="index-container">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <RecipeCard
            id={node.id}
            slug={node.fields.slug}
            title={node.frontmatter.title}
            image={node.frontmatter.image}
            excerpt={node.excerpt}
          />
        ))}
      </ul>
    </Layout>
  )
}

Index.defaultProps = {}

Index.propTypes = {
  data: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default Index

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
