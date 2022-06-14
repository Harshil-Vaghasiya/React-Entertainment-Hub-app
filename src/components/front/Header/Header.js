import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = ({cartItems}) => {
    return (
        <>
            <header className='header'>
                <div>
                    <h1>
                        <NavLink to='/' className='logo'>
                            Electronics Shop
                        </NavLink>
                    </h1>
                </div>
                <div className="header-links">
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                    </ul>
                    <ul>
                        <li><NavLink to='/signup'>Signup</NavLink></li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to='/cart' className='cart'>
                                <i className='fas fa-shopping-cart'></i>
                                <span className='cart-length'>
                                    {cartItems.length===0?'':cartItems.length}
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;
