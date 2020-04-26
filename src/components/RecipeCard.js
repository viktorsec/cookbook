import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

import "./RecipeCard.scss"

const RecipeCard = ({ id, slug, title, image, excerpt }) => (
  <div key={id} class="recipecard-container">
    <Link
      to={slug}
      className="link"
    >
      <h3 class="title">
        {title}
      </h3>
      <Img
        fluid={image.childImageSharp.fluid}
        alt={title}
      />
      <p class="text">{excerpt}</p>
    </Link>
  </div>
)

RecipeCard.propTypes = {
  id: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  excerpt: PropTypes.string.isRequired,
}

RecipeCard.defaultProps = {
}

export default RecipeCard
