import React from 'react'
import StarWarsLogo from '../IMG/StarWarsLogo.png'
import './Header.css';


export default function Header(){
    return (
        <header>
            <div className="logo">
                <img src={StarWarsLogo} alt="Star Wars"/>
                <h1>Search</h1>
            </div>
        </header>
    )
}