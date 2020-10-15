import React, { Component } from 'react'


export default class ResultItem extends Component {

    render(){
        return (
            <li>
                <h3>{this.props.name}</h3>
            </li>
        )
    }
}