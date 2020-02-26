import React from 'react';
import PostForm from '../components/PostForm';
import MyAstronomyContainer from '../containers/MyAstronomyContainer'
import { Box, Flex, Image } from 'rebass'

class MyAstronomy extends React.Component {
 
    render() {
      return (
          <> 
          <Flex mx={-2}>
              <Box width={1/2}>
                  <Image src={'https://cdn.pixabay.com/photo/2012/11/28/09/08/mars-67522_960_720.jpg'} 
                  sx={{
                        width: 188,
                        height: 188,
                        borderRadius: 9999,
                      }}
                  />  
              </Box>
              <Box  width={1/2}>
                
              </Box>
            </Flex>             
            <Flex mx={-2}>
              <Box width={1/2}>
                  <PostForm currentUser={this.props.user} errors={this.props.errors} submit={this.props.submit}/>  
              </Box>
              <Box  width={1/2}>
                  <MyAstronomyContainer user={this.props.user} posts={this.props.posts} />
              </Box>
            </Flex>             
          </>
        );
      }
    }
  
export default MyAstronomy;