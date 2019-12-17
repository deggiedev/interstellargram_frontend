import React from 'react';
import { Card } from 'semantic-ui-react'

class Location extends React.Component {
 
    render() {
      return (
        <>
          <Card centered>
            <h2>{this.props.celestialEvents.location.city}</h2>
            <h3>{this.props.celestialEvents.location.district}</h3>
          </Card>
         </> 
        );
      }
    }
  
export default Location;
