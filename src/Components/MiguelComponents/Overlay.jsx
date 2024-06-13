// src/components/Overlay.jsx
import React from 'react';
import './Miguelstyles.css';

const Overlay = ({ onSignInClick, onSignUpClick }) => {
    return (
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1 className='h1-miguel'>Bem-Vindo de Volta!</h1>
                    <p className='p-miguel'>Continue de onde você começou!</p>
                    <div className="btn-grad" id="signIn" onClick={onSignInClick}>Sign In</div>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1 className='h1-miguel'>Novo por aqui?</h1>
                    <p className='p-miguel'>Cadastre-se para uma nova aventura</p>
                    <div className="btn-grad" id="signUp" onClick={onSignUpClick}>Sign Up</div>
                </div>
            </div>
        </div>
    );
};

export default Overlay;
