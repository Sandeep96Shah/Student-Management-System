import React from 'react';
import { Route, Redirect } from 'react-router';
import Auth from './Auth';

export default function ProtectedRoute({component:Component, ...rest}) {
    return (
        <div>
            <Route
                {...rest}
                render={ (props) => {
                    if(Auth.isAuthenticated()){
                        return <Component {...props} />
                    }
                    else{
                        return <Redirect to="/student_sign_in" />
                    }
                } }
            />
        </div>
    )
}
