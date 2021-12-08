import { useContext } from "react";
import Clicado from "./Contexto";
import D from "./D";
import React from "react";
import "./estilos.css";
export default function B() {
const { botao, setBotao } = useContext(Clicado);
return (
  <div className="bb">
<span>Componente B: {botao}</span>
<button onClick={() => setBotao("B")}>Clicar</button>
<D />
</div>
);
}