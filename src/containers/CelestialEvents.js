import React from 'react';
import Dashboard from '../components/Dashboard.js'
import Location from '../components/Location.js'

class CelestialEvents extends React.Component {
 
    render() {
      return (
          <>
            <Location className="location" celestialEvents={this.props.celestialEvents}/>
            <Dashboard celestialEvents={this.props.celestialEvents}/>
          </>
        );
      }
    }
  
export default CelestialEvents;
