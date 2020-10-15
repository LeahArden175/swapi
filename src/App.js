import React, { Component } from "react";
import SearchForm from "./SearchForm/SearchForm";
import ResultList from "./ResultList/ResultList";
import config from './config'
import "./App.css";

class App extends Component {

  state={
    search: " skywalker",
    characters: []
  }


  fetchCharacter =(data) =>{
    fetch(`${config.API_ENDPOINT}/people/?search=${this.state.search}`)
      .then(response => response.json())
      .then(jsonData => this.handleSearchReturn(jsonData.name))
    }

    handleSearchReturn = (characters) => {
      this.setState({
        characters: characters
      })
    }


  componentDidMount(){
    const data ={
      search: this.state.search
    }
    this.fetchCharacter(data)
  }

  render() {

    //const submitData = <SearchForm onSubmit={this.handleDataSubmit}/>

    return (
      <div className="app">
          <h1>Star Wars Search</h1>
        <SearchForm fetchCharacter={this.fetchCharacter}/>
        <ResultList characters={this.state.characters}/>
      </div>
    );
  }
}

export default App;
