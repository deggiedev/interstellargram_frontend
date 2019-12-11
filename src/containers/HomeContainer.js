import React from 'react';
import ImageCard from '../components/ImageCard'

class HomeContainer extends React.Component {
 
    render() {
      return (
          <>
            <div className="HomeContainer">
            {this.props.posts.map(post => <ImageCard post={post}/>)}
            </div>
          </>
        );
      }
    }
  
export default HomeContainer;