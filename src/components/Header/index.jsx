import React from 'react';
import logo from '../../assets/images/logo.png';
import BackgroundVideo from '../../assets/images/bacground-video.mp4';
import './styles.scss';
import NavBar from '../Nav';
import { NavLink } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineCalendar, AiOutlineDown } from 'react-icons/ai';
import { HiSwitchVertical } from 'react-icons/hi';
import { BiDollar, BiChevronUp } from 'react-icons/bi';

function Header(props) {
    return (
        <div id='header'>
            <div id="bg-video">
                <video className='videoTag' autoPlay loop muted>
                    <source src={BackgroundVideo} type='video/mp4' />
                </video>
            </div>
            <div className='top-bar'>
                <div id='logo'>
                    <NavLink to="/" className='home'>
                        <img src={logo} className="App-logo" alt="logo" />
                    </NavLink>
                </div>
                <NavBar />
            </div>
            <div id="form">
                <div className='heading-text'>
                    <h2 className='heading-h2'>Where do you want to go?</h2>
                    <p>Trips, experiences, and places. All in one service.</p>
                </div>
                <form action='#' className='form'>
                    <div className='form-row1'>
                        <div className='input-form'>
                            <input type='input' placeholder='Destination, city' /><AiOutlineSearch />
                        </div>
                        <div className='input-form'>
                            <input type='input' placeholder='Any Moth' /><AiOutlineCalendar />
                        </div>
                        <div className='input-form'>
                            <input type='input' placeholder='Sort By Date' /><HiSwitchVertical />
                        </div>
                        <div className='input-form'>
                            <button>Search</button>
                        </div>
                    </div>
                    <div className='form-row2'>
                        <div className='input-form'>
                            <input type='input' placeholder='All Categories' /><AiOutlineDown />
                        </div>
                        <div className='input-form'>
                            <input type='input' placeholder='Any Destinations' /><AiOutlineDown />
                        </div>
                        <div className='input-form'>
                            <input type='input' placeholder='Max budget ex. 500' /><BiDollar />
                        </div>
                    </div>
                </form>
                <div className='Advanced-earch'>
                    <a href='/'>Advanced Search <BiChevronUp /></a>
                </div>
            </div>
        </div>



    );
}

export default Header;