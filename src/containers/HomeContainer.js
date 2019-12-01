import React from 'react';
import ImageCard from '../components/ImageCard'

class HomeContainer extends React.Component {
 
    render() {
      return (
          <>
            {this.props.posts.map(post => <ImageCard post={post}/>)}
          </>
        );
      }
    }
  
export default HomeContainer;