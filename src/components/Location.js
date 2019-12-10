import React from 'react';

class Location extends React.Component {
 
    render() {
      return (
          <>
            <h1>{this.props.celestialEvents.location.city}</h1>
            <h2>{this.props.celestialEvents.location.district}</h2>
          </>
        );
      }
    }
  
export default Location;
