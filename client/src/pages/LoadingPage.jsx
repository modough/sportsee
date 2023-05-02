import React from 'react'
import '../styles/loadingPage.css'
import LoaderImg from '../assets/loader.svg'

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