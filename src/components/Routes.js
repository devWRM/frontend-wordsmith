import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home.js';
import About from './About.js';
import Resources from './Resources.js';
import SubjectList from './SubjectList.js';
import Subject from './Subject.js';
import Word from './Word.js';

function Routes() {
    return (
        <div>
            
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/resources' component={Resources} />
                <Route exact path='/subjects' component={SubjectList} />
                <Route exact path='/subjects/:id/words/:id' component={Word} />
                <Route path='/subjects/:id' component={Subject} />
            </Switch>


        </div>
    )
}

export default Routes
