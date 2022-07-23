import React from 'react'
import CityLabel from './CityLabel'

class Form extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleValidation = this.handleValidation.bind(this)
    this.autoFix = this.autoFix.bind(this)
    this.handleCityInput = this.handleCityInput.bind(this)
    this.state = {
      nameInput: '',
      emailInput: '',
      addressInput: '',
      cityInput: '',
      errors: {
        nameInput: true,
        emailInput: true,
        addressInput: true,
        cityInput: true,
      }
    }
  }
  handleValidation(value) {
    if (!value) return true
    return false
  }
  handleCityInput(event) {
    let { value } = event.target
    if (value[0] === '1') {
      this.setState({
        cityInput: '',
        errors: {
          ...this.state.errors,
          cityInput: true,
        }
      })
    }
  }
  autoFix(name, value) {
    if (name === 'nameInput') return value.toUpperCase()
    if (name === 'addressInput') return value.toLowerCase()
    return value
  }
  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: this.autoFix(name, value),
      errors: {
        ...this.state.errors,
        [name]: this.handleValidation(value),
      }
    })
  }
  render() {
    return(
      <fieldset>
        <label>Name: </label>
        <textarea value={this.state.nameInput} onChange={this.handleChange} name="nameInput" type="text" maxLength="40"></textarea>
        <label>Email: </label>
        <textarea value={this.state.emailInput} onChange={this.handleChange} name="emailInput" type="text" maxLength="50"></textarea>
        <label>Address: </label>
        <textarea value={this.state.addressInput} onChange={this.handleChange} name="addressInput" type="text" maxLength="200"></textarea>
        <CityLabel cityInput={this.state.cityInput} handleChange={this.handleChange} handleCityInput={this.handleCityInput} name="cityInput"/>
      </fieldset>
    )
  }
}

export default Form