import React from 'react'
import './Navbar.css'
import { IoIosSearch } from 'react-icons/io';
import { CiLocationOn } from 'react-icons/ci';
import { BsPersonCircle } from 'react-icons/bs';
import { BsBag } from 'react-icons/bs';
import logo from '../image/sportszone.png'
import { Link, useNavigate } from 'react-router-dom';
import { AccountDropdown } from './Dropdown';
import { useState } from 'react';
import NavHamburger from './NavHamburger'



export default function Navbar1() {
    const [DropdownAccount, setDropdownAccount] = useState(false)
    const navigate = useNavigate()
    const bagfunc = () => {
        navigate('/cart')
    }


    return (
        <div className='navbar1'>
            <div className='navbar1-box'>
                <div className='nav1-left'>
                    <Link to="/"> <img src={logo} alt="" /></Link>
                </div>
                <div className='nav1-right'>
                    <div className='nav1-search-div'>
                        <IoIosSearch className="nav-search-icon" />
                        <input type="text" placeholder='Search' />
                    </div>
                    <div>
                        <CiLocationOn className='nav-location-icon' />
                        <p>Choose a store</p>
                    </div>
                    <div
                        onMouseEnter={() => setDropdownAccount(true)}
                        onMouseLeave={() => setDropdownAccount(false)}
                    >
                        <BsPersonCircle className='nav-profile-icon' />
                        <p>Account</p>
                        {DropdownAccount && <AccountDropdown />}
                    </div>
                    <div onClick={bagfunc}>
                        <BsBag className='nav-bag-icon'/>
                        <p>Bag</p>
                    </div>
                </div>
            </div>
            <NavHamburger />
        </div>
    )
}
