import React from 'react'
import UserForm from './UserForm'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link } from "react-router-dom";
import Home from '../containers/Home'
import MyAstronomy from '../containers/MyAstronomy'
import CelestialEvents from '../containers/CelestialEvents'
import { List } from 'semantic-ui-react'

const Navbar = ({celestialEvents, posts, user, signUp, logIn, logOut, errors, submit }) => {
    return (
        <Router>        
            <nav>
                {
                    user && !user.error ? 
                    <>
                        <div>
                            <List horizontal>
                                <List.Item >
                                    <Link className="Home" to='/'>Home</Link>
                                </List.Item>
                                <List.Item>
                                    <Link className="My-Astronomy" to='/myastronomy'>My Astronomy</Link>
                                </List.Item>
                                <List.Item>
                                    <Link className="Celestial-Events" to='/celestialevents'>Celestial Events</Link>
                                </List.Item>
                                <List.Item>
                                    <Link className="log-out" onClick={logOut}>Log out</Link>
                                </List.Item>
                            </List>
                        </div>  
                        <Switch>
                            <Route path='/myastronomy'>
                                <MyAstronomy posts={posts} user={user} errors={errors} submit={submit} />
                            </Route>
                            <Route path='/celestialevents'>
                                <CelestialEvents celestialEvents={celestialEvents} user={user}/>
                            </Route>
                            <Route path='/'>
                                <Home posts={posts} user={user}/>
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