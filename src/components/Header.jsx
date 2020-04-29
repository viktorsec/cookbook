import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "./Header.scss"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="container">
      <h1 className="h1">
        <Link to="/" className="link">
          <span role="img" aria-label="logo">
            🥦
          </span>
          {` ${siteTitle}`}
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
