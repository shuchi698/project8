import React, { useState } from 'react';
import './Header.css';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'visible';
    }

    return (
        <div className='Header'>
            <div className='header-box'>
                <div className='title'>
                    <div className='the'><span>The</span></div>
                    <div className='siren'>
                        <span className='rubber-letter'>S</span>
                        <span className='rubber-letter'>i</span>
                        <span className='rubber-letter'>r</span>
                        <span className='rubber-letter'>e</span>
                        <span className='rubber-letter'>n</span>
                    </div>
                </div>
                {
                    isOpen ? (
                        <span className="times" onClick={toggle}>
                            <i className="fas fa-times fa-2x"></i>
                        </span>
                    ) : (
                        <span className="bar" onClick={toggle}>
                            <i className="fas fa-bars fa-2x"></i>
                        </span>
                    )
                }
            </div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar />
        </div>
    )
}

export default Header;