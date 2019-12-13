import React from 'react';
import HomeContainer from './HomeContainer'

class Home extends React.Component {

    render() {
      return (
          <>
            {this.props.user ? <HomeContainer posts={this.props.posts} /> : null}
          </>
        );
      }
    }
  
export default Home;