import React from "react";

class CityLabel extends React.Component {
  render() {
    const {cityInput, handleChange, handleCityInput, name} = this.props
    return(
      <fieldset>
        <label>City: </label>
        <textarea value={cityInput} onChange={handleChange} name={name} type="text" maxLength="28" onBlur={handleCityInput}></textarea>
      </fieldset>
    )
  }
}

export default CityLabel