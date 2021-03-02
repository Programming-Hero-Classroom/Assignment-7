import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Player.css'
const Player = (props) => {
    const {image,name,username,salary,postion}= props.player;
    console.log(props);
    return (
        <div className="player-info">
            <img src={image} alt=""/>
            <h1>Player Name : {name}</h1>
            <h1>NikeName : {username}</h1>
            <h1>Player Position : {postion}</h1>
            <h1>Salary : {salary}</h1>
            <button className="add-button" onClick={() => props.handleAddPlayer(props.player)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            
        </div>
    );
};

export default Player;