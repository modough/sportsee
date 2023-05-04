import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage';
import App from './components/App';
import WelcomePage from './pages/WelcomePage';




/**
* Creates a browser router for handling client-side routing.
* @param {Array} routes - An array of objects defining the routing configuration.
* @param {string} routes.path - The URL path to match for this route.
* @param {string} [routes.type=""] - The type of route to match. Defaults to an empty string.
* @param {React.Component} routes.element - The component to render for this route.
* @param {React.Component} [routes.errorElement=null] - The component to render when an error occurs for this route.
* @returns {React.Component} - The browser router component.
*/

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