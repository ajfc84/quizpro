import {React, } from 'react'
import logo from '../logo.png';
import '../css/Header.css'

const Header = () => {
    return (
        <div id="navigation" className="navigation">
            <img src={logo} alt="quiz pro logo"/>
        </div>
    )
} 
export default Header