import React from 'react';




export default function CountBtn(props) {

  console.log(props)

  const send = () => {
    props.updateCounter(props.value + props.count123)
  }
  const send2 = () => {
    props.updateCounter(props.value2 + props.count12)
  }


  return (
    <center>

      CountBtn {props.count}

      <button onClick={send} >{props.value}</button>


      <button onClick={send2} >{props.value2}</button>
    </center>



  );

}

