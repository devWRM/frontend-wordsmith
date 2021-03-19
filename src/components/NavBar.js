import React from 'react';
import { Link } from 'react-router-dom';


import Home from './Home.js';
import About from './About.js';
import SubjectList from './SubjectList.js';
import Resources from './Resources.js';

function NavBar() {
    return (
        <div>
            
            <Link to='./'>Home</Link>
            <Link to='./about'>About</Link>
            <Link to='./subjects'>Subjects</Link>
            <Link to='./resources'>Resources</Link>


            {/* <Home />
            <About />
            <SubjectList />
            <Resources /> */}
            
        </div>
    )
}

export default NavBar;
