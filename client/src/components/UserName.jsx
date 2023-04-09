import '../styles/userName.css'

/**
 * The function returns a React component that displays a greeting, a name, and a congratulatory
 * message.
 * @returns A React component called `UserName` is being returned. It contains a section with two divs,
 * one with a greeting and a name, and the other with a congratulatory message.
 */
function UserName() {
    return (
        <section className='informations'>
            <div className='userInfos'>
                <p>Bonjour</p>
                <h1 className='name'>Name</h1>
            </div>
            <div className='scoring-message'>
                Félicitation ! Vous avez explosé vos objectifs hier 👏
            </div>
        </section>
    )
}

export default UserName