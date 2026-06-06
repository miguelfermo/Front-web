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
          className={`relative overflow-hidden w-96 max-w-full min-h-96 rounded-lg shadow-2xl bg-white transition-all duration-600 ease-in-out ${
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
