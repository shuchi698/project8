import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className='nav'>
                <ul className='nav-menu'>
                    <li><NavLink to="/home" data-hover='Home'>Home</NavLink></li>
                    <li><NavLink to="/category1/?name=bollywood" data-hover='Bollywood'>Bollywood</NavLink></li>
                    <li><NavLink to="/category2/?name=technology" data-hover='Technology'>Technology</NavLink></li>
                    <li><NavLink to="/category3/?name=hollywood" data-hover='Hollywood' >Hollywood</NavLink></li>
                    <li><NavLink to="/category4/?name=travel" data-hover='Travel'>Travel</NavLink></li>
                    <li><NavLink to="/category5/?name=food" data-hover='Food'>Food</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;