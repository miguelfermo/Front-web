import { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import Overlay from './Overlay';
import './LayoutStyles.css';

const Layout = () => {
    const [rightPanelActive, setRightPanelActive] = useState(false);

    const handleSignInClick = () => {
        setRightPanelActive(false);
    };
    const handleSignUpClick = () => {
        setRightPanelActive(true);
    };

    return (
        <div 
          className={`relative overflow-hidden w-[768px] max-w-full min-h-[480px] rounded-lg shadow-2xl bg-white transition-all duration-[600ms] ease-in-out ${
            rightPanelActive ? 'right-panel-active' : ''
          }`} 
          id="container"
        >
            <SignUpForm />
            <SignInForm />
            <Overlay onSignInClick={handleSignInClick} onSignUpClick={handleSignUpClick} />
        </div>
    );
};

export default Layout;
