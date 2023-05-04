import React from 'react'
import PropTypes from 'prop-types'
import '../styles/userName.css'



/**
 * This is a React component that displays a greeting message and the user's first name, along with a
 * congratulatory message for achieving their goals.
 * @param {string} firstName - The first name of the user.
 * @returns A React component called `UserName` is being returned. It takes a prop called `firstName`
 * and displays a greeting message with the first name and a congratulatory message. The component also
 * has a prop type validation for `firstName`.
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