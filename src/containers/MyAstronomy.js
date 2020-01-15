import React from 'react';
import PostForm from '../components/PostForm';
import MyAstronomyContainer from '../containers/MyAstronomyContainer'

class MyAstronomy extends React.Component {

  state = {
    cloudinary_resources: []
  }

  getCloudinaryResources = () => {
    return fetch('https://349724159291328:7JSDsjtZYRDPQHk_xtYN3uo5rsE@api.cloudinary.com/v1_1/dinzh7vu8/resources/image')
    .then(resp => resp.json())
  }

  componentDidMount() {
    this.getCloudinaryResources()
    .then(images => this.setState({ cloudinary_resources: images }))
      }
 
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