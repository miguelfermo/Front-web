import PropTypes from 'prop-types'

const Overlay = ({ onSignInClick, onSignUpClick }) => {
  return (
    <div className="absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-[600ms] ease-in-out z-40">
      <div
        className="text-white relative left-[-100%] h-full w-[200%] transform transition-transform duration-[600ms] ease-in-out flex"
        style={{ backgroundImage: 'linear-gradient(to right, #e26e3d 52%, #7e4b18)' }}
      >
        <div className="absolute flex flex-col items-center justify-center top-0 h-full w-1/2 px-10 text-center transform transition-transform duration-[600ms] ease-in-out -translate-x-[20%]">
          <h1 className="text-4xl font-bold">Bem-Vindo de Volta!</h1>
          <p className="text-sm font-light leading-5 tracking-wider my-5 mx-0">Continue de onde você começou!</p>
          <div
            className="bg-gradient-to-r from-white to-gray-100 text-purple-700 font-bold py-3 px-12 my-2 rounded-lg cursor-pointer border-none text-center uppercase transition-all duration-500 hover:bg-gradient-to-l"
            onClick={onSignInClick}
          >
            Entrar
          </div>
        </div>
        <div className="absolute right-0 flex flex-col items-center justify-center top-0 h-full w-1/2 px-10 text-center transform transition-transform duration-[600ms] ease-in-out">
          <h1 className="text-4xl font-bold">Novo por aqui?</h1>
          <p className="text-sm font-light leading-5 tracking-wider my-5 mx-0">Cadastre-se para uma nova aventura</p>
          <div
            className="bg-gradient-to-r from-white to-gray-100 text-purple-700 font-bold py-3 px-12 my-2 rounded-lg cursor-pointer border-none text-center uppercase transition-all duration-500 hover:bg-gradient-to-l"
            onClick={onSignUpClick}
          >
            Cadastrar
          </div>
        </div>
      </div>
    </div>
  )
}

Overlay.propTypes = {
  onSignInClick: PropTypes.func.isRequired,
  onSignUpClick: PropTypes.func.isRequired,
}

export default Overlay
