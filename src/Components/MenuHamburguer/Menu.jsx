import React from "react"
import { motion } from "framer-motion";
import "./Menu.css"


export default function Menu(){
    return(   
        <motion.div className="menu_container">
            <div>
                <h3>INFORMAÇÕES PRINCIPAIS</h3>
                <ul>
                    <li><a href="/pagina/meu-cadastro">Meu Cadastro</a></li>
                    <li><a href="/pagina/primeiro-acesso">Primeiro Acesso?</a></li>
                    <li><a href="/pagina/computadores-pelo-campus">Computadores pelo Campus</a></li>
                    <li><a href="/pagina/wifi">Acesso ao Wi-Fi</a></li>
                    <li><a href="/pagina/fale-conosco">Fale Conosco</a></li>
                </ul>
            </div>
            <div>
                <h3>CAMPUS DIGITAL</h3>
                <ul>
                    <li><a href="#">Rematrícula</a></li>
                    <li><a href="#">Avaliações e Frequência</a></li>
                    <li><a href="#">Comprovante de matrícula</a></li>
                    <li><a href="#">Horários de Aula</a></li>
                    <li><a href="#">Histórico do curso</a></li>
                    <li><a href="#">Crachá de identificação</a></li>
                    <li><a href="#">Estacionamento</a></li>
                </ul>
            </div>
            <div>
                <h3>MOODLE</h3>
                <ul>
                    <li><a href="#">Sobre o Moodle</a></li>
                    <li><a href="#">Primeiro acesso</a></li>
                    <li><a href="#">Usando o Moodle</a></li>
                    <li><a href="#">Disciplinas</a></li>
                    <li><a href="#">Mensagens</a></li>
                    <li><a href="#">Envio de trabalhos</a></li>
                    <li><a href="#">Arquivos Pessoais</a></li>
                </ul>
            </div>
        </motion.div>
    )
}