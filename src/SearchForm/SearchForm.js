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

  /*
    handleDataSubmit = (event) => {
        event.preventDefault();
        console.log('submit worked');
        const form = new FormData(event.currentTarget);
        const data = {
            searchTerm: form.get("searchTerm"),
            printType: form.get("printType"),
            searchFilter: form.get("searchFilter")
        }
        this.props.fetchBook(data);
    }
    */

  render() {
    return (
      <div>
        <form onSubmit={this.handleDataSubmit}>
          <input type="text" name="search"></input>
          <button type="submit">Search!</button>
        </form>
      </div>
    );
  }
}
