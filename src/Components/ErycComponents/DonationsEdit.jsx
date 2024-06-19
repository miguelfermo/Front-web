import React, { useState } from 'react';
import icon from "../../assets/iconPerfil.png";
import { TextField } from '@mui/material';

export default function DonationsEdit() {
  const [donations, setDonations] = useState([]);
  const [input, setInput] = useState({
    image: icon,
    title: '',
    time: '',
    location: '',
    desc: '',
    company: ''
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const addDonation = () => {
    setDonations((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        ...input
      }
    ]);
    setInput({
      image: icon,
      title: '',
      time: '',
      location: '',
      desc: '',
      company: ''
    });
  };

  const editDonation = (index) => {
    setEditIndex(index);
    setInput(donations[index]);
  };

  const saveEditDonation = () => {
    const updatedDonations = donations.map((donation, index) =>
      index === editIndex ? { ...donation, ...input } : donation
    );
    setDonations(updatedDonations);
    setEditIndex(null);
    setInput({
      image: icon,
      title: '',
      time: '',
      location: '',
      desc: '',
      company: ''
    });
  };

  const deleteDonation = (index) => {
    const updatedDonations = donations.filter((_, i) => i !== index);
    setDonations(updatedDonations);
  };

  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10 w-full">
        {donations.map(({ id, image, title, location, desc, company }, index) => (
          <div
            key={id}
            className="group group/item singleJob h-[250px] w-[250px] p-[15px] bg-white rounded-[10px] hover:bg-greyIsh bg-opacity-60 shadow-lg shadow-greyIsh-500/700 hover:shadow-lg"
          >
            <span className="flex justify-between items-center gap-4">
              <h1 className="text-[16px] font-semibold text-textColor group-hover:text-black">
                {title}
              </h1>
            </span>
            <h6 className="text-[#ccc]">{location}</h6>
            <p className="text-[14px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-black">
              {desc}
            </p>

            <div className="company flex items-center gap-2">
              <img
                src={image}
                title="iconicons"
                alt="Company logo"
                className="w-[10%]"
              />
              <span className="text-[14px] py-[1rem] block group-hover:text-black">
                {company}
              </span>
            </div>

            <div className='grid grid-cols-2 gap-5 place-content-stretch'>
              <button
                className="rounded-[10px] bg-green-500 px-4 py-2 font-semibold text-white hover:bg-green-600"
                onClick={() => editDonation(index)}
              >
                Editar Doações
              </button>
              <button
                className="rounded-[10px] bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600"
                onClick={() => deleteDonation(index)}
              >
                Deletar Doações
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center py-10">
        <div className="max-w-md p-4 bg-white rounded shadow-lg">
          <div className="mb-4">
            <TextField
              label="Title"
              type="text"
              name="title"
              value={input.title}
              onChange={handleInputChange}
              className="w-full"
              variant="outlined"
              size="small"
            />
          </div>

          <div className="mb-4">
            <TextField
              label="Location"
              type="text"
              name="location"
              value={input.location}
              onChange={handleInputChange}
              className="w-full"
              variant="outlined"
              size="small"
            />
          </div>

          <div className="mb-4">
            <TextField
              label="Description"
              type="text"
              name="desc"
              value={input.desc}
              onChange={handleInputChange}
              className="w-full"
              variant="outlined"
              size="small"
            />
          </div>

          <div className="mb-4">
            <TextField
              label="Company"
              type="text"
              name="company"
              value={input.company}
              onChange={handleInputChange}
              className="w-full"
              variant="outlined"
              size="small"
            />
          </div>

          {editIndex !== null ? (
            <button
              className="rounded bg-green-500 px-4 py-2 font-semibold text-white hover:bg-green-600 w-full"
              onClick={saveEditDonation}
            >
              Salvar Alterações
            </button>
          ) : (
            <button
              className="rounded-[10px] bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 w-full"
              onClick={addDonation}
            >
              Adicionar Doação
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
