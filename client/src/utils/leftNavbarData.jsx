import Yoga from '../assets/yoga.svg'
import YogaInvert from '../assets/yogaInvert.svg'
import Bike from '../assets/bike.svg'
import BikeInvert from '../assets/bikeInvert.svg'
import Weight from '../assets/weight.svg'
import WeightInvert from '../assets/weightInvert.svg'
import Swim from '../assets/swim.svg'
import SwimInvert from '../assets/swimInvert.svg'

/**
* Represents an array of objects that define data for left navigation bar.
* @type {Array<Object>}
* @property {string} className - The CSS class name for the item.
* @property {string} logo - The path to the image file for the item logo.
* @property {string} logoInvert - The path to the image file for the inverted item logo.
*/

export const leftNavbarData = [
    { className: 'yoga', logo: Yoga, logoInvert: YogaInvert, alt: 'yoga icon' },
    { className: 'swim', logo: Swim, logoInvert: SwimInvert, alt: 'natation icon' },
    { className: 'bike', logo: Bike, logoInvert: BikeInvert, alt: 'vélo icon' },
    { className: 'weight', logo: Weight, logoInvert: WeightInvert, alt: 'altére icon' }
]