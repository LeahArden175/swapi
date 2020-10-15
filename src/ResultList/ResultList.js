import React, { Component } from "react";
import ResultItem from "../ResultItem/ResultItem";
import "./ResultList.css";

export default class ResultList extends Component {
  getCharacter = () => {
    return this.props.characters.map((character) => {
      return (
        <ResultItem
          key={character.created}
          name={character.name}
          birth_year={character.birth_year}
          height={character.height}
          mass={character.mass}
          eye_color={character.eye_color}
          hair_color={character.hair_color}
          homeworld={character.homeworld}
          skin_color={character.skin_color}
        />
      );
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
