import React from 'react'
import UserForm from './UserForm'
import {
    BrowserRouter as Router,
    Route,
    Link } from "react-router-dom";


const Navbar = ({ user, signUp, logIn, logOut }) => {
    return (
        <Router>        
            <nav>
                {
                    user && !user.error ? 
                        <div>
                            <button onClick={logOut}>Log out</button>
                            <ul>
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link >My Astronomy</Link>
                                </li>
                                <li>
                                    <Link>Astronomy Events</Link>
                                </li>
                            </ul>
                        </div>  
                                        
                        :
                        <>
                            <UserForm submit={signUp} header={'Sign up'} />
                            or
                            <UserForm submit={logIn} header={'Log in'} />
                        </>
                }
            </nav>
        </Router>
    )
}

export default Navbar