import { Button } from "@mui/material";
import { useState } from "react";

const UseStateExample = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>{counter}</h1>
      <Button
        variant="outlined"
        color="success"
        onClick={() => setCounter(counter + 1)}
      >
        Increment
      </Button>
      <Button
        variant="outlined"
        color="success"
        onClick={() => setCounter(counter - 1)}
      >
        Decrement
      </Button>
      <Button variant="outlined" color="error" onClick={() => setCounter(0)}>
        Reset
      </Button>
    </div>
  );
};

export default UseStateExample;
