import '../styles/biology.css'
import Calories from '../assets/calories.svg'
import Proteins from '../assets/protein.svg'
import Carbs from '../assets/carbs.svg'
import Fat from '../assets/fat.svg'
function Biology() {
    return (
        <article className='biology'>
            <div className='calories'>
                <img src={Calories} alt="" />
                <span>
                    <p>1,930kCal</p>
                    Calories
                </span>
            </div>
            <div className='proteins'>
                <img src={Proteins} alt="" />
                <span>
                    <p>155g</p>
                    Proteins
                </span>
            </div>
            <div className='carbs'>
                <img src={Carbs} alt="" />
                <span>
                    <p>290g</p>
                    Glucides
                </span>
            </div>
            <div className='lipids'>
                <img src={Fat} alt="" />
                <span>
                    <p>50g</p>
                    Lipides
                </span>
            </div>
        </article>
    )
}

export default Biology