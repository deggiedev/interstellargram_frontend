import React from 'react';
import ImageCard from '../components/ImageCard'
import { Card } from 'semantic-ui-react'

class MyAstronomyContainer extends React.Component {
 
    render() {
      return (
          <>
            <Card.Group centered className="MyAstronomyContainer">
                {this.props.posts.map(post => post.user.id === this.props.user.id ? <ImageCard post={post}/> : null)}
            </Card.Group>
          </>
        );
      }
    }
  
export default MyAstronomyContainer;