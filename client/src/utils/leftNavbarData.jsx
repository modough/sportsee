import Yoga from '../assets/yoga.svg'
import YogaInvert from '../assets/yogaInvert.svg'
import Bike from '../assets/bike.svg'
import BikeInvert from '../assets/bikeInvert.svg'
import Weight from '../assets/weight.svg'
import WeightInvert from '../assets/weightInvert.svg'
import Swim from '../assets/swim.svg'
import SwimInvert from '../assets/swimInvert.svg'

/* This code exports an array of objects containing data for the left navigation bar of a website or
application. Each object represents a different category of activity, such as yoga, swimming,
biking, or weightlifting, and includes the class name for styling, the logo image, an inverted
version of the logo image for hover effects, and an alt text description for accessibility. This
data can be imported and used in other parts of the codebase to display the navigation bar and its
associated icons. */

export const leftNavbarData = [
    { className: 'yoga', logo: Yoga, logoInvert: YogaInvert, alt: 'yoga icon' },
    { className: 'swim', logo: Swim, logoInvert: SwimInvert, alt: 'natation icon' },
    { className: 'bike', logo: Bike, logoInvert: BikeInvert, alt: 'vélo icon' },
    { className: 'weight', logo: Weight, logoInvert: WeightInvert, alt: 'altére icon' }
]