import React from 'react';
import HomeContainer from './HomeContainer'

class Home extends React.Component {

  state = {
    posts: []
  }

  getPosts = () => {
   return fetch('http://localhost:3000/posts')
   .then(resp => resp.json())
  }

  componentDidMount() {
    this.getPosts()
    .then(posts => this.setState({ posts }))
  }

    render() {
      return (
          <>
            {this.props.user ? <HomeContainer posts={this.state.posts} /> : null}
          </>
        );
      }
    }
  
export default Home;