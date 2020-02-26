import React from 'react';
import ImageCard from '../components/ImageCard'
import { Tiles } from '@rebass/layout'

class MyAstronomyContainer extends React.Component {
 
    render() {
      return (
          <>
            <Tiles p={4} pt={2} columns={[2, null, 4]}>
                {this.props.posts.map(post => post.user.id === this.props.user.id ? <ImageCard post={post}/> : null)}
            </Tiles>
          </>
        );
      }
    }
  
export default MyAstronomyContainer;