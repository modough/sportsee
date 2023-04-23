import React, { useState } from 'react'
import PropTypes from 'prop-types';

function LeftNavbarBtn({ className, logo, logoInvert, alt }) {
    const [isClicked, setIsClicked] = useState(true);
    const handleClick = () => setIsClicked(!isClicked)

    return (
        <li onClick={handleClick}>
            <img className={className} src={isClicked ? logo : logoInvert} alt={alt} />
        </li>
    )
}

LeftNavbarBtn.propTypes = {
    className: PropTypes.string,
    logo: PropTypes.string,
    logoInvert: PropTypes.string,
    alt: PropTypes.string
}

export default LeftNavbarBtn