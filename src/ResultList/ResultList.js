import React, { Component } from 'react'
import ResultItem from '../ResultItem/ResultItem';
import './ResultList.css'

export default class ResultList extends Component {

  getCharacter =() => {
    return this.props.characters.map((character ) => {
      return(
        <ResultItem 
          name={character.name}
          height={character.height}
        />
      )
    })
  }
  
  render() {
    return (
      <ul>
        {this.getCharacter()}
      </ul>
    );
  }
}