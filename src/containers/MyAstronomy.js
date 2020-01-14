import React from 'react';
import PostForm from '../components/PostForm';
import MyAstronomyContainer from '../containers/MyAstronomyContainer'

class MyAstronomy extends React.Component {
 
    render() {
      return (
          <>
            <PostForm currentUser={this.props.user} errors={this.props.errors} submit={this.props.submit}/>
            <MyAstronomyContainer user={this.props.user} posts={this.props.posts} />            
          </>
        );
      }
    }
  
export default MyAstronomy;