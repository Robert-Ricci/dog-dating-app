import React, { Component } from "react";
import { connect } from 'react-redux'

import { addPet } from '../actions/pets'

class PetForm extends Component {

  state = {
    name: "",
    age: "",
    location: "",
    biography: "",
    breed: "",
    likes: "",
    dislikes: "",
    temperament: ""
  }

  handleOnSubmit = event => {
    event.preventDefault()

    const pet = {
      name: this.state.name,
      age: this.state.age,
      location: this.state.location,
      biography: this.state.biography,
      breed: this.state.breed,
      likes: this.state.likes,
      dislikes: this.state.dislikes,
      temperament: this.state.temperament
    }

    this.props.addPet(pet)

  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {

    return (
      <div>
          <form onSubmit={event => this.handleOnSubmit(event)}>
              <h3>Name: </h3>
              <input 
                type="text"
                name="name"
                onChange={this.handleOnChange}
              />
              <h3>Age: </h3>
              <input 
                type="text"
                name="age"
                onChange={this.handleOnChange}
              />
              <h3>Location: </h3>
              <input 
                type="text"
                name="location"
                onChange={this.handleOnChange}
              />
              <h3>Biography: </h3>
              <textarea 
                name="biography"
                onChange={this.handleOnChange}
              />
              <h3>Breed: </h3>
              <input 
                type="text"
                name="breed"
                onChange={this.handleOnChange}
              />
              <h3>Likes: </h3>
              <textarea 
                name="likes"
                onChange={this.handleOnChange}
              />
              <h3>Dislikes: </h3>
              <textarea 
                name="dislikes"
                onChange={this.handleOnChange}
              />
              <h3>Temperament: </h3>
              <input 
                type="text"
                name="temperament"
                onChange={this.handleOnChange}
              />
              <input type="submit"/>
          </form>
      </div>
    );
  }
};

export default connect(null, { addPet })(PetForm);