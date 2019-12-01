import React from 'react';
import ImageCard from '../components/ImageCard'

class MyAstronomy extends React.Component {
 
    render() {
      return (
          <>
            <textarea placeholder={'description...'}></textarea>
            <textarea></textarea>
            {this.props.user.posts.map(post => <ImageCard post={post}/>)}
          </>
        );
      }
    }
  
export default MyAstronomy;