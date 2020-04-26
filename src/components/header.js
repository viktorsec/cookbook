import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "./Header.scss"

const Header = ({ siteTitle }) => (
  <header class="header">
    <div class="container">
      <h1 class="h1">
        <Link to="/" className="link">
          🥦 {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
