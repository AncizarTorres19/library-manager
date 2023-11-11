import { useForm } from 'react-hook-form';

import { TextInputSimple } from '../../molecules/TextInputSimple';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { types } from '../../../types/types';
import { AuthContext } from '../../Auth/AuthContext';

export const ContainLogin = ({ funtion, close }) => {

    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const [rememberMe, setRememberMe] = useState(false);

    const defaultValues = {
        email: '',
        password: ''
    }

    const {
        handleSubmit,
        register,
        reset,
        setValue,
        watch,
        control,
        formState: { errors }
    } = useForm({
        defaultValues // se inicializa el formulario con los valores por defecto
    });

    const onSubmit = (data) => {
        console.log(data);
        dispatch({
            type: types.login,
            payload: {
                name: 'Ancizar',
                email: watch('email')
            }
        });
        // navigate('/aunar-library/dashboard');
        navigate('/dashboard');
    }


    // Cuando se monta el componente, verifica si hay un valor en el localStorage y actualiza el estado "rememberMe".
    useEffect(() => {
        const storedRememberMe = localStorage.getItem('rememberMe');
        if (storedRememberMe === 'true') {
            setRememberMe(true);
            setValue('email', localStorage.getItem('email'));
        }
    }, []);

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
        // Almacena el estado en localStorage cuando cambia.
        localStorage.setItem('rememberMe', !rememberMe);
        localStorage.setItem('email', watch('email'));
    };


    return (
   <></>
    )
}
