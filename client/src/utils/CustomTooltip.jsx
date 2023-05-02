import React, { Fragment } from "react";
import PropTypes from 'prop-types'
import '../styles/customTooltip.css';

/**
 * This is a custom tooltip component in JavaScript React that displays information based on the style
 * and payload provided.
 * @returns A React component called CustomTooltip is being returned. The component takes in three
 * props: active (a boolean), payload (an array), and style (a string). If active is true and payload
 * is not null or empty, the component returns either a div with class "custom-tooltip session" and a
 * paragraph with class "time" displaying the value of the first item in the payload array followed by
 * "
 */

export const CustomTooltip = ({ active, payload, style }) => {
    if (active && payload && payload.length) {
        return (
            <Fragment>
                {
                    style === 'session' ?
                        <div className="custom-tooltip session">
                            <p className="time"> {`${payload[0].value} min`} </p>
                        </div> :
                        <div className='custom-tooltip activity'>
                            <p className='label-kilogram'>
                                {`${payload[0].value}kg`}
                            </p>
                            <p className='label-calory'>
                                {`${payload[1].value}kcal`}
                            </p>
                        </div>
                }
            </Fragment>
        );
    }
    return null;
};

CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
    style: PropTypes.string
}