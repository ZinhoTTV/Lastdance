import React from "react";
import CvCompleto from "./CvCompleto";

const Desenvolvedor = ()=> (
    <main>
        <h1>Curriculo Vitae</h1>
		
		<ul id="menu">
			<li class="ativo">Resumido</li>
			<li><a href="/CvCompleto"> Completo</a></li>
		</ul>
		
		<div class="secao">
			<h2>Dados Pessoais</h2>
			
				 <a href="/">  
                 <span class="given-name">Matheus </span>
				  <span class="additional-name">H.R. De</span>
				  <span class="family-name">Souza</span>
				 </a>
			
		</div>

		<div class="secao">
			<h2>Dados Profissionais</h2>
			
			<p><label>Empresa :</label> Coteminas (Operador de Logistica)</p>
			<p><label>Empresa :</label>Mrv Engenharia (Aux. Almoxarife)</p>
			<p><label>Empresa :</label>Hennings (Montador)</p>
		</div>

    </main>
);

export default Desenvolvedor;