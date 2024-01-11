import { useReducer } from "react";
import { Button } from "@mui/material";

const UseReducerExample = () => {
  //   const [state, setState] = useState("");
  const initialState = { counter: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { counter: state.counter + 1 };
      case "decrement":
        return { counter: state.counter - 1 };
      case "reset":
        return { counter: 0 };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Counter: {state?.counter}</h1>
      <Button
        variant="contained"
        onClick={() => dispatch({ type: "increment" })}
      >
        Increment
      </Button>
      <Button
        variant="contained"
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrement
      </Button>
      <Button
        variant="outlined"
        color="error"
        onClick={() => dispatch({ type: "reset" })}
      >
        reset
      </Button>
    </div>
  );
};

export default UseReducerExample;
