import React from 'react'
import { useRouteError, Link } from "react-router-dom";
import '../styles/errorPage.css';

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