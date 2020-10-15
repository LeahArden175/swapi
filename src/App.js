import React, { Component } from "react";
import SearchForm from "./SearchForm/SearchForm";
import ResultList from "./ResultList/ResultList";
import config from "./config";
import Header from './Header/Header'
import "./App.css";

class App extends Component {
  state = {
    search: "skywalker",
    characters: [],
    filterVal: "null",
  };

  fetchCharacter = (data) => {
    const { search } = data;
    //const filter = (searchFilter !== " ") ? `${searchFilter}` : '';
    fetch(`${config.API_ENDPOINT}/people/?search=${search}`)
      .then((response) => response.json())
      .then((jsonData) => this.handleSearchReturn(jsonData.results))
      .catch((error) => console.log(`Error: ${error.message}`));
  };

  handleSearchReturn = (characters) => {
    this.setState({
      characters: characters,
    });
  };
  /*
    handleFilterReturn = (filterVal) => {
      this.setState({
        filterVal : filterVal
      })
    }
    */

  handleFilterChange = (event) => {
    const option = event.target.value;
    //console.log(option);
    this.setState({
      filterVal: option,
    });
    console.log(this.state.filterVal);
  };

  componentDidMount() {
    const data = {
      search: this.state.search,
      filterVal: " ",
    };
    this.fetchCharacter(data);
  }

  render() {
    //const submitData = <SearchForm onSubmit={this.handleDataSubmit}/>

    return (
      <div className="app">
        <Header />
        <SearchForm
          fetchCharacter={this.fetchCharacter}
          handleFilterChange={(event) => this.handleFilterChange(event)}
        />
        <ResultList characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
