import React from 'react';
import ImageContainer from './ImageContainer'

class MainContainer extends React.Component {

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
            {this.props.activeuser ? <ImageContainer posts={this.state.posts} /> : null}
          </>
        );
      }
    }
  
export default MainContainer;