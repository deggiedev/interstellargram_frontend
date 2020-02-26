import React from 'react'
import '../App.css';
import UserFormContainer from '../containers/UserFormContainer.js'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link } from "react-router-dom";
import Home from '../containers/Home'
import MyAstronomy from '../containers/MyAstronomy'
import CelestialEvents from '../containers/CelestialEvents'
import { List } from 'semantic-ui-react'
import { Image }  from 'rebass'
import Logo from '../images/logo_transparent.png'

const Navbar = ({celestialEvents, posts, user, signUp, logIn, logOut, errors, submit, showUserForm, showUserFormState }) => {
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
                            {showUserFormState === true ? <UserFormContainer className="UserFormContainer" loginSubmit={logIn}  signupSubmit={signUp}/> 
                            :
                            <>                     
                                <Image src={Logo} onClick={() => showUserForm()} sx={{ width: 800, borderRadius: 8, }} />               
                            </>}
                        </>
                }
            </nav>
        </Router>
    )
}

export default Navbar