import React from "react";
import gif from "../imagens/meme/dedo-do-meio.gif"
const Contato = () => (
    <main>
        <form>
            <fieldset>
            <label>Seu Nome </label><br />
            <input type="text" name="nome" placeholder="Digite Seu Nome" required />
            </fieldset>
            <fieldset>
            <label>Seu Email </label><br />
            <input type="text" name="email" placeholder="123456@456.com" required />
            </fieldset>
            <fieldset>
                <label>telefone </label><br />
                <input type="text" name="telefone" placeholder="(99) 99999-9999" required />
            </fieldset>
            <fieldset>
                <label>Sexo</label><br />
                <label>Masculino</label>
                <input type="radio"  value="Masculino" name="sexo" required /><br />
                <label>Feminino</label>
                <input type="radio" value="Feminino" name="sexo" required />
            </fieldset> 
            <fieldset>
                <label>Nos deixe um Comentario</label><br />
                <textarea></textarea>
            </fieldset>
            <input type="submit" formAction="mailto:oldzinho3035@gmail.com"></input>
        </form>
        {/* <img src={gif} alt="loading..." /> */}
    </main>
);


export default Contato;