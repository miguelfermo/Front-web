import React from 'react';
//import { FaPen } from "react-icons/fa";
//import icon from "../../assets/iconPerfil.png";

// Passar a nova doação para essa lista e renderizar na tela
const Data = [
  {
    id: 1,
    title: "Web developer",
    location: "San Francisco",
    desc: "We want a front-end developer for our company. You have to be experienced in developing visually appealing websites.",
    company: "Apple Inc.",
  },
];

export default function DonationsEdit() {
  return (
    <div className="top-20 max-h-128 rounded bg-white p-8 shadow-lg">
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10 overflow-y-auto">
        {Data.map(({ id, title, location, desc, company }) => (
          <div
            key={id} // Certifique-se de que a chave é única
            className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-greyIsh bg-opacity-60 shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
          >
            <span className="flex justify-between items-center gap-4">
              <h1 className="text-[16px] font-semibold text-textColor group-hover:text-black">
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Nome da Doação"
                />
                {title}
              </h1>
            </span>
            <h6 className="text-[#ccc]">{location}</h6>
            <p className="text-[14px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-black">
              {desc}
            </p>
            <div className="company flex items-center gap-2">
              {/* Se tiver uma imagem, você pode adicionar aqui */}
              {/* <img src={image} title="iconicons" alt="" className="w-[10%]" /> */}
              <span className="text-[14px] py-[1rem] block group-hover:text-black">
                {company}
              </span>
            </div>
            <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-gray-400 group-hover/item:text-textColor group-hover:text-black">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
