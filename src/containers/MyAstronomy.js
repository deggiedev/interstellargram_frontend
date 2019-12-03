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

  //componentDidUpdate(prevProps) {
  //  if (prevProps.user.posts !== this.props.user.posts) {
  //    this.getPosts()
  //    .then(posts => this.setState({ posts }))
  //  }
  //}

  //componentDidMount() {
  //    this.getPosts()
  //    .then(posts => this.setState({ posts }))
  //}

    render() {
      return (
          <>
            <PostForm errors={this.props.errors} submit={this.props.submit}/>
            {this.props.posts.map(post => post.user.id === this.props.user.id ? <ImageCard post={post}/> : null)}
          </>
        );
      }
    }
  
export default MyAstronomy;