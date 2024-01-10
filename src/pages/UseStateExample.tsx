import { Button } from "@mui/material";

type TCounter = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  handleIncrement: () => void;
};
const UseStateExample = (props: TCounter) => {
  const { counter, handleIncrement } = props;

  return (
    <div>
      <h1>{counter}</h1>
      <Button variant="outlined" color="success" onClick={handleIncrement}>
        Increment
      </Button>
      {/* <Button variant="outlined" color="success" onClick={handleDecrement}>
        Decrement
      </Button>
      <Button variant="outlined" color="error" onClick={handleReset}>
        Reset
      </Button> */}
    </div>
  );
};

export default UseStateExample;
