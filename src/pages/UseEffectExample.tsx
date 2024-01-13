import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

const UseEffectExample = () => {
    const [hide, setHide] = useState(false);

    return (
        <div>

            <Button
                onClick={() => setHide((prev) => !prev)}
                variant='outlined'
            >
                {hide ? "show" : "hide "}
            </Button>
            {
                !hide && <LoadData />
            }
        </div>
    );
};

const LoadData = () => {
    const controller = new AbortController();
    const signal = controller.signal;
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts', { signal })
            .then((res) => res.json())
            .then((data) => alert(data.title));
        return () => {
            controller.abort();
        }
    }, [])

    return (
        <>
            <div>Todo</div>
        </>
    )
}

export default UseEffectExample;