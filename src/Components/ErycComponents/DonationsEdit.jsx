import { useState } from 'react';
import { TextField } from '@mui/material';
import icon from '../../assets/iconPerfil.png';
import Modal from './DonationsEditModal';

const initialInputState = {
  image: icon,
  title: '',
  time: '',
  location: '',
  desc: '',
  company: '',
  value: ''
};

export default function DonationsEdit() {
  const [donations, setDonations] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [input, setInput] = useState(initialInputState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: name === 'value' ? parseFloat(value) : value,
    }));
  };

  const addDonation = () => {
    if (!input.title || !input.location || !input.desc || !input.company || input.value <= 0) {
      alert("Por favor, preencha todos os campos obrigatórios corretamente.");
      return;
    }
    if (editIndex !== null) {
      saveEditDonation();
      return;
    }
    setDonations((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        ...input,
      },
    ]);
    resetInput();
    setIsModalOpen(false);
  };

  const editDonation = (index) => {
    setEditIndex(index);
    setInput(donations[index]);
    setIsModalOpen(true);
  };

  const saveEditDonation = () => {
    const updatedDonations = donations.map((donation, index) =>
      index === editIndex ? { ...donation, ...input } : donation
    );
    setDonations(updatedDonations);
    setEditIndex(null);
    resetInput();
    setIsModalOpen(false);
  };

  const deleteDonation = (index) => {
    const updatedDonations = donations.filter((_, i) => i !== index);
    setDonations(updatedDonations);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    resetInput();
    setIsModalOpen(false);
  };

  const resetInput = () => {
    setInput(initialInputState);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between mb-4">
        <button
          className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
          onClick={handleOpenModal}
        >
          {donations.length > 0 ? "+ Doações" : "Criar Doações"}
        </button>
      </div>
     
     <div className="group group/item singleJob h-[520px] w-[1500px] p-[15px] bg-white rounded-[10px] hover:bg-greyIsh bg-opacity-60 shadow-lg shadow-greyIsh-500/700 hover:shadow-lg overflow-y-auto rounded border p-3">
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-6 gap-4">
        {donations.map(({ id, image, title, location, desc, company, value }, index) => (
          <div
            key={id}
            className="group/item singleJob max-w-[250px] p-4 bg-white rounded-lg shadow-lg hover:shadow-xl"
          >
            <h1 className="text-lg font-semibold text-gray-700 group-hover:text-black">
              {title}
            </h1>
            <h6 className="text-gray-500">{location}</h6>
            <p className="text-sm text-gray-600 mt-2 group-hover:text-black">
              {desc}
            </p>
            <div className="company flex items-center gap-2 mt-4">
              <img
                src={image}
                title="iconicons"
                alt="Company logo"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm text-gray-700 group-hover:text-black">
                {company}
              </span>
            </div>
            <div className="bg-green-200 text-green-800 font-bold p-2 mt-2 rounded">
              {typeof value === 'number' ? `R$ ${value.toFixed(2)}` : 'Valor não disponível'}
            </div>
            <div className='grid grid-cols-2 gap-5 mt-4'>
              <button
                className="rounded bg-green-500 px-4 py-2 font-semibold text-white hover:bg-green-600"
                onClick={() => editDonation(index)}
              >
                Editar
              </button>
              <button
                className="rounded bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600"
                onClick={() => deleteDonation(index)}
              >
                Deletar
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <div className="flex flex-col gap-4">
            <TextField
              label="Title"
              type="text"
              name="title"
              value={input.title}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
              required
            />
            <TextField
              label="Location"
              type="text"
              name="location"
              value={input.location}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
              required
            />
            <TextField
              label="Description"
              type="text"
              name="desc"
              value={input.desc}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
              required
            />
            <TextField
              label="Company"
              type="text"
              name="company"
              value={input.company}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
              required
            />
            <TextField
              label="Value"
              type="number"
              name="value"
              value={input.value}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
              required
            />
            <button
              className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
              onClick={addDonation}
            >
              {editIndex !== null ? "Salvar Alterações" : "Adicionar Doação"}
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
