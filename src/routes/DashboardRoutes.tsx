import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';

export const DashboardRoutes = () => {
    return (
        <Routes>
            {
                routes.map(({ path, Component }) => (
                    <Route path={path} element={<Component />} key={path} />
                ))
            }
        </Routes>
    )
}