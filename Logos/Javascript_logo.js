import React from "react";
import ReactSVG from 'react-svg';
import Javascript_logo from '../../Assets/Img/Javascript_logo.svg'

const Javascriptlogo = () => ({
    render() {
        return (
            <ReactSVG src={Javascript_logo} svgStyle={{ width:50, height:50, margin: 10 }} wrapper="span" />
        )
    }
});

export default Javascriptlogo;