import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ()=>{
    return(
        <>
        <div className='nav-container'>
            <ul>
                <li><h1>NoteBox</h1></li>
                <li><Link to='/register' className='navlink firstlink'>Register</Link></li>
                <li><Link to='/login' className='navlink'>Login</Link></li>
            </ul>
        </div>
        </>
    );
}

export default Navbar;