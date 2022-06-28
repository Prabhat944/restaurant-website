
import { Fragment } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Summary from './components/Meals/Summary';

function App() {
  return (
    <Fragment>
      <Header />
      <Summary />
    </Fragment>
  );
}

export default App;
