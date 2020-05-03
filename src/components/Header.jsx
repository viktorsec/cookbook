// eslint-disable jsx-a11y/mouse-events-have-key-events
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import useSound from "use-sound"

import drawerOpenSfx from "../sounds/drawer-open.mp3"
import drawerCloseSfx from "../sounds/drawer-close.mp3"
import "./Header.scss"

const Header = ({ siteTitle }) => {
  const [playOpen] = useSound(drawerOpenSfx, {
    volume: 0.08,
  })
  const [playClose] = useSound(drawerCloseSfx, {
    volume: 0.08,
  })

  return (
    <header className="header">
      <div className="container">
        <h1 className="h1">
          <span onMouseEnter={playOpen} onMouseLeave={playClose}>
            <Link to="/" className="link">
              {siteTitle}
            </Link>
          </span>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
