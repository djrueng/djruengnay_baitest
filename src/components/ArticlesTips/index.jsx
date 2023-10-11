import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import Img11 from '../../assets/images/photo-1469920783271-4ee08a94d42d-960x636.jpg';
import Img12 from '../../assets/images/pexels-photo-212388-960x636.jpeg';
import Img13 from '../../assets/images/pexels-photo-24484-960x636.jpg';
import { MdNavigateNext } from 'react-icons/md';

function ArticlesTips(props) {
    return (
        <div className='ArticlesTips'>
            <div className='main-content'>
                <div className='heading-title'>
                    <h2>Articles & Tips</h2>
                    <p>Explore some of the best tips from around the world</p>
                </div>
                <div className='ArticlesTips-content'>
                    <div className='content-img'>
                        <div className='item-img'>
                            <Link to='/'>
                                <img src={Img11} className="img" alt="item" />
                            </Link>
                        </div>
                        <div className='item-content'>
                            <div className='post-detail'>
                                <span><Link to='/'>December 10, 2016</Link></span>
                                <h6>Memorial Day to Someone Told Me to Travel</h6>
                            </div>
                            <p>Meh synth Schlitz, tempor duis single-origin coffee ea next
                                level ethnic fingerstache...
                            </p>
                            <div className='redmore'>
                                <Link to='/'>Read more <MdNavigateNext /> </Link>
                            </div>
                        </div>
                    </div>
                    <div className='content-img'>
                        <div className='item-img'>
                            <Link to='/'>
                                <img src={Img12} className="img" alt="item" />
                            </Link>
                        </div>
                        <div className='item-content'>
                            <div className='post-detail'>
                                <span><Link to='/'>December 10, 2016</Link></span>
                                <h6>Memorial Day to Someone Told Me to Travel</h6>
                            </div>
                            <p>Meh synth Schlitz, tempor duis single-origin coffee ea next
                                level ethnic fingerstache...
                            </p>
                            <div className='redmore'>
                                <Link to='/'>Read more <MdNavigateNext /> </Link>
                            </div>
                        </div>
                    </div>
                    <div className='content-img'>
                        <div className='item-img'>
                            <Link to='/'>
                                <img src={Img13} className="img" alt="item" />
                            </Link>
                        </div>
                        <div className='item-content'>
                            <div className='post-detail'>
                                <span><Link to='/'>December 10, 2016</Link></span>
                                <h6>Memorial Day to Someone Told Me to Travel</h6>
                            </div>
                            <p>Meh synth Schlitz, tempor duis single-origin coffee ea next
                                level ethnic fingerstache...
                            </p>
                            <div className='redmore'>
                                <Link to='/'>Read more <MdNavigateNext className='icon-rm' /> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticlesTips;