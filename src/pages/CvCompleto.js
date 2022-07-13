import React from "react";
import eu from "../imagens/meme/Eu.jpg"

const CvCompleto = ()=> (
    <main>
        <h1>Curriculo Vitae</h1>
		
		<ul id="menu">
			<li><a href="/LastDance/CvResumido">Resumido</a></li>
			<li>Completo</li>
		</ul>
		
		<div class="secao">
			<h2>Dados Pessoais</h2>			
				<div>
				  <img src={eu}></img><br></br>
				 <span>Matheus </span>
				  <span>H.R. De </span>
				  <span>Souza</span>
                <br></br>
				 <a class="email" href="mailto:oldzinho3035@gmail.com">oldzinho3035@gmail.com</a><br></br>
				 <a class="url" href="https://github.com/ZinhoTTV">https://github.com/ZinhoTTV</a>
				
				<div class="adr">
				  <span>Blumenau</span>
				, 
				  <span>Santa Catarina</span>

				 </div>
				</div>
		</div>

		<div class="secao">
			<h2>Dados Profissionais</h2>
			
			<p><label>Empresa :</label>Coteminas (Operador de Logistica)</p>
			<p><label>Empresa :</label>Mrv Engenharia (Aux.Almoxarife)</p>
			<p><label>Empresa :</label>Hennings (Montador)</p>
		</div>

		<div class="secao">
			<h2>Formação</h2>
			
			<p><label>Curso :</label>Desenvolvimento Front-End (Apex Ensino)</p>
			<p><label>Ensino Médio Completo</label></p>
			
		</div>
    </main>
);

export default CvCompleto;
