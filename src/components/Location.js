import React from 'react';
import { Header, Icon } from 'semantic-ui-react'

class Location extends React.Component {
 
    render() {
      return (
        <>
          <div>
            <Header as='h2' icon textAlign='center'>
              <Icon name='moon' circular />
              <Header.Content>{this.props.celestialEvents.location.country_name}</Header.Content>
            </Header>
          </div>  
         </> 
        );
      }
    }
  
export default Location;
