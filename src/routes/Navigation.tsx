import { HashRouter, Routes, Route } from "react-router-dom";

import { Suspense } from "react";

import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { DashboardRoutes } from "./DashboardRoutes";
import Login from "../components/login/Login";

export const Navigation = () => {
    return (
        // <Suspense fallback={<Spinner />}>
        <Suspense fallback={<h1>cargando...</h1>}>
            <HashRouter>
                <Routes>
                    {/* <Route path="/aunar-library/login" element={ */}
                    <Route path="/login" element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    } />

                    <Route path="/*" element={
                        <PrivateRoute>
                            <DashboardRoutes />
                        </PrivateRoute>
                    } />
                </Routes>
            </HashRouter>
        </Suspense>
    )
}
