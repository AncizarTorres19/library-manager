import { useState } from 'react';
import './login.css';

import { ContainLogin } from './components/ContainLogin';

//Icons
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
        // <div>
        //     {isLoginFormVisible && (
        //         <ContainLogin
        //             funtion={showForgottenPasswordForm}
        //             close={closeLoginForm}
        //         />
        //     )}

        //     {isForgottenPasswordVisible && (
        //         <ContainForgottenPassword funtion={showLoginForm} />
        //     )}

        //     {!isLoginFormVisible && !isForgottenPasswordVisible && (
        //         <div className='login-button' onClick={showLoginForm}>
        //             {/* <AccountCircleIcon sx={{ width: '100%', height: '100%', color: '#2f003f' }} /> */}
        //         </div>
        //     )}
        // </div>
        <div className="desktop">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="group">
                        <div className="overlap-group">
                            <img className="unsplash" alt="Unsplash" src="unsplash-b30xl-m3fso.png" />
                            <div className="rectangle" />
                            <div className="div" />
                        </div>
                    </div>
                    <div className="frame">
                        <div className="group-2">
                            <div className="frame-2">
                                <div className="frame-3">
                                    <div className="text-wrapper">Inicia sesión</div>
                                    <div className="frame-4">
                                        <div className="text-wrapper-2">Correo elecrónico</div>
                                        <div className="div-wrapper">
                                            <div className="text-wrapper-3">Escribir</div>
                                        </div>
                                    </div>
                                    <div className="frame-4">
                                        <div className="text-wrapper-2">Contraseña</div>
                                        <div className="frame-5">
                                            <div className="text-wrapper-3">Escribir</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="frame-6">
                                    <div className="text-wrapper-4">Ingresar</div>
                                </div>
                            </div>
                            <p className="no-tienes-cuenta-reg">
                                <span className="span">¿No tienes cuenta? </span>
                                <span className="text-wrapper-5">Regístrate</span>
                            </p>
                        </div>
                    </div>
                    <p className="p">Corporación Universitaria Autónoma de Nariño</p>
                    <div className="text-wrapper-6">LOGO</div>
                </div>
            </div>
        </div>
    );
};

export default Login;
