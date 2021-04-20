import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

// import Home from './Home.js';
// import About from './About.js';
// import SubjectList from './SubjectList.js';
// import Resources from './Resources.js';


function NavBar() {
    return (
        <div style = {{ padding: '10px', fontSize: '30px' }}>
            
            <Link className='navbar-link' to='/'>Home</Link>
            <Link className='navbar-link' to='/about'>About</Link>
            <Link className='navbar-link' to='/subjects'>Subjects</Link>
            <Link className='navbar-link' to='/resources'>Resources</Link>


            {/* <Home />
            <About />
            <SubjectList />
            <Resources /> */}
            
        </div>
    )
}

export default NavBar;
