import React from "react";

import Primeiro from './components/basicos/Primeiro';
import CommParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

export default _ => (
    <div id="app">
        <h1>Fundamentos React (Arrow _)</h1>
        <Fragmento />
        <CommParametro
            titulo="Situação do Aluno"
            aluno="Pedro Silva"
            nota={9.3}
        />
        <Primeiro></Primeiro>
    </div>
);