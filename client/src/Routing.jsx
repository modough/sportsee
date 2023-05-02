import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage';
import App from './components/App';
import WelcomePage from './pages/WelcomePage';

const Routing = createBrowserRouter([
    {
        path: "/",
        element: <WelcomePage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/user/:id",
        type: "exact",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "/*",
        element: <ErrorPage />
    }
]);

export default Routing