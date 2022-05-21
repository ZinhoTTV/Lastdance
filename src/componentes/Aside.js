import React from "react";
import asi1 from "../imagens/aside/aside1.jpeg"
import asi2 from "../imagens/aside/aside2.jpeg"
import asi3 from "../imagens/aside/aside3.jpeg"
 
const Aside = ()=> (
    <aside>
        <h1>Apartir de Agora, Iremos Mostrar, Avatares, Feitos em Nosso Site.</h1>
        <a href="/"><img src={asi1} /></a>
        <a href="/"><img src={asi2} /></a>
        <a href="/"><img src={asi3} /></a>
    </aside>
);
export default Aside;