import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function PaginaEditarCadastro({ onSave }) {
  const location = useLocation();
  const [formData, setFormData] = useState(location.state.user || {});

  useEffect(() => {
    setFormData(location.state.user || {});
  }, [location.state.user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-gray-100 rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-6">Editar Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome Completo"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <input
          type="tel"
          placeholder="Telefone"
          name="telefone"
          value={formData.telefone || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <input
          type="text"
          placeholder="CPF"
          name="cpf"
          value={formData.cpf || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <input
          type="text"
          placeholder="CEP"
          name="cep"
          value={formData.cep || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="text"
          placeholder="Logradouro"
          name="logradouro"
          value={formData.logradouro || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="password"
          placeholder="Senha"
          name="senha"
          value={formData.senha || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <input
          type="password"
          placeholder="Confirmação de Senha"
          name="confirmacao"
          value={formData.confirmacao || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <div className="flex gap-4 justify-center">
          <button 
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            Salvar
          </button>
          <button 
            type="button"
            onClick={() => window.history.back()}
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
