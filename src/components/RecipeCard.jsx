import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

import "./RecipeCard.scss"

const RecipeCard = ({ id, slug, title, image, excerpt }) => (
  <li key={id} className="recipecard-container">
    <Link to={slug} className="link">
      <Img fluid={image.childImageSharp.fluid} alt={title} className="image" />
      <div className="hoverContainer">
        <div className="hoverBody">
          <h2 className="title">{title}</h2>
          <p className="text">{excerpt}</p>
        </div>
      </div>
    </Link>
  </li>
)

RecipeCard.propTypes = {
  id: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  excerpt: PropTypes.string.isRequired,
}

RecipeCard.defaultProps = {}

export default RecipeCard
