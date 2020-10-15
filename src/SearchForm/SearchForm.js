import React, { Component } from "react";
import './SearchForm.css'
//import config from '../config';

export default class SearchForm extends Component {
  handleDataSubmit = (event) => {
    event.preventDefault();
    console.log("button worked");
    const searchData = new FormData(event.currentTarget);
    const data = {
      search: searchData.get("search"),
    };
    console.log(data)
    this.props.fetchCharacter(data);
  };



  render() {
    return (
      <div className="search-div">
        <form onSubmit={this.handleDataSubmit} className="form">
          <input 
            className="input" 
            placeholder="Search here!"
            type="text" 
            name="search"
            id="search"
            required
            />
          <select onChange={this.props.handleFilterChange}>
              <option id="people">Characters</option>
              <option id="spaceships">Starships</option>
              <option id="species">Species</option>
              <option id="planets">Planets</option>
              <option id="vehicles">Vehicles</option>
              <option id="films">Films</option>
          </select>
          <button type="submit">Search!</button>
        </form>
      </div>
    );
  }
}
