import React, { useState } from 'react'
import PropTypes from 'prop-types';


/**
* A button component for the LeftNavbar menu.
* @param {Object} props - The props object containing the following properties:
* @param {string} props.className - The class name to be applied to the list item.
* @param {string} props.logo - The path to the logo image to be displayed when the button is not clicked.
* @param {string} props.logoInvert - The path to the logo image to be displayed when the button is clicked.
* @param {string} props.alt - The alt text for the logo image.
* @returns {JSX.Element} - The LeftNavbarBtn component.
*/

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