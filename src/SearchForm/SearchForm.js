import React, { Component } from "react";
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
      <div>
        <form onSubmit={this.handleDataSubmit}>
          <input type="text" name="search"></input>
          <select onChange={this.props.handleFilterChange}>
              <option id="people/?search">Characters</option>
              <option id="spaceships/?search">Starships</option>
              <option id="species/?search">Species</option>
              <option id="planets/?search">Planets</option>
              <option id="vehicles/?search">Vehicles</option>
              <option id="films/?search">Films</option>
          </select>
          <button type="submit">Search!</button>
        </form>
      </div>
    );
  }
}
