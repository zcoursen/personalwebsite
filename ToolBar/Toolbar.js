import React from 'react';
import '../Side Drawer/MenuButton';
import './Toolbar.css';
import Navigation from '../Navigation';
import MenuButton from '../Side Drawer/MenuButton';
import Dragon from '../Logos/Dragon';


const Toolbar = ( props ) => (
    <header className="toolbar">
        <nav className="toolbar_nav">
            <div className="toolbar-toggle-button">
                <MenuButton className="toolbar_menu_button" click={props.drawerclickHandler}/>
            </div>
            <div className="logo"><Dragon /></div>
            <div className="spacer" />
            <div className="toolbar_nav_items">
                <Navigation />
            </div>
        </nav>
    </header>
);

export default Toolbar;
