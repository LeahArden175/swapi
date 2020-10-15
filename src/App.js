import React, { Component } from "react";
import SearchForm from "./SearchForm/SearchForm";
import ResultList from "./ResultList/ResultList";
import config from "./config";
import Header from './Header/Header'
import "./App.css";

class App extends Component {


  state = {
    search: " ",
    characters: [],
    filterVal: "people",

  };

  fetchCharacter = (data) => {
    const { search, filterVal } = data;
    //const filter = (filterVal !== " ") ? `${filterVal}` : '';
    fetch(`${config.API_ENDPOINT}/${filterVal}/?search=${search}`)
      .then((response) => response.json())
      .then((jsonData) => this.handleSearchReturn(jsonData.results))
      .catch((error) => console.log(`Error: ${error.message}`));
  };

  handleSearchReturn = (characters) => {
    console.log("returned data", characters)
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
    const option = event.currentTarget.value;
    //console.log("from before", option);
    this.setState({
      filterVal: option,
    }, () => {console.log("inside curly", this.state.filterVal)});
    //console.log("from after", this.state.filterVal);
  };

  componentDidMount() {
    console.log("inside component did mount", this.state)   
    /*const data = {
      search: this.state.search,
      filterVal: " ",
    };
    */

    //this.fetchCharacter(data);
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
        <ResultList 
          characters={this.state.characters} 
          filterVal={this.state.filterVal}
          />
      </div>
    );
  }
}

export default App;
