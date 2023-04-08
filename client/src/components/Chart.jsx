import '../styles/chart.css'

function Chart() {
    return (
        <section className='chart'>
            <div className='chart-topInfos'>
                <p>Activités quotidiennes</p>
                <ul className='weightAndCalory'>
                    <li className='weight'><p>Poids (kg)</p></li>
                    <li className='calory'><p>Calories brûlées (kCal)</p></li>
                </ul>
            </div>
        </section>
    )
}

export default Chart