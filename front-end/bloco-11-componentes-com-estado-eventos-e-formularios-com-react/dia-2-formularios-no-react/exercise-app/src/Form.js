import React from 'react'
import FileInput from './FileInput'

class Form extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      meuTexto: '',
      minhaIdade: 0,
      myCheckbox: false,
    }
  }
  handleChange({target}) {
    const {name} = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState(
      {
       [name]: value
      }
    )
  }
  render() {
    return(
      <div>
        <form>
            <fieldset>
              <textarea
                value={this.state.meuTexto}
                onChange={this.handleChange} 
                name="meuTexto"
              />
            </fieldset>
            <fieldset>
              <input 
                type="number" 
                name="minhaIdade" 
                value={this.state.minhaIdade} 
                onChange={this.handleChange} 
              />
            </fieldset>
            <fieldset>
            <input
              type="checkbox"
              name="myCheckbox"
              value={this.state.myCheckbox} 
              onChange={this.handleChange} 
            />
            </fieldset>
        </form>
        <fieldset>
          <FileInput />
        </fieldset>
      </div>
    )
  }
}

export default Form