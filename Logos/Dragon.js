import React from "react";
import ReactSVG from 'react-svg';
import dragon from '../../Assets/Img/White Dragon.svg'

const Dragon = () => ({
    render() {
        return (
            <ReactSVG src={dragon} svgStyle={{ width:50, height:50}} wrapper="span" />
        )
    }
});

export default Dragon;