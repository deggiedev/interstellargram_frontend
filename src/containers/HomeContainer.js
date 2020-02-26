import React from 'react';
import ImageCard from '../components/ImageCard'
import { Tiles } from '@rebass/layout'

class HomeContainer extends React.Component {
 
    render() {
      return (
          <>
            <Tiles p={4} pt={2} columns={[2, null, 4]}>
                {this.props.posts.map(post => <ImageCard post={post}/>)}
            </Tiles>
          </>
        );
      }
    }
  
export default HomeContainer;