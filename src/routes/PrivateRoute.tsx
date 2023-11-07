import { useContext } from 'react';

import { Navigate } from 'react-router-dom';
import { AuthContext } from '../components/Auth/AuthContext';


export const PrivateRoute = ({ children }: any) => {
    const { user } = useContext(AuthContext);

    return user.logged
        ? children
        // : <Navigate to="/aunar-library/login" />
        : <Navigate to="/login" />
}