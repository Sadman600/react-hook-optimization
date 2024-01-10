import UseStateExample from "./pages/UseStateExample";
import "./App.css";
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  // const handleDecrement = () => {
  //   setCounter(counter + 1);
  // };
  // const handleReset = () => {
  //   setCounter(0);
  // };
  return (
    <>
      <div className="appContainer">
        <UseStateExample
          counter={counter}
          setCounter={setCounter}
          handleIncrement={handleIncrement}
        />
      </div>
    </>
  );
}

export default App;
