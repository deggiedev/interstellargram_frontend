import React from 'react'
import Logo from '../HatchfulExport-All/logo_transparent.png'
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
import {
    Image,
    Flex,
    Box
  } from 'rebass'

const Navbar = ({celestialEvents, posts, user, signUp, logIn, logOut, errors, submit}) => {
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
                        <Image
                                src={Logo}
                                sx={{
                                    width: [ '100%', '50%' ],
                                    borderRadius: 8,
                                    }}
                        />
                            <UserForm submit={logIn} header={'Log in'} /> 
                            <UserForm submit={signUp} header={'Sign up'} />   
                        </>
                }
            </nav>
        </Router>
    )
}

export default Navbar