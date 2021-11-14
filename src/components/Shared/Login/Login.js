import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import BannerImage from '../../../images/aboutImage.jpg'
import Navbar from '../Navbar/Navbar';

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signInUsingGoogle, registerUser, setUserName } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location?.state?.from || "/home"
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleNameChange = e => {
        setName(e.target.value)
    }
    const createUser = e => {
        e.preventDefault();
        console.log(email, password);
        registerUser(email, password).then(result => {
            setUserName(name)
                .then(result => {
                    console.log("name updated", name)
                })
            history.push(redirect_uri);
        })

    }
    return (
        <div className="container">

            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6 shadow p-5">
                    <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input onChange={handleNameChange} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input onChange={handleEmailChange} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input onChange={handlePasswordChange} type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="text-danger">Forgot your password?</label>
                    </div>
                    <div className="from-group mt-5">
                        <button className="btn btn-primary" type="submit" onClick={createUser}>Register</button>
                    </div>

                    <button className="btn btn-primary mt-3" onClick={handleGoogleLogin}>Google Sign in</button>
                </div>
                
                
                <div className="col-md-6 d-none d-md-block">
                    <img className="img-fluid" src={BannerImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;