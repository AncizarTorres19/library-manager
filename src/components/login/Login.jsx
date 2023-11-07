import { useState } from 'react';
import './login.css';

import { ContainLogin } from './components/ContainLogin';

//Icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ContainForgottenPassword } from './components/ContainForgottenPassword';

const Login = () => {

    const [isLoginFormVisible, setLoginFormVisible] = useState(false);
    const [isForgottenPasswordVisible, setForgottenPasswordVisible] = useState(false);

    const showLoginForm = () => {
        setLoginFormVisible(true);
        setForgottenPasswordVisible(false);
    };

    const showForgottenPasswordForm = () => {
        setLoginFormVisible(false);
        setForgottenPasswordVisible(true);
    };

    const closeLoginForm = () => {
        setLoginFormVisible(false);
        setForgottenPasswordVisible(false);
    };
    return (
        <div>
            {isLoginFormVisible && (
                <ContainLogin
                    funtion={showForgottenPasswordForm}
                    close={closeLoginForm}
                />
            )}

            {isForgottenPasswordVisible && (
                <ContainForgottenPassword funtion={showLoginForm} />
            )}

            {!isLoginFormVisible && !isForgottenPasswordVisible && (
                <div className='login-button' onClick={showLoginForm}>
                    <AccountCircleIcon sx={{ width: '100%', height: '100%', color: '#2f003f' }} />
                </div>
            )}
        </div>
    );
};

export default Login;
