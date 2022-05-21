import React from "react";
import ava from "../imagens/avatar.jpeg";
import ava2 from "../imagens/avatar2.jpeg";
import YouTube from "react-youtube";

const Principal = ()=> (
    <main>
        <h1>Cansado de Seus Avatares, Convencionais?</h1>
        <p>Temos, a Solução Para você, Estamo com o novo lançamento do League of Legends, Sim o jogo que você AMA, estamos lançando o nosso Proprio criador de Avatares, para você e seus amigos, se divertirem e desafiarem quem faz o Personagem Mais Bonito!</p>
        <h1>Topa  <a className="topa" href="https://br.leagueoflegends.com/pt/featured/events/avatar-creator?_gl=1*14p4qro*_ga*Nzk1MjkxNDY0LjE2NTA1MDE5MDc.*_ga_FXBJE5DEDD*MTY1MzA1MzYzNC4yLjEuMTY1MzA1NDI4MC41OA..&_ga=2.75627285.1653730967.1653053635-795291464.1650501907#/">Entrar</a> Nessa Conosco?</h1>
        <h3>Imagem de Demonstração</h3>
        <img src={ava} />
        <img src={ava2} /><br></br>
        <h2>E por fim, e não menos importante, Segue o video de Lançamento do Campeão, Shaco! Um Otimo Video</h2><br></br>
        <YouTube videoId="xo_qTRNEQgw"></YouTube>
    </main>
);

export default Principal;