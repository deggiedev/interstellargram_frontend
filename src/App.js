import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import API from './adapters/API';

class App extends React.Component {

  state = {
    user: undefined,
    posts: [],
    celestial_events: [],
    showUserForm: false
  }

  getPosts = () => {
    return fetch('http://localhost:3000/posts')
    .then(resp => resp.json())
  }

  getCelestialEvents = () => {
    return fetch('https://api.ipgeolocation.io/astronomy?apiKey=a492bb5528154602849fdaf2624c7e38')
    .then(resp => resp.json())
  }

  componentDidMount() {
    this.getPosts()
    .then(posts => this.setState({ posts }))
    this.getCelestialEvents()
    .then(celestial_events => this.setState({ celestial_events }))
    API.validateUser()
      .then(user => {
        this.setState({ user })
      })
  }

  signUp = user => {
    API.signUp(user)
      .then(user => this.setState({ user }))
  }

  logIn = user => {
    API.logIn(user)
      .then(user => this.setState({ user }))
  }

  logOut = () => {
    API.clearToken()
    this.setState({ user: undefined })
  }

  submitPost = (post) => {
    API.postPost(post)
      .then(data => this.setState({ user: { ...this.state.user, posts: [...this.state.user.posts, data.post] } })) 
      .catch(errorPromise => {
        errorPromise
          .then(data => {
            this.setState({ errors: data.errors })
          })
      })
  }

  showUserForm = () => {
    this.setState({showUserForm: !this.state.showUserForm})
  }

  render() {
    return (
      <div className="App">
        <Navbar 
        className="Navbar"
        posts={this.state.posts} 
        user={this.state.user}
        celestialEvents={this.state.celestial_events} 
        signUp={this.signUp} 
        logIn={this.logIn} 
        logOut={this.logOut} 
        errors={this.state.errors} 
        submit={this.submitPost}
        showUserForm={this.showUserForm}
        showUserFormState={this.state.showUserForm}
        />
      </div>
    );
  }
}


export default App;