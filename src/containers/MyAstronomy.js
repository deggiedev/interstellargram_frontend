import React from 'react';
import ImageCard from '../components/ImageCard'

class MyAstronomy extends React.Component {
 
    render() {
      return (
          <>
            <h1>My Astronomy</h1>
            {this.props.user.posts.map(post => <ImageCard post={post}/>)}
          </>
        );
      }
    }
  
export default MyAstronomy;