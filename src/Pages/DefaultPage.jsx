import React from "react";
import { useParams, Link } from "react-router-dom";
import './DefaultPage.css'
import SetaVoltar from "../Components/SetaVoltar/SetaVoltar"
import Header from "../Components/Header/Header"

export default function DefaultPage() {
    const { name } = useParams();

    return (
        <>
        <main>
            <div className="pagina-titulo-subtitulo-container">
                <h1 className="titulo-pagina">{name.replaceAll("-", " ")}</h1>
            </div>

            <p className="conteudo-principal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias impedit aliquam, officiis sequi vero id excepturi nemo dolorem magni ducimus, cupiditate amet! Architecto vero non aut hic praesentium harum.</p>

            <SetaVoltar />
        </main>
        </>
    );
}