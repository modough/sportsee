import React from 'react'
import PropTypes from 'prop-types'
import '../styles/userName.css'

/**
 * The function returns a React component that displays a greeting, a name, and a congratulatory
 * message.
 * @returns A React component called `UserName` is being returned. It contains a section with two divs,
 * one with a greeting and a name, and the other with a congratulatory message.
 */
function UserName({ data }) {

    console.log(data)

    const { firstName } = data.data.userInfos

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
    data: PropTypes.object
}

export default UserName