import React from 'react';
import { Link } from 'react-router-dom';
import './telainicial.css';

function Telainicial() {
    return (
        <>
            <div className='tela'>
                <div className='conteudo'>
                    <h1 className='titulo'><strong>SOBRE O NOSSO SITE</strong></h1>
                    <br />
                    <p className='p'><strong>Bem-vindo ao Donation Compass: a bússula que direciona a solidariedade!</strong></p>
                    <p className='p'>Seja você alguém em busca de apoio ou alguém disposto a ajudar, Donation Compass é a plataforma que conecta corações generosos e causas dignas em uma jornada de solidariedade e esperança</p>
                    <br />
                    <p className='p'><strong>Juntos, podemos fazer a diferença!</strong></p>
                    <p className='p'>Imagine um lugar onde as histórias de necessidades se encontram com a compaixão ilimitada. Aqui no Donation Compass, transformamos essa visão em realidade. Desde as vítimas de desastres naturais, até indivíduos enfrentando batalhas pessoais, cada história tem um espaço para ser ouvida e apoiada</p>
                    <br />
                    <p className='p'><strong>Explore, conecte-se e faça a diferença!</strong></p>
                    <p className='p'>Nossa plataforma é intuitiva e acolhedora. Explore uma variedade de campanhas de arrecadação, cada uma com sua própria história inspiradora. Conecte-se com pessoas de todo mundo, unindo-se em prol de uma missão comum de ajudar aqueles que mais precisam</p>
                    <br />
                    <p className='p'><strong>Segurança e transparência em cada passo!</strong></p>
                    <p className='p'>No Donation Compass, a segurança e transparência são nossas prioridades. Nossa equipe dedicada trabalha incansavelmente para verificar a autenticidade de cada campanha, garantindo que seu apoio vá diretamente para onde é mais preciso</p>
                    <br />
                    <p className='p'><strong>Faça parte da mudança hoje!</strong></p>
                    <p className='p'>Junte-se a nós no Donation Compass e seja parte de uma comunidade que se preocupa. Faça a diferença na vida dessas pessoas e causas que mais precisam. Juntos, podemos criar um mundo mais solidário e compreensivo</p>
                    <br />
                    <p className='p'><strong>Pronto para começar? Faça login ou crie uma conta agora mesmo!</strong></p>
                    <p className='p'>Seja bem-vindo ao Donation Compass, onde a solidariedade encontra um lar online. Junte-se a nós e faça parte dessa família especial</p>
                </div>
                <Link to="/Donations">
                  <button className='navegar'><p className='p_button'><strong>NAVEGAR</strong></p></button>
                </Link>
            </div>
        </>
    );
}

export default Telainicial;
