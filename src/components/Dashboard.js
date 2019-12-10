import React from 'react'
import DashboardCard from './DashboardCard.js'
import Location from './Location.js'

class Dashboard extends React.Component {
    render() {
        return (
            <>
              <Location celestialEvents={this.props.celestialEvents}/>
              {Object.entries(this.props.celestialEvents).map(([key, value]) => key !== 'location' ? <DashboardCard celestialEvent={key} celestialEventData={value}/> : null)}
            </>       
        )
    }
}

export default Dashboard;