import { useState } from 'react'

function LeftNavbarBtn({ className, logo, logoInvert, alt }) {
    const [isClicked, setIsClicked] = useState(true);
    const handleClick = () => setIsClicked(!isClicked)

    return (
        <li onClick={handleClick}>
            <img className={className} src={isClicked ? logo : logoInvert} alt={alt} />
        </li>
    )
}

export default LeftNavbarBtn