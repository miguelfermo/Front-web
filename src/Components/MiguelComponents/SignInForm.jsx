// src/components/SignInForm.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Miguelstyles.css';

const SignInForm = () => {
    const navigate = useNavigate();

    const handleSignIn = () => {
        // lógica de autenticação aqui para enviar o usuário para a página de doações
        navigate('/Donations');
    };

    return (
        <div className="form-container sign-in-container">
            <form className='form-miguel' action="#">
                <h1 className='h1-miguel'>Login</h1>
                <input className='input-miguel' type="email" placeholder="Email" required />
                <input className='input-miguel' type="password" placeholder="Senha" required />
                <a className='a-miguel' href="#">Esqueceu sua senha?</a>
                <div className="btn-grad" id='signin' onClick={handleSignIn}>Sign In</div>
            </form>
        </div>
    );
};

export default SignInForm;
