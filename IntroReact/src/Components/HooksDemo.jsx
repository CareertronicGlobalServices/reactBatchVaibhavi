import { useState } from "react";

function HooksDemo() {
  const [counter, setCounter] = useState(0);
  console.log(counter);
  function handleInc() {
    setCounter(counter + 1);
  }
  function handleDec() {
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>Hooks DEtails </h1>
      <h1>I am Counter {counter}</h1>
      <button onClick={handleInc}> +</button>
      <button onClick={handleDec}> -</button>
    </>
  );
}

export default HooksDemo;
