import { useState } from 'react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import Overlay from './Overlay'
import './LayoutStyles.css'

const AuthLayout = () => {
  const [rightPanelActive, setRightPanelActive] = useState(false)

  return (
    <div
      className={`relative overflow-hidden w-[768px] max-w-full min-h-[480px] rounded-lg shadow-2xl bg-white transition-all duration-[600ms] ease-in-out ${
        rightPanelActive ? 'right-panel-active' : ''
      }`}
      id="container"
    >
      <SignUpForm />
      <SignInForm />
      <Overlay
        onSignInClick={() => setRightPanelActive(false)}
        onSignUpClick={() => setRightPanelActive(true)}
      />
    </div>
  )
}

export default AuthLayout
