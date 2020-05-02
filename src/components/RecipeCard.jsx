import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

import "./RecipeCard.scss"

const RecipeCard = ({ id, slug, title, image, excerpt, categories }) => (
  <li key={id} className="recipecard-container">
    <Link to={slug} className="link">
      <Img fluid={image.childImageSharp.fluid} alt={title} className="image" />
      <div className="hoverContainer">
        <div className="hoverBody">
          <h2 className="title">{title}</h2>
          <p className="text">{excerpt}</p>
          {categories &&
            categories.map((category) => (
              <span key={category} className="category">
                {category}
              </span>
            ))}
        </div>
      </div>
    </Link>
  </li>
)

RecipeCard.propTypes = {
  id: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  image: PropTypes.object.isRequired,
  excerpt: PropTypes.string.isRequired,
}

RecipeCard.defaultProps = {
  categories: [],
}

export default RecipeCard
