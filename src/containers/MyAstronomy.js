import React from 'react';
import ImageCard from '../components/ImageCard';
import PostForm from '../components/PostForm';

class MyAstronomy extends React.Component {
 
  //state = {
  //  posts: []
  //}

  //getPosts = () => {
  //  return fetch('http://localhost:3000/posts')
  //  .then(resp => resp.json())
  //}

  //componentDidUpdate(prevprops) {
  //  if (prevprops) {
  //    this.getPosts()
  //    .then(posts => this.setState({ posts }))
  //  }
  //}

    render() {
      return (
          <>
            <PostForm errors={this.props.errors} submit={this.props.submit}/>
            {this.props.user.posts.map(post =>  <ImageCard post={post}/>)}
          </>
        );
      }
    }
  
export default MyAstronomy;