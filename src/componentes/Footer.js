import React from "react";
import git from "../imagens/RedesSociais/git.png";
import face from "../imagens/RedesSociais/face.png";
import lin from "../imagens/RedesSociais/lin.png";
import { Link } from "react-router-dom";



const Footer = () => (
    <footer>
        <h2>Cuidado! o Shaco está na Espreita! Se esconda!</h2>
        <a href="https://www.facebook.com/matheus.ribasdesouza" target="_blank">
            <img src={face} />
        </a>
        <a href="https://www.linkedin.com/in/matheus-henrique-ribas-de-souza-89709b224/" target="_blank">
            <img src={lin} />
        </a>
        <a href="https://github.com/ZinhoTTV" target="_blank">
            <img src={git} />
        </a>
    </footer>
);

export default Footer;