import React, { useState, useEffect } from "react"
import { TextField } from "@mui/material"
import icon from "../../assets/iconPerfil.png"
import Modal from "./DonationsEditModal"
import { useDonations } from "../../context/DonationsContext"

const initialInputState = {
  image: icon,
  title: "",
  time: "",
  location: "",
  desc: "",
  company: "",
  value: "",
}

export default function DonationsEdit() {
  const { donations, setDonations } = useDonations()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editIndex, setEditIndex] = useState(null)
  const [input, setInput] = useState(initialInputState)

  useEffect(() => {
    const cachedDonations = localStorage.getItem("donations")
    if (cachedDonations) {
      setDonations(JSON.parse(cachedDonations))
    }
  }, [setDonations])

  useEffect(() => {
    localStorage.setItem("donations", JSON.stringify(donations))
  }, [donations])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInput((prev) => ({
      ...prev,
      [name]: name === "value" ? parseFloat(value) : value,
    }))
  }

  const addDonation = () => {
    if (
      !input.title ||
      !input.location ||
      !input.desc ||
      !input.company ||
      input.value <= 0
    ) {
      alert("Por favor, preencha todos os campos obrigatórios corretamente.")
      return
    }
    if (editIndex !== null) {
      saveEditDonation()
      return
    }
    setDonations((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        ...input,
      },
    ])
    resetInput()
    setIsModalOpen(false)
  }

  const editDonation = (index) => {
    setEditIndex(index)
    setInput(donations[index])
    setIsModalOpen(true)
  }

  const saveEditDonation = () => {
    const updatedDonations = donations.map((donation, index) =>
      index === editIndex ? { ...donation, ...input } : donation
    )
    setDonations(updatedDonations)
    setEditIndex(null)
    resetInput()
    setIsModalOpen(false)
  }

  const deleteDonation = (index) => {
    const updatedDonations = donations.filter((_, i) => i !== index)
    setDonations(updatedDonations)
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    resetInput()
    setIsModalOpen(false)
  }

  const resetInput = () => {
    setInput(initialInputState)
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 font-semibold text-white rounded transition-colors"
          onClick={handleOpenModal}
        >
          {donations.length > 0 ? "+ Doações" : "Criar Doações"}
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4 overflow-y-auto max-h-96">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {donations.map(
            ({ id, image, title, location, desc, company, value }, index) => (
              <div
                key={id}
                className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow p-4"
              >
                <h1 className="text-lg font-semibold text-gray-700 hover:text-black">
                  {title}
                </h1>
                <h6 className="text-gray-500 text-sm">{location}</h6>
                <p className="text-sm text-gray-600 mt-2 hover:text-black">
                  {desc}
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <img
                    src={image}
                    title="iconicons"
                    alt="Company logo"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm text-gray-700 hover:text-black">
                    {company}
                  </span>
                </div>
                <div className="bg-green-200 text-green-800 font-bold p-2 mt-2 rounded text-sm">
                  {typeof value === "number"
                    ? `R$ ${value.toFixed(2)}`
                    : "Valor não disponível"}
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <button
                    className="bg-green-500 hover:bg-green-600 px-2 py-2 font-semibold text-white rounded transition-colors text-sm"
                    onClick={() => editDonation(index)}
                  >
                    Editar
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 px-2 py-2 font-semibold text-white rounded transition-colors text-sm"
                    onClick={() => deleteDonation(index)}
                  >
                    Deletar
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={input.title}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={input.location}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Description"
              name="desc"
              value={input.desc}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Company"
              name="company"
              value={input.company}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="number"
              placeholder="Value"
              name="value"
              value={input.value}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 font-semibold text-white rounded transition-colors"
              onClick={addDonation}
            >
              {editIndex !== null ? "Salvar Alterações" : "Adicionar Doação"}
            </button>
          </div>
        </Modal>
      )}
    </div>
  )
}
