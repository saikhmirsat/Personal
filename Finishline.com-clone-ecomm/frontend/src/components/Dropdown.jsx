import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { men, NavNewArrival } from './NavbarData'
import { NavMenSlider } from './NavSlider'
import { LoginContext } from '../context/LoginDetail'
import { useContext } from 'react'




export const MenDropdown = () => {

    const [dropdown, setDropdown] = useState(false)
    return (
        <div className="nav-men-main-con">
            <div id='MenSubmenu' className={dropdown ? 'Men-Submenu-Open' : 'Men-Submenu-Close'} onClick={() => setDropdown(!dropdown)}>
                {
                    men.map((ele) => <p id={ele.id === 1 ? 'mensItem-Heading' : 'notHeading'} key={ele.id}>{ele.title}</p>)
                }
            </div>
            <div className='nav-men-slider-con'>
                <NavMenSlider />
            </div>
        </div>
    )
}
export const NewArrivalDropdown = () => {
    const [dropdown, setDropdown] = useState(false)
    return (
        <div id='NewArrival-Submenu' className={dropdown ? 'Newarrival-Submenu-Open' : 'Newarrival-Submenu-Close'} onClick={() => setDropdown(!dropdown)}>
            {
                NavNewArrival.map((ele) => <div key={ele.id}>
                    <img src={ele.image} alt="" />
                    <a href='/'>{ele.title}</a>
                </div>)
            }
        </div>
    )
}

// const checkIsAuth = JSON.parse(localStorage.getItem("isAuth"))
// const isAdmin = JSON.parse(localStorage.getItem("isAdmin"))

export const AccountDropdown = () => {

    const { isAdmin, isAuth } = useContext(LoginContext)

    const [dropdown, setDropdown] = useState(false)
    return (
        <div id='Account-Submenu' className={dropdown ? 'Account-Submenu-Open' : 'Account-Submenu-Close'} onClick={() => setDropdown(!dropdown)}>
            <Link to={isAdmin || isAuth ? '/userprofile' : "/signin"}>{isAdmin || isAuth ? "Profile" : "Sign In"}</Link>
            {isAdmin ? <Link to="/admindashboard">Dashboard</Link> : ""}
            <Link to="/status">STATUS</Link>
            <Link to="/favorites">Favorites</Link>
        </div>
    )
}