import '../styles/biology.css'
import Calories from '../assets/calories.svg'
import Proteins from '../assets/protein.svg'
import Carbs from '../assets/carbs.svg'
import Fat from '../assets/fat.svg'
function Biology({ data }) {
    const keyData = data.data.keyData

    return (
        <article className='biology'>
            <div className='calories'>
                <img src={Calories} alt="" />
                <span>
                    <p>{keyData.calorieCount}kCal</p>
                    Calories
                </span>
            </div>
            <div className='proteins'>
                <img src={Proteins} alt="" />
                <span>
                    <p>{keyData.proteinCount}g</p>
                    Proteins
                </span>
            </div>
            <div className='carbs'>
                <img src={Carbs} alt="" />
                <span>
                    <p>{keyData.carbohydrateCount}g</p>
                    Glucides
                </span>
            </div>
            <div className='lipids'>
                <img src={Fat} alt="" />
                <span>
                    <p>{keyData.lipidCount}g</p>
                    Lipides
                </span>
            </div>
        </article>
    )
}

export default Biology