import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className='flex justify-between px-10 py-5 shadow-lg'>
            <div>
                <img src={logo} alt="" />
            </div>
            <ul className='flex  space-x-10 text-lg font-bold items-center'>
                <li className=''>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Donation
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/Statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Statistics
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
export default Navbar;