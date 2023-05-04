import React from 'react'
import '../styles/loadingPage.css'
import LoaderImg from '../assets/loader.svg'


/**
 * Displays a loading page with a spinner while data is being loaded.
 * @function
 * @returns {JSX.Element} - A JSX element representing the loading page.
 */
function LoadingPage() {
    return (
        <section className='loadingPage'>
            <section className="loadingBackground">
                <img src={LoaderImg} alt='loader image' />
            </section>
        </section>
    )

}

export default LoadingPage