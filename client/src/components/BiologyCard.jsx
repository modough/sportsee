import React from 'react'
import PropTypes from 'prop-types'


/* This is a functional React component called `BiologyCard` that takes in three props: `image`,
`keyData`, and `text`. It returns a JSX element that displays an image, a key data value (in kCal),
and some text. The component also defines PropTypes for each prop to ensure they are of the correct
data type. Finally, the component is exported as the default export. */

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