import React from 'react'
import PropTypes from 'prop-types'
import '../styles/biology.css'
import Calories from '../assets/calories.svg'
import Proteins from '../assets/protein.svg'
import Carbs from '../assets/carbs.svg'
import Fat from '../assets/fat.svg'
import BiologyCard from './BiologyCard'


/* This is a functional React component called `Biology`. It takes in a single prop called `data` which
is an object and has a `propTypes` validation for it. The component renders an `article` element
with four `BiologyCard` components inside it. Each `BiologyCard` component receives an image, a
keyData value, and a text prop. The keyData values are extracted from the `data` prop and passed
down to the `BiologyCard` components. Finally, the `Biology` component is exported as the default
export of the module. */
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