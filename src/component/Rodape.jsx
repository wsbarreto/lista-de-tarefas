import React from "react";

export default function Rodape(){

    const footer = {
        width: '100%',
        height: '100px',
        position: 'absolute',
        bottom: '0',
        left: '0'
    };

    const footer_fixar_rodape = {
        backgroundColor: '#999',
        borderTop: '1px solid #333',
        bottom: '0',
        left: '0',
        height: '300px',
        position: 'fixed',
        width: '100%'
      }

    const style_css = {
        // backgroundColor: '#999',
        padding: '20px'
    };

    return(
        <div>
            <footer>
	<p>&copy; 2023 - Todos os direitos reservados</p>
	<nav>
		<ul>
			<li><a href="#">Termos de uso</a></li>
			<li><a href="#">Política de privacidade</a></li>
			<li><a href="#">Sobre nós</a></li>
			<li><a href="#">Contato</a></li>
		</ul>
	</nav>
</footer>
        </div>
    )};
