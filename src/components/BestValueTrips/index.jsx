import React from 'react';
import { Link } from 'react-router-dom';
import Img5 from '../../assets/images/5.jpeg';
import Img6 from '../../assets/images/pexels-photo-197657-700x466.jpeg';
import Img7 from '../../assets/images/pexels-photo-96420-700x466.jpeg';
import { AiFillStar, AiOutlineStar, AiOutlineClockCircle } from 'react-icons/ai';
import { BiDollar } from 'react-icons/bi';
import './styles.scss';


function BestValueTrips(props) {
    return (
        <div className='bestvaluetrips'>
            <div className='heading-title'>
                <h2>Best value trips</h2>
                <p>Best offers trips from us</p>
            </div>
            <div className='main-content'>
                <div className='content-img'>
                    <div className='item-img'>
                        <Link to='#'>
                            <img src={Img5} className="img" alt="item" />
                        </Link>
                        <div className='tours-price'>
                            <span><BiDollar />5 days</span>
                        </div>
                    </div>
                    <div className='content-text'>
                        <div className='heading-text'>
                            <Link to='/'>
                                <h2>French Autumn</h2>
                            </Link>
                            <p>City Tours, Urban</p>
                        </div>
                        <div className='start-views'>
                            <div className='start'>
                                <Link to='/'><AiFillStar /></Link>
                                <Link to='/'><AiFillStar /></Link>
                                <Link to='/'><AiFillStar /></Link>
                                <Link to='/'><AiFillStar /></Link>
                                <Link to='/' className='start-white'><AiOutlineStar /></Link>
                            </div>
                            <div className='views'>
                                <p className='clock'>
                                    <AiOutlineClockCircle />
                                </p>&nbsp;
                                <p>4 reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='content-img'>
                    <div className='item-img'>
                        <Link to='#'>
                            <img src={Img6} className="img" alt="item" />
                        </Link>
                        <div className='tours-price'>
                            <span><BiDollar />5 days</span>
                        </div>
                    </div>
                    <div className='content-text'>
                        <div className='heading-text'>
                            <Link to='/'>
                                <h2>French Autumn</h2>
                            </Link>
                            <p>City Tours, Urban</p>
                        </div>
                        <div className='start-views'>
                            <div className='start'>
                                <Link to='/'><AiFillStar /></Link>
                                <Link to='/'><AiFillStar /></Link>
                                <Link to='/'><AiFillStar /></Link>
                                <Link to='/'><AiFillStar /></Link>
                                <Link to='/' className='start-white'><AiOutlineStar /></Link>
                            </div>
                            <div className='views'>
                                <p className='clock'>
                                    <AiOutlineClockCircle />
                                </p>&nbsp;
                                <p>4 reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='content-img'>
                    <div className='item-img'>
                        <Link to='/'>
                            <img src={Img7} className="img" alt="item" />
                        </Link>
                        <div className='tours-price'>
                            <span><BiDollar />5 days</span>
                        </div>
                    </div>
                    <div className='content-text'>
                        <div className='heading-text'>
                            <Link to='/'>
                                <h2>French Autumn</h2>
                            </Link>
                            <p>City Tours, Urban</p>
                        </div>
                        <div className='start-views'>
                            <div className='start'>
                                <Link to='/'><AiFillStar /></Link>
                                <Link to='/'><AiFillStar /></Link>
                                <Link to='/'><AiFillStar /></Link>
                                <Link to='/'><AiFillStar /></Link>
                                <Link to='/' className='start-white'><AiOutlineStar /></Link>
                            </div>
                            <div className='views'>
                                <p className='clock'>
                                    <AiOutlineClockCircle />
                                </p>&nbsp;
                                <p>4 reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BestValueTrips;