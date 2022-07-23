import React from 'react'
import FileInput from './FileInput'
import MeuTexto from './MeuTexto'
import MinhaIdade from './MinhaIdade'

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
            <MeuTexto handleChange={this.handleChange} meuTexto={this.state.meuTexto} />
            <MinhaIdade handleChange={this.handleChange} minhaIdade={this.state.minhaIdade}/>
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