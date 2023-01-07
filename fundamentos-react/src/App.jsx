import React from "react";

import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from './components/basicos/Fragmento';
import CommParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';

export default _ => (
    <div id="app">
        <h1>Fundamentos React (Arrow _)</h1>
        <Aleatorio min={1} max={60}/>
        <Fragmento />
        <CommParametro
            titulo="Situação do Aluno"
            aluno="Pedro Silva"
            nota={9.3}
        />
        <Primeiro></Primeiro>
    </div>
);