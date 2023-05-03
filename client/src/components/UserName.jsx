import React from 'react'
import PropTypes from 'prop-types'
import '../styles/userName.css'


/**
 * This is a React component that displays a greeting message with the user's first name and a
 * congratulatory message for achieving their goals.
 * @returns A React component called `UserName` is being returned. It takes in a prop called `data` and
 * renders a section with a div containing a greeting and the user's first name, and a paragraph with a
 * congratulatory message. The `data` prop is expected to be an object and is validated using
 * PropTypes.
 */
function UserName({ firstName }) {


    return (
        <section className='informations'>
            <div className='userInfos'>
                <p>Bonjour</p>
                <h1 className='name'>{firstName}</h1>
            </div>
            <p className='scoring-message'>
                Félicitations ! Vous avez explosé vos objectifs hier 👏
            </p>
        </section>
    )
}

UserName.propTypes = {
    firstName: PropTypes.string.isRequired
}

export default UserName