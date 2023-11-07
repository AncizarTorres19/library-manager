import { useForm } from 'react-hook-form';
import { Button, Checkbox, Grid, Paper, Typography } from '@mui/material'

import CloseIcon from '@mui/icons-material/Close';
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
        <Grid
            container
            component={Paper}
            elevation={3}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{ background: '#fff', opacity: '.7', width: '35%', height: 'auto', position: 'absolute', top: '25%', left: '32%' }}
        >
            <form style={{ width: '100%', padding: '20px', gap: '5px', display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onSubmit)}>
                <Grid item xs={12} justifyContent={'flex-end'} sx={{ display: 'flex', flexDirection: 'row', mb: '10px' }}>
                    <CloseIcon sx={{ cursor: 'pointer' }} onClick={close} />
                </Grid>
                <Grid item xs={12}>
                    <TextInputSimple
                        errors={errors}
                        label='Correo electrónico'
                        nameRegister='email'
                        register={register}
                        placeholder='Escribe el correo'
                        validations={{
                            required: 'El correo es requerido',
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: 'El correo no es válido'
                            }
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextInputSimple
                        errors={errors}
                        // type='password'
                        label='Contraseña'
                        nameRegister='password'
                        register={register}
                        placeholder='Escribe la contraseña'
                        validations={{
                            required: 'La contraseña es requerida',
                            minLength: {
                                value: 8,
                                message: 'La contraseña debe tener mínimo 8 caracteres'
                            }
                        }}
                    />
                </Grid>
                <Button variant="contained" color="success" fullWidth type="submit">
                    Iniciar sesión
                </Button>
                <Grid item xs={12} justifyContent={'space-between'} sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography variant="overline" component="block">
                        <Checkbox
                            checked={rememberMe}
                            onChange={handleRememberMeChange}
                        />
                        recordarme
                    </Typography>
                    <Typography variant="overline" component="block" onClick={funtion} sx={{ cursor: 'pointer' }}>
                        recuperar contraseña
                    </Typography>
                </Grid>
            </form>
        </Grid>
    )
}
