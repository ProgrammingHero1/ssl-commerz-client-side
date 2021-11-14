import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { loggedInUser, isLoading } = useAuth();
    console.log(loggedInUser);
    if (isLoading) {
        return (
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        );
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser?.email ? children : <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}>
                </Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRoute;