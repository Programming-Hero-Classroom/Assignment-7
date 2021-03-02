import React from 'react';
import './Cart.css';
const Cart = (props) => {
    
    const cart= props.cart;
    const totalSalary = cart.reduce((sum,player) => (sum + player.salary),0);
    return (
        <div className="cart-container">
            <h1>Player Count : {cart.length}</h1>
            <p>Player Price: {(totalSalary)}</p>
            
        </div>
    );
};

export default Cart;