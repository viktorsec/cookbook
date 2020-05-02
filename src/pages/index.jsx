import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/Layout"
import RecipeCardGroup from "../components/RecipeCardGroup"
import RecipeCard from "../components/RecipeCard"
import SEO from "../components/Seo"

const Index = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <RecipeCardGroup>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <RecipeCard
            id={node.id}
            key={node.id}
            slug={node.fields.slug}
            title={node.frontmatter.title}
            categories={node.frontmatter.categories}
            image={node.frontmatter.image}
            excerpt={node.excerpt}
          />
        ))}
      </RecipeCardGroup>
    </Layout>
  )
}

Index.defaultProps = {}

Index.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
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
            categories
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
