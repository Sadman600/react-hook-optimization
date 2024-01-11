import { Button } from '@mui/material';
import React, { useReducer } from 'react';

const UseReducerExample = () => {
    const initialState = { counter: 0 }
    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return { counter: state.counter + 1 }
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    // console.log(reducer)
    return (
        <div>
            <h1>Use Reducer</h1>
            <h2>{state?.counter}</h2>
            <Button
                variant='outlined'
                onClick={() => dispatch({ type: 'increment' })}
            >
                Increment
            </Button>
        </div>
    );
};

export default UseReducerExample;