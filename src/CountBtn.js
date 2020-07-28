import React from 'react';
import './App.css';



export default function CountBtn(props) {

  console.log(props)

  const send = () => {
    props.updateCounter(props.value + props.count123)
  }
  // const send2 = () => {
  //   props.updateCounter(props.value2 + props.count12)
  // }


  return (
    <div className="App">

      CountBtn {props.count}


      <button onClick={send} >{props.value}</button>



    </div>



  );

}

