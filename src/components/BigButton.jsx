import React from 'react';

const BigButton = (props) => {

    const { action, text } = props
    return (
        <div>
            <button className="BigButton" onClick={action}>
                {text.toUpperCase()}
            </button>
        </div>
    )
}

export default BigButton;