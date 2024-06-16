import { useState } from "react"
import PropTypes from "prop-types"
import { BiTimeFive } from "react-icons/bi"
import icon from "../../assets/iconPerfil.png"

const initialData = [
  {
    id: 1,
    image: icon,
    title: "Doação de Alimentos",
    time: "Há 2 dias",
    location: "São Paulo, SP",
    desc: "Doação de alimentos não perecíveis para famílias carentes da região.",
    company: "Associação Ajudar",
  },
  {
    id: 2,
    image: icon,
    title: "Campanha de Agasalhos",
    time: "Há 5 dias",
    location: "Rio de Janeiro, RJ",
    desc: "Arrecadação de agasalhos e cobertores para pessoas em situação de rua.",
    company: "ONG Proteger",
  },
  {
    id: 3,
    image: icon,
    title: "Doação de Livros",
    time: "Há uma semana",
    location: "Porto Alegre, RS",
    desc: "Campanha para doação de livros infantis e didáticos para escolas públicas.",
    company: "Fundação Educar",
  },
  {
    id: 4,
    image: icon,
    title: "Arrecadação de Fundos para Pesquisa",
    time: "Há duas semanas",
    location: "Brasília, DF",
    desc: "Campanha para financiamento de pesquisa científica na área de saúde.",
    company: "Instituto Pesquisador",
  },
  {
    id: 5,
    image: icon,
    title: "Doação de Roupas Infantis",
    time: "Há um mês",
    location: "Curitiba, PR",
    desc: "Arrecadação de roupas infantis para crianças de abrigos e orfanatos.",
    company: "Associação Infância Feliz",
  },
  {
    id: 6,
    image: icon,
    title: "Doação de Material Escolar",
    time: "Há 3 dias",
    location: "Belém, PA",
    desc: "Arrecadação de material escolar para crianças carentes da região amazônica.",
    company: "Associação Educar e Crescer",
  },
  {
    id: 7,
    image: icon,
    title: "Campanha de Doação de Sangue",
    time: "Há 1 semana",
    location: "Salvador, BA",
    desc: "Doação de sangue para hospitais locais em período crítico de demanda.",
    company: "Hemocentro Salvador",
  },
  {
    id: 8,
    image: icon,
    title: "Ajuda Humanitária para Refugiados",
    time: "Há 2 semanas",
    location: "Fortaleza, CE",
    desc: "Campanha de ajuda humanitária para refugiados vindos de países vizinhos.",
    company: "ONG Solidariedade Sem Fronteiras",
  },
  {
    id: 9,
    image: icon,
    title: "Doação de Brinquedos",
    time: "Há um mês",
    location: "Manaus, AM",
    desc: "Arrecadação de brinquedos novos para crianças em abrigos e hospitais infantis.",
    company: "Associação Alegria Infantil",
  },
  {
    id: 10,
    image: icon,
    title: "Doação de Equipamentos Médicos",
    time: "Há dois meses",
    location: "Recife, PE",
    desc: "Doação de equipamentos médicos para hospitais públicos da cidade.",
    company: "Fundação Saúde Melhor",
  },
]

const Donations = ({ searchTerm, companyTerm, locationTerm }) => {
  const [data] = useState(initialData)

  const filteredData = data.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      job.company.toLowerCase().includes(companyTerm.toLowerCase()) &&
      job.location.toLowerCase().includes(locationTerm.toLowerCase())
    )
  })

  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {filteredData.map(
          ({ id, image, title, time, location, desc, company }) => (
            <div
              key={id}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-greyIsh bg-opacity-60 shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
            >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-black">
                  {title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive /> {time}
                </span>
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
              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-gray-400 group-hover/item:text-textColor group-hover:text-black">
                Doar
              </button>
            </div>
          )
        )}
      </div>
    </div>
  )
}

Donations.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  companyTerm: PropTypes.string.isRequired,
  locationTerm: PropTypes.string.isRequired,
}

export default Donations
