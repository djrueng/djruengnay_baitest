import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles.scss';
import { AiOutlineMenu, AiOutlineDown, AiOutlineClose } from 'react-icons/ai';
import { PiShoppingCartDuotone } from 'react-icons/pi';
import { click } from '@testing-library/user-event/dist/click';


function NavBar(props) {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <>

            <div className='navbar'>
                <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}
                    onClick={() => setIsMobile(false)}
                >
                    <li>
                        <NavLink to="/" className='home'>Home {isMobile ? <AiOutlineDown className='icon-menu' /> : ''}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tours" className='tours'>Tours <AiOutlineDown className='icon-menu' /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/booking" className='booking'>Booking <AiOutlineDown className='icon-menu' /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/destinations" className='destination'>Destinations <AiOutlineDown className='icon-menu' /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/pages" className='pages'>Pages <AiOutlineDown className='icon-menu' /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className='blog'>Blog <AiOutlineDown className='icon-menu' /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/shortcodes" className='shortcodes'>Shortcodes <AiOutlineDown className='icon-menu' /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop" className='shop'>Shop <AiOutlineDown className='icon-menu' /></NavLink>
                    </li>
                    <li>
                        <NavLink to="#" className='icons-cart'><AiOutlineMenu /></NavLink>
                    </li>
                    <li className='cart-mb'>
                        <div className="cart_count">0</div>
                        <NavLink to="#" className='icons-cart'><PiShoppingCartDuotone /></NavLink>
                    </li>
                </ul>

                <button className='mobile-menu-icon'
                    onClick={() => setIsMobile(!isMobile)}
                >
                    <ul className='menu-mobile'>
                        <li>
                            {isMobile ? <AiOutlineClose /> : <AiOutlineMenu />}
                        </li>
                        <li>
                            <div className="cart_count">0</div>
                            <NavLink to="#" className='icons-cart'><PiShoppingCartDuotone /></NavLink>
                        </li>
                    </ul>

                </button>
            </div>


        </>
    );
}

export default NavBar;