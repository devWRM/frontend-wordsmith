import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home.js';
import About from './About.js';
import SubjectList from './SubjectList.js';
import Subject from './Subject.js';
import Word from './Word.js';

function Routes() {
    return (
        <div>
            ROUTES HERE
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route exact path='/subjects' component={SubjectList} />
                <Route path='/subjects/:id' component={Subject} />
                <Route path='/subjects/:id/words/:id' component={Word} />
            </Switch>


        </div>
    )
}

export default Routes
