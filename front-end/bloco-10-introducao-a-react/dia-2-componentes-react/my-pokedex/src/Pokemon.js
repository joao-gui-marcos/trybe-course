import React from "react";
import PropTypes from 'prop-types'
import pokemons from "./data.js";
import './App.css';

class Pokemon extends React.Component {
  render() {
    const {name, type, averageWeight, image} = this.props
    return (
      <div className="poke-card">
        <div className="poke-text">
          <p>{name}</p>
          <p>{type}</p>
          <p>Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <div className="poke-image">
          <img src={image} alt="pokemon pic" width="150"/>
        </div>
      </div>
    )
  }
}

export default Pokemon