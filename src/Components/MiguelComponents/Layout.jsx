// src/components/Layout.jsx
import { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import Overlay from './Overlay';
import './Miguelstyles.css';

const Layout = () => {
    // Definindo o estado do painel direito como falso
    const [rightPanelActive, setRightPanelActive] = useState(false);

    // Função para lidar com o clique no botão de login e alterar o estado do painel direito para falso ou verdadeiro
    const handleSignInClick = () => {
        setRightPanelActive(false);
    };
    const handleSignUpClick = () => {
        setRightPanelActive(true);
    };

    // Retornando o layout do componente (Container, login, cadastro e overlay com a função de alterar o estado do painel direito)
    return (
        <div className={`container-miguel ${rightPanelActive ? 'right-panel-active' : ''}`} id="container">
            <SignUpForm />
            <SignInForm />
            <Overlay onSignInClick={handleSignInClick} onSignUpClick={handleSignUpClick} />
        </div>
    );
};

export default Layout;
