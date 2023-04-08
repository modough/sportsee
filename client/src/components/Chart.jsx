import '../styles/chart.css'
import Calories from '../assets/calories.svg'
import Proteins from '../assets/protein.svg'
import Carbs from '../assets/carbs.svg'
import Fat from '../assets/fat.svg'

function Chart() {
    return (
        <section className='chart'>
            <article className='left-chart'>
                <div class="chart-topInfosArticle">
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
                <div className='chart-bottomInfosArticle'>
                    <div className='bottomInfosDiv session-timing'>
                        <p>Durée moyenne des sessions</p>
                    </div>
                    <div className='bottomInfosDiv intensity'>
                        <p>Intensité</p>
                    </div>
                    <div className='bottomInfosDiv score'>
                        <p>Score</p>
                    </div>
                </div>
            </article>
            <article className='right-chart'>
                <div className='calories'>
                    <img src={Calories} alt="" />
                    <span>1,930kCal Calories</span>
                </div>
                <div className='proteins'>
                    <img src={Proteins} alt="" />
                    <span>155g Proteins</span>
                </div>
                <div className='carbs'>
                    <img src={Carbs} alt="" />
                    <span> 290g Glucides</span>
                </div>
                <div className='lipids'>
                    <img src={Fat} alt="" />
                    <span> 50g Lipides</span>
                </div>
            </article>
        </section>

    )
}

export default Chart