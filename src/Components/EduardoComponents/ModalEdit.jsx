import React, { useState, useEffect } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
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
      navigate('/login'); 
      onClose(); 
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nome"
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Telefone"
            name="telefone"
            value={formData.telefone || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="CPF"
            name="cpf"
            value={formData.cpf || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Senha"
            name="password"
            type="password"
            value={formData.password || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          {formErrors.message && (
            <div style={{ color: "red", marginTop: 10 }}>{formErrors.message}</div>
          )}
          <Box sx={{ textAlign: "center", marginTop: 2 }}>
            <Button type="submit" variant="contained" color="primary" style={{ marginRight: 10 }}>
              Salvar
            </Button>
            <Button variant="contained" style={{ backgroundColor: "#f44336", color: "#fff" }} onClick={handleDeleteUser}>
              Excluir Cadastro
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default ModalEdit;
