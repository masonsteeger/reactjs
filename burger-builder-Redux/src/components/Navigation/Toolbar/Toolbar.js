import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.DrawerToggle} onClick={props.open}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <Logo height="80%"/>
        <nav className={classes.DesktopOnly}>
            <NavItems isAuth={props.isAuth}/>
        </nav>
    </header>
);

export default toolbar;