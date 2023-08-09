'use client'
import React, {useState} from "react";
import {BsList} from 'react-icons/bs';


function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const toggleSidebar = () => {
        let sidebar = document.querySelector("#sidebar");
        sidebar.classList.toggle("close");
    }
    return (
        <div className="navbar-dashboard">
            <div className='d-flex flex-row align-items-center'>
                <button className='btn ms-3 text-2xl' onClick={toggleSidebar}>
                    <BsList/>
                </button>
            </div>
        </div>
    );
}

export default Header;