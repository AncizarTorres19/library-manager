import { useForm } from 'react-hook-form';
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
<></>
    )
}
