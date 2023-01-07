import React from "react";

export default props => {
    const min = props.min;
    const max = props.max;
    const randomNumber = min + (max-min) * Math.random();

    return (
        <p>O Nº aleatório entre
            {min} e {max} foi {randomNumber}</p>
    )
}