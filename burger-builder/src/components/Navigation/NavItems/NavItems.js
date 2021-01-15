import React from 'react';

import classes from './NavItems.css'
import NavItem from './NavItem/NavItem'

const navItems = () => (
    <ul className={classes.NavItems}>
        <NavItem link='/' >Burger Builder</NavItem>
        <NavItem link='/orders'>Order</NavItem>
    </ul>
)

export default navItems;