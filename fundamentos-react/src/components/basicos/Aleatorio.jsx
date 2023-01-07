import React from "react";

export default props => {
    const {min, max} = props;
    const randomNumber = parseInt(min + (max - min) * Math.random());

    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p><strong>Valor Mínimo: </strong>{min}</p>
            <p><strong>Valor Máximo: </strong>{max}</p>
            <p><strong>Valor Escolhido: </strong>{randomNumber}</p>
        </div>
    )
}