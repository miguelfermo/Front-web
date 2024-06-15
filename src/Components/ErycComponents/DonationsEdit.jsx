import React, { useState } from 'react';
// import { FaPen } from "react-icons/fa";
// import icon from "../../assets/iconPerfil.png";

export default function DonationsEdit() {
  const [donations, setDonations] = useState([]);
  const [input, setInput] = useState({
    image: '',
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
  };

  const deleteDonation = (index) => {
    const updatedDonations = donations.filter((_, i) => i !== index);
    setDonations(updatedDonations);
  };

  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {donations.map(({ id, image, title, location, desc, company }, index) => (
          <div
            key={id}
            className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-greyIsh bg-opacity-60 shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
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
            <button
              className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-gray-400 group-hover/item:text-textColor group-hover:text-black"
              onClick={() => editDonation(index)}
            >
              Editar Doações
            </button>
            <button
              className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-gray-400 group-hover/item:text-textColor group-hover:text-black"
              onClick={() => deleteDonation(index)}
            >
              Deletar Doações
            </button>
          </div>
        ))}

        <div className="newDonationForm">
          <input
            type="text"
            name="image"
            value={input.image}
            onChange={handleInputChange}
            placeholder="Image URL"
          />
          <input
            type="text"
            name="title"
            value={input.title}
            onChange={handleInputChange}
            placeholder="Title"
          />
          <input
            type="text"
            name="time"
            value={input.time}
            onChange={handleInputChange}
            placeholder="Time"
          />
          <input
            type="text"
            name="location"
            value={input.location}
            onChange={handleInputChange}
            placeholder="Location"
          />
          <input
            type="text"
            name="desc"
            value={input.desc}
            onChange={handleInputChange}
            placeholder="Description"
          />
          <input
            type="text"
            name="company"
            value={input.company}
            onChange={handleInputChange}
            placeholder="Company"
          />
          {editIndex !== null ? (
            <button onClick={saveEditDonation}>Salvar Alterações</button>
          ) : (
            <button onClick={addDonation}>Adicionar Doação</button>
          )}
        </div>
      </div>
    </div>
  );
}
