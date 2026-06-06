import { AiFillInstagram, AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai"
import logo from "../../assets/logoName.png"


const FooterDiv = () => {
  return (
    <div className="p-20 mb-4 bg-orange-600 rounded-lg gap-8 grid grid-cols-5 m-auto items-start justify-center">
      
      <div>
      <div>
        <img className="h-40" src={logo} alt="" />
      </div>
      </div>
    
     <div className="grid">
      <span className="text-lg font-semibold pb-6 text-white">
         Recursos
      </span>
      <div className="grid gap-3">
       <li className="text-white opacity-70 hover:opacity-100 list-none">Empresa</li>
       <li className="text-white opacity-70 hover:opacity-100 list-none">Suporte</li>
       <li className="text-white opacity-70 hover:opacity-100 list-none">Feedback</li>
       <li className="text-white opacity-70 hover:opacity-100 list-none">Contato</li>
      </div>
     </div>

     <div className="grid">
      <span className="text-lg font-semibold pb-6 text-white">
         Empresa
      </span>
      <div className="grid gap-3">
       <li className="text-white opacity-70 hover:opacity-100 list-none">Sobre nós</li>
       <li className="text-white opacity-70 hover:opacity-100 list-none">Noticias</li>
       <li className="text-white opacity-70 hover:opacity-100 list-none">FAQ</li>
      </div>
     </div>

     <div className="grid">
      <span className="text-lg font-semibold pb-6 text-white">
         Contato
      </span>
       <div className="flex gap-4 py-4">
        <AiFillInstagram className="bg-white p-2 h-9 w-9 rounded-full cursor-pointer text-orange-600" />
          <AiOutlineGithub className="bg-white p-2 h-9 w-9 rounded-full cursor-pointer text-orange-600" />
          <AiOutlineTwitter className="bg-white p-2 h-9 w-9 rounded-full cursor-pointer text-orange-600" />
      </div>
     </div>
    </div>
    
  )
}

export default FooterDiv