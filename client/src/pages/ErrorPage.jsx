import React from 'react'
import { useRouteError, Link } from "react-router-dom";
import '../styles/errorPage.css';

/**
 * This is a React component for an error page that displays an error message and a link to return to
 * the homepage.
 * @returns The ErrorPage component is being returned, which displays an error message and a link to
 * return to the homepage. The error status code is also displayed, or a default value of 404 if no
 * status code is provided.
 */
function ErrorPage() {

    const error = useRouteError();
    console.error(error);
    return (
        <div id="error-page">
            <h1>{error.status || '404'}</h1>
            <p className="error-message">Oups! La page que vous demandez n&apos;existe pas.</p>
            <p className="homepage">
                <Link to='/'>Retourner sur la page d&apos;accueil</Link>
            </p>

        </div>
    )
}

export default ErrorPage