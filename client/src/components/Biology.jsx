import React from 'react'
import PropTypes from 'prop-types'
import '../styles/biology.css'
import Calories from '../assets/calories.svg'
import Proteins from '../assets/protein.svg'
import Carbs from '../assets/carbs.svg'
import Fat from '../assets/fat.svg'
import BiologyCard from './BiologyCard'


/**
 * The Biology component, which displays key biology data.
 * @param {Object} props - The props for the component.
 * @param {Object} props.data - The biology data to display.
 * @param {Object} props.data.keyData - The key biology data.
 * @returns {JSX.Element} The rendered component.
 */

function Biology({ keyData }) {
    return (
        <article className='biology'>
            <BiologyCard
                image={Calories}
                keyData={keyData.calorieCount}
                text='Calories'
            />
            <BiologyCard
                image={Proteins}
                keyData={keyData.proteinCount}
                text='Proteines'
            />
            <BiologyCard
                image={Carbs}
                keyData={keyData.carbohydrateCount}
                text='Glucides'
            />
            <BiologyCard
                image={Fat}
                keyData={keyData.lipidCount}
                text='Lipides'
            />
        </article>
    )
}

Biology.propTypes = {
    keyData: PropTypes.object,
}

export default Biology