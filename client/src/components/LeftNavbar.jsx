import '../styles/leftNavbar.css'
import Yoga from '../assets/yoga.svg'
import Bike from '../assets/bike.svg'
import Weight from '../assets/weight.svg'
import Swim from '../assets/swim.svg'

/**
 * This is a React component that renders a left navigation bar with icons for yoga, swimming, biking,
 * and weightlifting.
 * @returns The LeftNavbar component is being returned.
 */
function LeftNavbar() {
    return (
        <section className="leftNavbar">
            <nav className='leftNavbar-list'>
                <li><img className='yoga' src={Yoga} alt='yoga icon' /></li>
                <li><img className='swim' src={Swim} alt='natation icon' /></li>
                <li><img className='bike' src={Bike} alt='vélo icon' /></li>
                <li><img className='weight' src={Weight} alt='altére icon' /></li>
            </nav>
            <p className='copyright'>Copyright, SportSee 2020</p>
        </section>
    )
}

export default LeftNavbar