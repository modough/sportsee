import '../styles/leftNavbar.css'
import Yoga from '../assets/yoga.svg'


import { leftNavbarData } from '../utils/leftNavbarData'
import LeftNavbarBtn from './LeftNavbarBtn'

/**
 * This is a React component that renders a left navigation bar with icons for yoga, swimming, biking,
 * and weightlifting.
 * @returns The LeftNavbar component is being returned.
 */
function LeftNavbar() {

    return (
        <section className="leftNavbar">
            <nav className='leftNavbar-list' >
                {
                    leftNavbarData.map((data) =>
                        <LeftNavbarBtn
                            key={data.className}
                            className={data.className}
                            logo={data.logo}
                            logoInvert={data.logoInvert}
                            alt={data.alt}
                        />
                    )
                }
            </nav>
            <p className='copyright'>Copyright, SportSee 2020</p>
        </section>
    )
}

export default LeftNavbar