import React from "react";
import ReactSVG from 'react-svg';
import python from '../../Assets/Img/python.svg'

const PythonLogo = () => ({
    render() {
        return (
            <ReactSVG src={python} svgStyle={{ width:50, height:50, margin:10 }} wrapper="span" />
        )
    }
});

export default PythonLogo;