import React, { useState } from "react";
import Header from './Header';
import Footer from './Footer';
//import logo from "./logo.svg";
import "./App.css";

function App() {
  //let counter;

  const menu = ['Orders', 'Customers', 'Delivery']
  const [count, setCount] = useState(0);
  const [count10, setCount10] = useState(0);
  const [RandomNum, setCounterRandom] = useState(0);

  const getRandomNum = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };
  const increaseRandom = () => {
    return setCounterRandom(RandomNum + getRandomNum(10));
  }

  const descreaseRandom = () => {
    return setCounterRandom(RandomNum - getRandomNum(10));
  }

  const clearAll = () => {
    setCount(0);
    setCount10(0);
    setCounterRandom(0);
  }
  const add = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  const add10 = () => {
    setCount10(count10 + 10);
  };

  const minus10 = () => {
    setCount10(count10 - 10);
  };

  return (

    <div>
      <Header />
      <br />
      <button onClick={add}> Plus One </button>&nbsp;&nbsp;
      {count}&nbsp;&nbsp;
      <button onClick={minus}> Minus One</button>

      <br />
      <button onClick={add10}> Plus Ten </button>&nbsp;&nbsp;
      {count10}
      <button onClick={minus10}> Minus Ten</button>
      <br />
      <button onClick={descreaseRandom}>Minus Random Number</button>&nbsp;&nbsp;
      <strong>{RandomNum}</strong>&nbsp;&nbsp;
      <button onClick={increaseRandom}>Plus Random Number</button>



      <hr />
      <button onClick={clearAll}>Reset</button>
      <Footer menu={menu} />

    </div>
  );
}

export default App;
