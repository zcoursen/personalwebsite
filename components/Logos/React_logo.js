import React from "react";
import ReactSVG from 'react-svg';
import React_SVG from '../../Assets/Img/React-icon.svg'

const React_logo = () => ({
    render() {
        return (
            <ReactSVG src={React_SVG} svgStyle={{ width:50, height:50, margin:10 }} wrapper="span" />
        )
    }
});

export default React_logo;