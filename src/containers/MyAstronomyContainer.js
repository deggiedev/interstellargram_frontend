import React from 'react';
import ImageCard from '../components/ImageCard'

class MyAstronomyContainer extends React.Component {
 
    render() {
      return (
          <>
            <div className="MyAstronomyContainer">
                {this.props.posts.map(post => post.user.id === this.props.user.id ? <ImageCard post={post}/> : null)}
            </div>
          </>
        );
      }
    }
  
export default MyAstronomyContainer;