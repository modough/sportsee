import '../styles/userName.css'

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