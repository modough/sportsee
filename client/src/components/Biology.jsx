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
    )
}

export default Biology