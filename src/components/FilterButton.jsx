import React from "react"
import cx from "classnames"
import PropTypes from "prop-types"
import useSound from "use-sound"

import clickSfx from "../sounds/click.mp3"
import "./RecipeCardGroup.scss"

function FilterButton({ item, isPressed, onClick }) {
  const [play] = useSound(clickSfx, { volume: 0.1 })
  const classNames = cx("badge", isPressed && "badge-active")

  return (
    <button
      type="button"
      className={classNames}
      onClick={() => {
        play()
        onClick(item)
      }}
    >
      {item}
    </button>
  )
}

FilterButton.propTypes = {
  item: PropTypes.string.isRequired,
  isPressed: PropTypes.bool,
  onClick: PropTypes.func,
}

FilterButton.defaultProps = {
  isPressed: false,
  onClick: () => null,
}

export default FilterButton
