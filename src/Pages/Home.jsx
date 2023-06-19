import React from "react";
import './Home.css'
import Card from "../Components/Card/Card";

export default function Home() {
    return (
        <>
        <main>
            <div className="titulo-subtitulo-container">
                <div className="titulo-guia">
                    <h1>GUIA DO ALUNO</h1>
                </div>
                <h2 className="subtitulo-guia">Sistema do Campus POA</h2>
            </div>
            <div className="menu-grid">
                <Card icone="faPenToSquare" titulo="Meu Cadastro" pagina="meu-cadastro"/>
                <Card icone="faWifi" titulo="Wi-fi" pagina="wifi"/>
                <Card icone="faEnvelope" titulo="Fale Conosco" pagina="fale-conosco"/>
                <Card icone="faSquareCheck" titulo="Primeiro Acesso" pagina="primeiro-acesso"/>
                <Card icone="faComputer" titulo="Computadores pelo Campus" pagina="computadores-pelo-campus"/>
                <Card icone="faCircleQuestion" titulo="Outras Dúvidas" pagina="outras-duvidas"/>
            </div>
        </main>
        </>
    );
}