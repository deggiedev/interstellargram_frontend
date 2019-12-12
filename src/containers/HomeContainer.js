import React from 'react';
import ImageCard from '../components/ImageCard'
import { Card } from 'semantic-ui-react'

class HomeContainer extends React.Component {
 
    render() {
      return (
          <>
            <Card.Group className="HomeContainer">
            {this.props.posts.map(post => <ImageCard post={post}/>)}
            </Card.Group>
          </>
        );
      }
    }
  
export default HomeContainer;