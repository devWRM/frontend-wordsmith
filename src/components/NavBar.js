import React from 'react';


import Home from './Home.js';
import About from './About.js';
import SubjectList from './SubjectList.js';
import Resources from './Resources.js';

function NavBar() {
    return (
        <div>
            <Home />
            <About />
            <SubjectList />
            <Resources />
            
        </div>
    )
}

export default NavBar;
