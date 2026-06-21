import PropTypes from "prop-types"
import {
  AiFillInstagram,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai"
import logo from "../../assets/logo-name.png"

const RESOURCE_LINKS = ["Empresa", "Suporte", "Feedback", "Contato"]
const COMPANY_LINKS = ["Sobre nós", "Noticias", "FAQ"]
const SOCIAL_ICONS = [AiFillInstagram, AiOutlineGithub, AiOutlineTwitter]

const FooterLinkList = ({ title, links }) => (
  <div className="grid">
    <span className="text-lg font-semibold pb-6 text-white">{title}</span>
    <div className="grid gap-3">
      {links.map((link) => (
        <li
          key={link}
          className="text-white opacity-70 hover:opacity-100 list-none"
        >
          {link}
        </li>
      ))}
    </div>
  </div>
)

FooterLinkList.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const FooterDiv = () => {
  return (
    <div className="p-20 mb-4 bg-orange-600 rounded-lg gap-8 grid grid-cols-5 m-auto items-start justify-center">
      <div>
        <div>
          <img className="h-40" src={logo} alt="" />
        </div>
      </div>

      <FooterLinkList title="Recursos" links={RESOURCE_LINKS} />
      <FooterLinkList title="Empresa" links={COMPANY_LINKS} />

      <div className="grid">
        <span className="text-lg font-semibold pb-6 text-white">Contato</span>
        <div className="flex gap-4 py-4">
          {SOCIAL_ICONS.map((Icon, index) => (
            <Icon
              key={index}
              className="bg-white p-2 h-9 w-9 rounded-full cursor-pointer text-orange-600"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FooterDiv
