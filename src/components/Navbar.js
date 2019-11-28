import React from 'react'
import UserForm from './UserForm'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link } from "react-router-dom";
import Home from '../containers/Home'
import MyAstronomy from '../containers/MyAstronomy'

const Navbar = ({ user, signUp, logIn, logOut }, props) => {
    return (
        <Router>        
            <nav>
                {
                    user && !user.error ? 
                    <>
                        <div>
                            <button onClick={logOut}>Log out</button>
                            <ul>
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/myastronomy'>My Astronomy</Link>
                                </li>
                            </ul>
                        </div>  
                        <Switch>
                            <Route path='/myastronomy'>
                                <MyAstronomy/>
                            </Route>
                            <Route path='/'>
                                <Home user={user}/>
                            </Route>
                        </Switch>
                        </>                
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