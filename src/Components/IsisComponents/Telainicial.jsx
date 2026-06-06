import React from 'react';
import { Link } from 'react-router-dom';

function Telainicial() {
    return (
        <div className='w-full h-screen bg-cover bg-fixed bg-center flex items-center justify-center' style={{backgroundImage: 'url(https://images.pexels.com/photos/697662/pexels-photo-697662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}>
            <div className='w-11/12 md:w-4xl h-3/5 bg-gradient-to-b from-orange-400 to-orange-500 rounded-lg shadow-2xl p-4 overflow-y-auto'>
                <h1 className='font-santello text-5xl text-brown text-center mb-4'><strong>SOBRE O NOSSO SITE</strong></h1>
                <br />
                <p className='font-santello text-brown mb-3'><strong>Bem-vindo ao Donation Compass: a bússola que direciona a solidariedade!</strong></p>
                <p className='font-santello text-brown mb-3'>Seja você alguém em busca de apoio ou alguém disposto a ajudar, Donation Compass é a plataforma que conecta corações generosos e causas dignas em uma jornada de solidariedade e esperança</p>
                <br />
                <p className='font-santello text-brown mb-3'><strong>Juntos, podemos fazer a diferença!</strong></p>
                <p className='font-santello text-brown mb-3'>Imagine um lugar onde as histórias de necessidades se encontram com a compaixão ilimitada. Aqui no Donation Compass, transformamos essa visão em realidade. Desde as vítimas de desastres naturais, até indivíduos enfrentando batalhas pessoais, cada história tem um espaço para ser ouvida e apoiada</p>
                <br />
                <p className='font-santello text-brown mb-3'><strong>Explore, conecte-se e faça a diferença!</strong></p>
                <p className='font-santello text-brown mb-3'>Nossa plataforma é intuitiva e acolhedora. Explore uma variedade de campanhas de arrecadação, cada uma com sua própria história inspiradora. Conecte-se com pessoas de todo mundo, unindo-se em prol de uma missão comum de ajudar aqueles que mais precisam</p>
                <br />
                <p className='font-santello text-brown mb-3'><strong>Segurança e transparência em cada passo!</strong></p>
                <p className='font-santello text-brown mb-3'>No Donation Compass, a segurança e transparência são nossas prioridades. Nossa equipe dedicada trabalha incansavelmente para verificar a autenticidade de cada campanha, garantindo que seu apoio vá diretamente para onde é mais preciso</p>
                <br />
                <p className='font-santello text-brown mb-3'><strong>Faça parte da mudança hoje!</strong></p>
                <p className='font-santello text-brown mb-3'>Junte-se a nós no Donation Compass e seja parte de uma comunidade que se preocupa. Faça a diferença na vida dessas pessoas e causas que mais precisam. Juntos, podemos criar um mundo mais solidário e compreensivo</p>
                <br />
                <p className='font-santello text-brown mb-3'><strong>Pronto para começar? Faça login ou crie uma conta agora mesmo!</strong></p>
                <p className='font-santello text-brown mb-6'>Seja bem-vindo ao Donation Compass, onde a solidariedade encontra um lar online. Junte-se a nós e faça parte dessa família especial</p>
                
                <div className='flex justify-center'>
                    <Link to="/Donations">
                      <button className='px-16 py-2 bg-brown rounded-lg hover:bg-orange-dark transition-colors cursor-pointer'>
                        <p className='font-santello text-orange-light'><strong>NAVEGAR</strong></p>
                      </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Telainicial;
