import { Alert } from '@mui/material'

export const CustomAlert = ({ message, type }) => {
    return (
        <Alert severity={type} autoHideDuration={6000}>{message}</Alert>
    )
}
