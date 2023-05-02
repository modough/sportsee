import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage';
import App from './components/App';
import WelcomePage from './pages/WelcomePage';

/* This code is creating a routing configuration using the `createBrowserRouter` function from the
`react-router-dom` library. The configuration includes three route objects: */

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