import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPenToSquare, faWifi, faEnvelope, faSquareCheck, faComputer, faCircleQuestion } from "@fortawesome/free-solid-svg-icons"
import "./Card.css"
import { Link } from "react-router-dom";

export default function Card(props) {
    const icone = (propsIcone) => {
        const icones = {
            "faArrowLeft": faArrowLeft,
            "faPenToSquare": faPenToSquare,
            "faWifi": faWifi,
            "faEnvelope": faEnvelope,
            "faSquareCheck": faSquareCheck,
            "faComputer": faComputer,
            "faCircleQuestion": faCircleQuestion
        }

        return icones[propsIcone]
    }
    
    return (
        <>
        <Link to={`pagina/${props.pagina}`}>
            <div className="card-background" >
                <motion.div className="motion-div"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    >
                    <div className="card-conteudo">
                        <FontAwesomeIcon className="icone" icon={icone(props.icone)} />
                        <h2 className="titulo">{props.titulo}</h2>
                    </div>
                </motion.div>
            </div>
        </Link>
        </>
    );
}