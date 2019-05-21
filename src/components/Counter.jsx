import React from 'react';

const Counter = (props) => {
    const { count } = props;
    return (
        <h1 className="Counter" >{count}</h1>
    )
}

export default Counter;