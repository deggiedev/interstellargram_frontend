import React from 'react';

class CelestialEvents extends React.Component {
 
    render() {
      return (
          <>
            <ul>
              <li>Moonrise: {this.props.celestialEvents.moonrise}</li>
              <li>Moonset: {this.props.celestialEvents.moonset}</li>
              <li>Sunrise: {this.props.celestialEvents.sunrise}</li>
              <li>Sunset: {this.props.celestialEvents.sunset}</li>
            </ul>
          </>
        );
      }
    }
  
export default CelestialEvents;
