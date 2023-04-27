import React from 'react'
import PropTypes from 'prop-types'
import '../styles/biology.css'
import Calories from '../assets/calories.svg'
import Proteins from '../assets/protein.svg'
import Carbs from '../assets/carbs.svg'
import Fat from '../assets/fat.svg'
import BiologyCard from './BiologyCard'
function Biology({ data }) {
    const keyData = data.data.keyData

    return (
        <article className='biology'>
            <BiologyCard image={Calories} keyData={keyData.calorieCount} text='Calories' />
            <BiologyCard image={Proteins} keyData={keyData.proteinCount} text='Proteines' />
            <BiologyCard image={Carbs} keyData={keyData.carbohydrateCount} text='Glucides' />
            <BiologyCard image={Fat} keyData={keyData.lipidCount} text='Lipides' />
        </article>
    )
}

Biology.propTypes = {
    data: PropTypes.object,
}

export default Biology