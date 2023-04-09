import '../styles/dailyActivity.css'

function DailyActivity() {
    return (
        <div className="dailyActivity">
            <div className='chart-topInfos'>
                <p>Activités quotidiennes</p>
                <ul className='weightAndCalory'>
                    <li className='weight'><p>Poids (kg)</p></li>
                    <li className='calory'><p>Calories brûlées (kCal)</p></li>
                </ul>
            </div>
            <div className='chart-topInfos recharts'>

            </div>
        </div>
    )
}

export default DailyActivity