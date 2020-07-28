import React, { useState } from 'react';

import CountBtn from './CountBtn'
import './App.css';

function App() {

  const [counters, setCounters] = useState([

    4, 11, 34

  ])

  const [count, setCount] = useState(100);
  const [count2, setCount2] = useState(5);

  const updateCounter = (n) => {
    console.log('updated Counter', n, count)
    setCount(n);
  }
  const updateCounter2 = (n) => {
    console.log('updated Counter', n, count2)
    setCount2(n);
  }

  const send = () => {
    console.log('Clicked on Mouse')
  }

  return (


    <div className="App">


      <strong>Счетчик</strong>
      <br />

      <CountBtn value={-3} count123={count} updateCounter={updateCounter} send={send} />
      <CountBtn value={-2} count123={count} updateCounter={updateCounter} send={send} />
      <CountBtn value={-1} count123={count} updateCounter={updateCounter} send={send} />
      {count}
      <CountBtn value={+1} count123={count} updateCounter={updateCounter} send={send} />
      <CountBtn value={+2} count123={count} updateCounter={updateCounter} send={send} />
      <CountBtn value={+3} count123={count} updateCounter={updateCounter} send={send} />
      <hr />

      <CountBtn value2={-3} count12={count2} updateCounter={updateCounter2} send={send} />
      <CountBtn value2={-2} count12={count2} updateCounter={updateCounter2} send={send} />
      <CountBtn value2={-1} count12={count2} updateCounter={updateCounter2} send={send} />
      {count2}
      <CountBtn value2={+1} count12={count2} updateCounter={updateCounter2} send={send} />
      <CountBtn value2={+2} count12={count2} updateCounter={updateCounter2} send={send} />
      <CountBtn value2={+3} count12={count2} updateCounter={updateCounter2} send={send} />
      <hr />


      <CountBtn count={3} />
      <CountBtn count={8} />

      {counters.map(el => <CountBtn count={el} key={el} />)}

      <button>Add Counter</button>

    </div>
  );
}

export default App;
