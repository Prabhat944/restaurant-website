
import { Fragment, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';


function App() {
  const [cartIsShown,setCartIsShown] = useState(false);

  const ShowCartHandler=()=>{
    setCartIsShown(true);
  };

  const HideCartIsShown=()=>{
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onCloseCart={HideCartIsShown}/>}
      <Header onShowCart={ShowCartHandler}/>
      <main>
      <Meals />
      </main>
    </Fragment>
  );
}

export default App;
