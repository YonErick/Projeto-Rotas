import React from 'react'
import {Link} from 'react-router-dom'

import './Header.css'

export default function Header() {
    return(
        <div className='menu'>
            <nav className='navMenu'>
                <ul>
                    <li> <Link to="/"> HOME </Link> </li>
                    <li> <Link to="/record"> Record </Link> </li>
                    <li> <Link to="/cultura"> Cultura </Link> </li>
                    <li> <Link to="/band"> Band </Link> </li>
                    <li> <Link to="/globo"> Globo </Link> </li>
                    <li> <Link to="/sbt"> Sbt </Link> </li>
                </ul>
            </nav>
        </div>
    )
} 
