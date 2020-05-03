import React, { Component } from "react"
import PropTypes from "prop-types"
import FilterButton from "./FilterButton"

import "./RecipeCardGroup.scss"

const FILTER = {
  ALL: "all",
  KETO: "keto",
  VEGE: "vege",
}

class RecipeCardGroup extends Component {
  constructor() {
    super()
    this.state = { filter: FILTER.ALL }
  }

  getFilteredCards = () => {
    const { children } = this.props
    const { filter } = this.state

    if (filter === FILTER.ALL) {
      return children
    }

    const cards = children.filter((child) => {
      const { categories } = child.props

      return categories && categories.includes(filter)
    })

    return cards
  }

  handleFilterClick = (filter) => {
    this.setState({ filter })
  }

  renderFilterButton = (item) => {
    const { filter } = this.state
    const isPressed = item === filter

    return (
      <FilterButton
        item={item}
        key={item}
        isPressed={isPressed}
        onClick={this.handleFilterClick}
      />
    )
  }

  renderFilterControl = () => {
    return (
      <div className="filter-control">
        {Object.keys(FILTER).map((item) =>
          this.renderFilterButton(FILTER[item]),
        )}
      </div>
    )
  }

  render() {
    const cards = this.getFilteredCards()

    return (
      <>
        {this.renderFilterControl()}
        <ul className="recipe-card-group-container">{cards}</ul>
      </>
    )
  }
}

RecipeCardGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default RecipeCardGroup
