import { lazy } from "react";

const LazyAuth = lazy(() => import(/*WebpackChunckName: "LazyAuth"*/'../components/login/Login'));
const LazyDashboard = lazy(() => import(/*WebpackChunckName: "LazyDashboard"*/'../components/dashboard/Dashboard'));
export const routes = [
    {
        to: '/login',
        path: 'login',
        Component: LazyAuth,
        name: 'Login'
    },
    {
        to: '/dashboard',
        path: 'dashboard',
        Component: LazyDashboard,
        name: 'Dashboard'
    },
];
// import { lazy } from "react";

// const LazyAuth = lazy(() => import(/*WebpackChunckName: "LazyAuth"*/'../components/login/Login'));
// const LazyDashboard = lazy(() => import(/*WebpackChunckName: "LazyDashboard"*/'../components/dashboard/Dashboard'));
// export const routes = [
//     {
//         to: '/aunar-library/login',
//         path: 'login',
//         Component: LazyAuth,
//         name: 'Login'
//     },
//     {
//         to: '/aunar-library/dashboard',
//         path: 'dashboard',
//         Component: LazyDashboard,
//         name: 'Dashboard'
//     },
// ];