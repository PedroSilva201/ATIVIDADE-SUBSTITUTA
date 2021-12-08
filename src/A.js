import { useContext } from "react";
import Clicado from "./Contexto";
import React from "react";
import C from "./C";
import "./estilos.css";
export default function C() {
const { botao, setBotao } = useContext(Clicado);
return (
<div className="aa">
<span>Componente A: {botao}</span>
<button onClick={() => setBotao("A")}>Clicar</button>
<C />
</div>
);
}