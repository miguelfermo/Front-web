import { AiFillInstagram, AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai"
import logo from "../../assets/logoName.png"




const FooterDiv = () => {
  return (
   
    <div className="footer p-[5rem] mb-4 bg-orange-600 rounded-[10px] gap-8 grid grid-cols-5 m-auto items-start justify-center">
      
      <div>
      <div className="logoDiv">
        <img className="h-40rem" src={logo} alt="" />
      </div>
      </div>
    
     <div className="grid ">
      <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
         Recursos
      </span>
      <div className="grid gap-3">
       <li className="text-white opacity-[.7] hover:opacity-[1]">Empresa</li>
       <li className="text-white opacity-[.7] hover:opacity-[1]">Suporte</li>
       <li className="text-white opacity-[.7] hover:opacity-[1]">Feedback</li>
       <li className="text-white opacity-[.7] hover:opacity-[1]">Contato</li>
      </div>
     </div>

     <div className="grid ">
      <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
         Empresa
      </span>
      <div className="grid gap-3">
       <li className="text-white opacity-[.7] hover:opacity-[1]">Sobre nós</li>
       <li className="text-white opacity-[.7] hover:opacity-[1]">Noticias</li>
       <li className="text-white opacity-[.7] hover:opacity-[1]">FAQ</li>
      </div>
     </div>

     <div className="grid ">
      <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
         Contato
      </span>
       <div className="icons flex gap-4 py-[1rem]">
        <AiFillInstagram className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-orange-600" href="" target="_black"/>
          <AiOutlineGithub className=" bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-orange-600" href="" target="_black"/>
          <AiOutlineTwitter className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-orange-600" href="" target="_black"/>
      </div>
     </div>
    </div>
    
  )
}

export default FooterDiv