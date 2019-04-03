import React from 'react';

import '../Side Drawer/MenuButton';
import './Toolbar.css';
import MenuButton from '../Side Drawer/MenuButton';
import Dragon from '../Logos/Dragon';


const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_nav">
            <div className="toolbar-toggle-button">
                <MenuButton className="toolbar_menu_button" click={props.drawerclickHandler}/>
            </div>
            <div className="logo"><Dragon /></div>
            <div className="spacer" />
            <div className="toolbar_nav_items">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/resume">Resume</a></li>
                <li><a href="/contact">Contact</a></li>

            </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;
