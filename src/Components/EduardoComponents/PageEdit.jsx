import React, { useState, useEffect } from 'react';
import { TextField, Box, Button, Typography } from '@mui/material';
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
    <Box
      sx={{
        maxWidth: 600,
        margin: 'auto',
        marginTop: 4,
        padding: 3,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Editar Cadastro
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome Completo"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Telefone"
          name="telefone"
          value={formData.telefone || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="CPF"
          name="cpf"
          value={formData.cpf || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="CEP"
          name="cep"
          value={formData.cep || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Logradouro"
          name="logradouro"
          value={formData.logradouro || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Senha"
          name="senha"
          type="password"
          value={formData.senha || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Confirmação de Senha"
          name="confirmacao"
          type="password"
          value={formData.confirmacao || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Box sx={{ textAlign: 'center', marginTop: 2 }}>
          <Button type="submit" variant="contained" color="primary" style={{ marginRight: 10 }}>
            Salvar
          </Button>
          <Button variant="outlined" onClick={() => window.history.back()}>
            Cancelar
          </Button>
        </Box>
      </form>
    </Box>
  );
}
