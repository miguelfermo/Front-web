import { useState, useEffect } from "react"
import { Modal, Box, TextField, Button } from "@mui/material"
import { useUser } from "../../context/UserContext"

const ModalEdit = ({ open, onClose, data }) => {
  const { setUser } = useUser()
  const [formData, setFormData] = useState(data)

  useEffect(() => {
    setFormData(data) // Atualiza o estado inicial quando o modal é aberto com novos dados
  }, [data])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser(formData) 
    onClose() 
  }

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
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Telefone"
            name="telefone"
            value={formData.telefone || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="CPF"
            name="cpf"
            value={formData.cpf || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Senha"
            name="password"
            type="password"
            value={formData.password || ""}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Editar Dados
          </Button>
        </form>
      </Box>
    </Modal>
  )
}

export default ModalEdit
