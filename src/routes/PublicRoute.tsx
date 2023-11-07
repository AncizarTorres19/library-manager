import { useContext } from 'react';

import { Navigate } from 'react-router-dom';
import { AuthContext } from '../components/Auth/AuthContext';


export const PublicRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    console.log(user)
    return user.logged
        // ? <Navigate to="/aunar-library/login" replace={true} />
        ? <Navigate to="/login" replace={true} />
        : children
}

