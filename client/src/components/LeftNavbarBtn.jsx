import React, { useState } from 'react'
import PropTypes from 'prop-types';

/* This is a functional React component called `LeftNavbarBtn` that takes in four props: `className`,
`logo`, `logoInvert`, and `alt`. It uses the `useState` hook to create a state variable called
`isClicked` and a function called `setIsClicked` to update it. The component renders an `img`
element inside an `li` element, with the `src` attribute set to either `logo` or `logoInvert`
depending on the value of `isClicked`. When the `li` element is clicked, the `handleClick` function
is called, which toggles the value of `isClicked`. The component also defines `propTypes` to
validate the props passed to it. Finally, the component is exported as the default export of the
module. */
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