import React from "react";

class MeuTexto extends React.Component {
  render() {
    const { meuTexto, handleChange } = this.props
    let error = undefined
    if (meuTexto.length > 50) error = "Text too long!"
    return(
      <fieldset>
        <textarea
          value={meuTexto}
          onChange={handleChange} 
          name="meuTexto"
        />
        <span>{error ? error : ''}</span>
      </fieldset>
    )
  }
}

export default MeuTexto