import React from 'react'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: "",
      gender: "",
      age: "",
      destination: "",
      dietary: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false
      }
    }
  this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name, value, checked, type} = event.target
    type === "checkbox" ? 
      this.setState(prevState => {
        return {dietary: {
          ...prevState.dietary,
          [name] : checked} }}) 
    : this.setState({ [name]: value})
  }

  render(){
    return(
      <div>
      <form>
        <input 
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
          placeholder="First name"
        />
        <br />
        <input 
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
          placeholder="Last name"
        />
        <br />
        <input 
          type="text"
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
          placeholder="Age"
        />
        <br />
        <label>
        <input 
          type="radio"
          name="gender"
          value="male"
          checked={this.state.gender === "male"}
          onChange={this.handleChange}
        />Male
        </label>
        <br />
        <label>
        <input 
          type="radio"
          name="gender"
          value="female"
          checked={this.state.gender === "female"}
          onChange={this.handleChange}
        />Female
        </label>
        <br />
        <h4>Do you have any dietary restrictions?</h4>
        <label>
        <input 
          type="checkbox"
          name="isVegan"
          onChange={this.handleChange}
          checked={this.state.dietary.isVegan}
        />Vegan 
        </label>
        <br />
        <label>
        <input 
          type="checkbox"
          name="isKosher"
          onChange={this.handleChange}
          checked={this.state.dietary.isKosher}
        />Kosher
        </label>
        <br />
        <label>
        <input 
          type="checkbox"
          name="isLactoseFree"
          onChange={this.handleChange}
          checked={this.state.dietary.isLactoseFree}
        />Lactose free
        </label>
        <br />
        <select 
          name="destination" 
          value={this.state.destination} 
          onChange={this.handleChange}
        >

          <option name="">Please choose you destination</option>
          <option name="germany">Germany</option>
          <option name="spain">Spain</option>
          <option name="egypt">Egypt</option>
          <option name="sri lanka">Sri Lanka</option>
          <option name="cyprus">Cyprus</option>
        </select>
        <br />
        <button>Submit</button>
      </form>


      <h2>Entered this info:</h2>
      <h3>Your name: {this.state.firstName}</h3>
      <h3>Your surname: {this.state.lastName}</h3>
      <h3>Your age: {this.state.age}</h3>
      <h3>You are: {this.state.gender}</h3>
      <h3>Vegan: {this.state.dietary.isVegan ? "Yes" : "No"}</h3>
      <h3>Kosher: {this.state.dietary.isKosher ? "Yes" : "No"}</h3>
      <h3>Lactose free: {this.state.dietary.isLactoseFree ? "Yes" : "No"}</h3>
      <h3>You booked a flight to: {this.state.destination}</h3>





      </div>
    )
  }

}

export default App