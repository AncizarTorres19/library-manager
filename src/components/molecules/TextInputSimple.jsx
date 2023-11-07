// Components
import { CustomAlert } from "./CustomAlert";


export const TextInputSimple = ({
    disabled = false,
    errors,
    hadleOnEnter = () => { },
    label,
    nameRegister,
    placeholder = 'Ingrese',
    register,
    type = 'text',
    typeAlert = 'error',
    validations,
    value,
}) => {

    return (
        <>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                {...register(nameRegister, validations)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        hadleOnEnter();
                    }
                }}
            />
            {errors && errors[nameRegister] && (
                <CustomAlert
                    message={errors[nameRegister].message}
                    type={typeAlert}
                />
            )}
        </>
    );
}