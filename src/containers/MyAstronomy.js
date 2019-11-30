import React from 'react';

class MyAstronomy extends React.Component {
 
    render() {
      return (
          <>
            <h1>My Astronomy</h1>
            <img alt='' src={this.props.user.posts.map(post => post.image)}></img>
          </>
        );
      }
    }
  
export default MyAstronomy;