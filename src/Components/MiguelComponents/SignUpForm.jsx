// src/components/SignUpForm.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Miguelstyles.css';


const SignUpForm = () => {
    const navigate = useNavigate();

    const handleSignUp = () => {
        // lógica de autenticação aqui para enviar o usuário para a página de doações
        navigate('/Donations');
    };

    return (
        <div className="form-container sign-up-container">
            <form className='form-miguel' action="#">
                <h1 className='h1-miguel'>Crie sua Conta!</h1>
                <input className='input-miguel' type="text" placeholder="Nome" required />
                <input className='input-miguel' type="email" placeholder="Email" required />
                <input className='input-miguel' type="password" placeholder="Senha" required/>
                <div className="btn-grad" id='signup' onClick={handleSignUp}>Sign Up</div>
            </form>
        </div>
    );
};

export default SignUpForm;

