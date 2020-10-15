import React, { Component } from "react";
import ResultItem from "../ResultItem/ResultItem";
import "./ResultList.css";

export default class ResultList extends Component {
  getCharacter = () => {
    console.log("from resultList", this.state);
    return this.props.characters.map((character) => {
      if (this.props.filterVal === "people") {
        return (
          <li key={character.created}>
            <h2>{character.name}</h2>
          </li>
        );
      } else if (this.props.filterVal === "species") {
        return (
          <li key={character.created}>
            <h2>{character.name}</h2>
            <p>{character.language}</p>
          </li>
        );
      } else if (this.props.filterVal === "films") {
        return (
          <li key={character.created}>
            <h2>{character.title}</h2>
            <p>{character.release_date}</p>
          </li>
        );
      } else if(this.props.filterVal === "starships"){
        return (
          <li key={character.created}>
            <h2>{character.name}</h2>
            <p>{character.starship_class}</p>
          </li>
        );
      } else if (this.props.filterVal === "vehicles"){
        return (
          <li key={character.created}>
            <h2>{character.name}</h2>
            <p>{character.manufacturer}</p>
          </li>
        );
      } else {
        if(this.props.filterVal === "planets"){
          return (
            <li key={character.created}>
              <h2>{character.name}</h2>
              <p>{character.population}</p>
            </li>
          );
          }
      }
    });
  };

  render() {
    return (
      <div className="character-div">
        <ul className="characterList">{this.getCharacter()}</ul>
      </div>
    );
  }
}
