import React, { useState } from 'react';
import './NavItem.css'

function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className='navItem'>
            <a href='#' className='navItem__button' onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    )
}

export default NavItem
