import React from 'react'
import PropTypes from 'prop-types'


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