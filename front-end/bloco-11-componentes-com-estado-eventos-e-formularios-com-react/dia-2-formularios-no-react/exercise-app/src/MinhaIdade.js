import React from "react";

class MinhaIdade extends React.Component {
  render() {
    const { handleChange, minhaIdade} = this.props
    let error = undefined
    if (minhaIdade < 0) error ='Invalid age!'
    return(
      <fieldset>
        <input 
          type="number" 
          name="minhaIdade" 
          value={minhaIdade} 
          onChange={handleChange} 
        />
        <span>{error ? error : ''}</span>
      </fieldset>
    )
  }
}

export default MinhaIdade