import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import fakeData from './fakeData/Player.json'
import Player from './components/Player';
import { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';

function App() {
  const first10= fakeData.slice(0,11);
  const [player,setPlayer]=useState(first10);
  const [cart,setCart] = useState([]);
  useEffect(()=>{
    

  },[])
  const handleAddPlayer = (player)=>{
    const newCart = [...cart,player];
    setCart(newCart);
    console.log('Add Player',player);
}
  
  return (
    <div className="App">
     <div className="cart-container">
       {
           <Cart cart={cart}></Cart>
       }
       
     </div>
     <div className="player-container">
      <h1>Bangladesh Team</h1>
     <h1>Team Member:{player.length}</h1>
      {
        player.map(player => <Player player={player} handleAddPlayer={handleAddPlayer}></Player>)
      }
     </div>
     
    </div>
  );
}

export default App;
