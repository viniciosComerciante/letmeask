import React from 'react'

export const Button = () => {

    const [counter, setCounter] = React.useState(0);

    function increment() {
        // counter += 1;
        setCounter(counter + 1)
        console.log(counter);
    }

    return (
        <button onClick={increment}>{counter}</button>
    )
}


