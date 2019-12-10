import React from 'react';
import Dashboard from '../components/Dashboard.js'

class CelestialEvents extends React.Component {
 
    render() {
      return (
          <>
            <Dashboard celestialEvents={this.props.celestialEvents}/>
          </>
        );
      }
    }
  
export default CelestialEvents;
