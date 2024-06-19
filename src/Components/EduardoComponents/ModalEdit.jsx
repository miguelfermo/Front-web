import React, { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';


const ModalEdit = ({ open, onClose, data }) => {
  const [formData, setFormData] = useState(data); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      }}>
        <form>
          <TextField
            label="Nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="CPF"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" >
            Editar Dados
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ModalEdit;
