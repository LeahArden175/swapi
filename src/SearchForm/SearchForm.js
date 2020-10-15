import React, { Component } from "react";
import './SearchForm.css'
//import config from '../config';

export default class SearchForm extends Component {
  handleDataSubmit = (event) => {
    event.preventDefault();
    console.log("button worked");
    const form = new FormData(event.currentTarget);
    const data = {
      search: form.get("search"),
      filterVal: form.get("filterValue")
    };
    console.log("searchForm", data)
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
          <select 
            name="filterValue" 
            id="filterValue" 
            defaultValue="people"
            onChange={this.props.handleFilterChange}
          >
              <option value="people">Characters</option>
              <option value="starships">Starships</option>
              <option value="species">Species</option>
              <option value="planets">Planets</option>
              <option value="vehicles">Vehicles</option>
              <option value="films">Films</option>
          </select>
          <button type="submit">Search!</button>
        </form>
      </div>
    );
  }
}
