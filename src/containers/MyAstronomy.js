import React from 'react';
import ImageCard from '../components/ImageCard';
import PostForm from '../components/PostForm';

class MyAstronomy extends React.Component {
 
    render() {
      return (
          <>
            <PostForm errors={this.props.errors} submit={this.props.submit}/>
            {this.props.user.posts.map(post => <ImageCard post={post}/>)}
          </>
        );
      }
    }
  
export default MyAstronomy;