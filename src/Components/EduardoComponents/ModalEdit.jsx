import React, { useState, useEffect } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const ModalEdit = ({ open, onClose, data }) => {
  const { setUser } = useUser();
  const [formData, setFormData] = useState(data);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.telefone && formData.cpf && formData.password) {
      setUser(formData);
      onClose();
    } else {
      setFormErrors({ message: "Preencha todos os campos!" });
    }
  };

  const handleDeleteUser = () => {
    if (window.confirm("Tem certeza que deseja excluir seu cadastro? Esta ação é irreversível.")) {
      setUser(null)
      setFormErrors({ message: "Cadastro excluído com sucesso!" });
      navigate('/login'); 
      onClose(); 
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md mx-4">
        <h2 className="text-2xl font-bold mb-6">Editar Cadastro</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome"
            name="name"
            value={data.name}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            readOnly
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="tel"
            placeholder="Telefone"
            name="telefone"
            value={formData.telefone || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="text"
            placeholder="CPF"
            name="cpf"
            value={formData.cpf || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="password"
            placeholder="Senha"
            name="password"
            value={formData.password || ""}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          {formErrors.message && (
            <div className="text-red-500 mb-4">{formErrors.message}</div>
          )}
          <div className="flex gap-4 justify-center mt-6">
            <button 
              type="submit" 
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              Salvar
            </button>
            <button 
              type="button"
              onClick={handleDeleteUser}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              Excluir Cadastro
            </button>
          </div>
        </form>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default ModalEdit;
