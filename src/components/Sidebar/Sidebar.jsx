import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggle }) => {

    const clickHandler = () => {
        toggle();
        window.scrollTo(0, 0);
    }

    const toggleClass = isOpen ? 'show' : 'hide';

    return (
        <div className='Sidebar'>
            <div className={'sidebar-container ' + toggleClass}>
                <div className='sidebar-wrapper'>
                    <ul className='sidebar-menu'>
                        <li><NavLink to="/home" onClick={clickHandler} >Home</NavLink></li>
                        <li><NavLink to="/category1/?name=bollywood" onClick={clickHandler} >Bollywood</NavLink></li>
                        <li><NavLink to="/category2/?name=technology" onClick={clickHandler} >Technology</NavLink></li>
                        <li><NavLink to="/category3/?name=hollywood" onClick={clickHandler} >Hollywood</NavLink></li>
                        <li><NavLink to="/category4/?name=travel" onClick={clickHandler} >Travel</NavLink></li>
                        <li><NavLink to="/category5/?name=food" onClick={clickHandler} >Food</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;