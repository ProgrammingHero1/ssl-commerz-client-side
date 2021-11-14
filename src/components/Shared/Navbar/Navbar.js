import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import useAuth from '../../../hooks/useAuth';
import carLogo from '../../../images/654.jpg' 
const Navbar = () => {
    
    const {loggedInUser, logOut} = useAuth();
 
    
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                <Link to="/home"><div className="d-flex">
                     <img src={carLogo} style={{ height: '50px', width: '100px' }} alt="" />
                        <h1 className="navbar-brand">MAMA <br />JABEN?</h1>
                    </div></Link >
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">

                            <Link to="/home" className="nav-link">Home</Link>
                            {   
                                loggedInUser?.email?
                                 <button className="btn btn-warning me-2" onClick={logOut} >Log out</button> :
                                 <Link to="/login"> <button className="btn btn-warning me-2" >Log In</button></Link> 
                            }
                            { 
                                loggedInUser?.displayName && <button className="btn btn-success">{loggedInUser?.displayName}</button>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;