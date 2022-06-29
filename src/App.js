
import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './Store/CartProvider';


function App() {
  const [cartIsShown,setCartIsShown] = useState(false);

  const ShowCartHandler=()=>{
    setCartIsShown(true);
  };

  const HideCartIsShown=()=>{
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={HideCartIsShown}/>}
      <Header onShowCart={ShowCartHandler}/>
      <main>
      <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
