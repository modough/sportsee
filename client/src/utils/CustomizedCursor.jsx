import React from "react";
import PropTypes from 'prop-types'
import { Rectangle } from "recharts";
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
    points: PropTypes.number
}