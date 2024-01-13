import { useState } from "react";
import UseStateExample from "./pages/UseStateExample";
import "./App.css";
import UseReducerExample from "./pages/UseReducerExample";
import ContactUs from "./components/ContactUs";
// import Todos from "./components/Todos";
import FormTodos from "./components/FormTodos";
import UseEffectExample from "./pages/UseEffectExample";

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
      <div style={{ width: "1024px", margin: "0px auto" }}>
        <ContactUs />
      </div>
      <div style={{ width: "1024px", margin: "10px auto 0px" }}>
        <UseReducerExample />
      </div>
      <div style={{ width: "1024px", margin: "10px auto 0px" }}>
        <FormTodos />
      </div>
      <div style={{ width: "1024px", margin: "10px auto 0px" }}>
        <UseEffectExample />
      </div>
    </>
  );
}

export default App;
