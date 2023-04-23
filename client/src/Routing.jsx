import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App';
import ErrorPage from './pages/ErrorPage';

const Routing = createBrowserRouter([
    {
        path: "/user/:id",
        type: "exact",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "*",
        element: <ErrorPage />
    }
]);

export default Routing