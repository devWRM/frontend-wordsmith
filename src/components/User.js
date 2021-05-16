import React from 'react';
import { connect } from 'react-redux';

import UserForm from './UserForm.js';



class User extends React.Component {

    render() {

        return(
            <div>
                <UserForm />
                USER!
            </div>
        )

    }



}

export default User;
