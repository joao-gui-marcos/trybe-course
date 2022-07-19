import React from "react";
import Pokemon from './Pokemon.js'
import pokemons from "./data.js";

class Pokedex extends React.Component {
  render() {
    return (
      <div className="poke-container">
        {pokemons.map((elem, index) =><Pokemon key={index} name={elem.name} type={elem.type} averageWeight={elem.averageWeight} image={elem.image}/>)}
      </div>
    )
  }
}

export default Pokedex