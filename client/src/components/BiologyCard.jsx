import React from 'react'
import PropTypes from 'prop-types'


/**
 * The BiologyCard component, which displays a biology data card.
 * @param {Object} props - The props for the component.
 * @param {string} props.image - The image URL for the card.
 * @param {number} props.keyData - The biology data to display.
 * @param {string} props.text - The text to display on the card.
 * @returns {JSX.Element} The rendered component.
 */

function BiologyCard({ image, keyData, text }) {
    return (
        <div className='calories'>
            <img src={image} alt="" />
            <span>
                <p>{keyData}kCal</p>
                {text}
            </span>
        </div>
    )
}
BiologyCard.propTypes = {
    image: PropTypes.string,
    keyData: PropTypes.number,
    text: PropTypes.string
}
export default BiologyCard