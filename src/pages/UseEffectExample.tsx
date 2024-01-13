import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

const UseEffectExample = () => {
    const [hide, setHide] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setInterval(() => {
            // console.log(count);
            
            // setCount((preCount)=> preCount + 1)
        }, 1000)
    }, [count])
    return (
        <div>
            <h1>{count}</h1>
            <Button
                onClick={() => setHide(!hide)}
                variant='outlined'>
                Click
            </Button>
        </div>
    );
};

export default UseEffectExample;