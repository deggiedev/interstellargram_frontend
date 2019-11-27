import React from 'react';
import ImageCard from '../components/ImageCard'

class ImageContainer extends React.Component {
 
    render() {
      return (
          <>
            {this.props.posts.map(post => <ImageCard post={post}/>)}
          </>
        );
      }
    }
  
export default ImageContainer;