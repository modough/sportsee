import React from "react";
import PropTypes from 'prop-types'
import { Rectangle } from "recharts";


/**
 * This is a React component that renders a customized cursor as a rectangle with a given width and
 * position.
 * @returns A React component that renders a Rectangle with a specified width, height, and x position,
 * and a fill color of 'rgba(0,0,0,0.2)'. The component takes two props: width (a number) and points (a
 * number).
 */

export const CustomizedCursor = ({ width, points }) => {
    return (
        <Rectangle
            fill='rgba(0,0,0,0.2)'
            width={width}
            height={width}
            x={points[0].x}
        />
    );
};
CustomizedCursor.propTypes = {
    width: PropTypes.number,
    points: PropTypes.array
}