import React from 'react';
import { Card } from 'semantic-ui-react'

class Location extends React.Component {
 
    render() {
      return (
        <>
          <Card centered>
            <h1>{this.props.celestialEvents.location.city}</h1>
            <h2>{this.props.celestialEvents.location.district}</h2>
          </Card>
         </> 
        );
      }
    }
  
export default Location;
