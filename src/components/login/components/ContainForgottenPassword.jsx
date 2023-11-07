import { useForm } from 'react-hook-form';
import { Button, Grid, Paper, Typography } from '@mui/material'
import { TextInputSimple } from '../../molecules/TextInputSimple'

export const ContainForgottenPassword = ({ funtion }) => {
    
    const defaultValues = {
        email: '',
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
        funtion()
    }

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
                <Typography variant="h4" sx={{ textAlign: 'center', mb: '10px' }}>
                    Recuperar contraseña
                </Typography>
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
                <Button variant="contained" color="success" fullWidth sx={{ mt: '10px' }} type="submit">
                    Obtener nueva contraseña
                </Button>
            </form>
        </Grid>
    )
}
