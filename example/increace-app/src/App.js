import { useState } from "react";
import Button from "./Button";

const App = () => {
  const [counter, setCounter] = useState(5);
  const increaceName = "Increace";
  const decreace = "Decreace";

  const handleIncreaceClicked = () => {
    console.log("increace clicked");
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  const handleDecreaceClicked = () => {
    console.log("decreace clicked");

    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <Button
        content={increaceName}
        handleClick={handleIncreaceClicked}
        disabled={counter > 9}
      />
      {counter > 9 ? <p>counter can not be bigger from 10</p> : null}
      <h3>{counter}</h3>
      {counter < 1 ? <p>counter can not be smaller from 0</p> : null}
      <Button
        content={decreace}
        handleClick={handleDecreaceClicked}
        disabled={counter < 1}
      />
    </div>
  );
};

export default App;
